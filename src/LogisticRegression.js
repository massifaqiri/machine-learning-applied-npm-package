/**
* @file Logistic Regression algorithm
* @author Massi Faqiri <faqima01@luther.edu>
* @copyright Massi Faqiri 2020
* @license MIT
*/


// Importing mathjs package
const math = require("mathjs");

/** 
* Calculates the sigmoid of the given matrix, which will be needed to calculate the logistic regression.
* @param {math.matrix} z - This is the desired matrix for which sigmoid will be calculated.
* @return {math.matrix} The returned matrix will be the matrix that will be used for prediction later.
*/
function sigmoid(z) {
    let g = math.evaluate(`1 ./ (1 + e.^-z)`, {
      z,
    });
    return g;
}

/** 
* It calculates the gradient descent given the following parameters. Gradient Descent will give us the thetas that will be used for Logistic Regression.
* @param {math.matrix} X - This matrix contains the input features. 
* @param {math.matrix} y - This matrix contains the output values, with respect to their input features. 
* @param {number} alpha - This is the learning rate.
* @param {number} iterations - This is the number of iterations, i.e. how many times to iterate until we find the optimum thetas. 
* @return {math.matrix} It returns a matrix that contains the thetas that will be used for logistic prediction.
*/
function gradientDescent(X, y, alpha, iterations) {
    const m = y.size()[0];
    var theta = [[-25], [0], [0]] 
    for (let i = 0; i < iterations; i++) {
      let h = sigmoid(math.evaluate(`X * theta`, {
        X,
        theta,
      }));
  
      theta = math.evaluate(`theta - alpha / m * ((h - y)' * X)'`, {
        theta,
        alpha,
        m,
        X,
        y,
        h,
      });
    }
    return theta;
}
/** 
* This function predicts using logistic regression.
* @param {Array} input1Array - The first input array containing the data in numbers.
* @param {Array} input2Array - The second input array containing the data in numbers.
* @param {Array} outputArray - The output array containing outputs in 0s and 1s, with respect to the given input arrays.
* @param {number} desiredInput1 - The desired input1 (number) for which prediction should happen.
* @param {number} desiredInput2 - The desired input2 (number) for which prediction should happen.
* @param {number} alpha - The learning rate. The default is set for best result. Change it only if you know.
* @param {number} iterations - The number of iterations for finding optimum learning rate. The default is set for this too. 
* @return {number} Returns the predicted probability between 0 and 1, based on the inputs.
*/
function LogisticPrediction(input1Array, input2Array, outputArray, desiredInput1, desiredInput2, alpha=0.001, iterations=600) {
    var xArray = []
    var yArray = []
    if (input1Array.length != input2Array.length || input2Array.length != outputArray.length) {
      return "Apparently your input and output parameters are not of equal lengths or they are not of type array. Please make sure they are of equal lengths and of types array.";
    }

    for (let i=0; i<input1Array.length; i++) {
        xArray[i] = [1, input1Array[i], input2Array[i]];
        yArray[i] = [outputArray[i]];
    }
    var x = math.matrix(xArray);
    var y = math.matrix(yArray);
    var m = y.size()[0];
    var thetas = gradientDescent(x, y, alpha, iterations);
    var p = sigmoid(math.evaluate('desiredInput * thetas', {
        desiredInput: [1, desiredInput1, desiredInput2],
        thetas,
    }));

    return math.matrix(p).get([0]);
}


module.exports = LogisticPrediction;