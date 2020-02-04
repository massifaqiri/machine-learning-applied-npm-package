/**
* @file Univariate Linear Regression algorithm
* @author Massi Faqiri <faqima01@luther.edu>
* @copyright Massi Faqiri 2020
* @license MIT
*/

// Importing mathjs package
const math = require("mathjs");

/**
 * @description Returns the predicted output based on the given arrays of inputs and their respective outputs, and the target input
 * @param {Array} input - The array of inputs containing numbers
 * @param {Array} output - The array of outputs containing numbers
 * @param {number} targetInput - The target input (of type number)
 * @param {number} [alpha=0.01] - Optional: alpha (aka learning rate) is set to 0.01, change it if you wish and know what you are doing
 * @param {number} [iterations=1500] - Optional: iterations is set to 1500, change it if you wish and know what you are doing
 * @returns {number} The predicted output based on the given target input
 */

function LinearRegressionUni(
  input,
  output,
  targetInput,
  alpha = 0.01,
  iterations = 1500
) {

  if (input.length != output.length) {
    return "Apparently your input and output parameters are not of equal lengths or they are not of type array. Please make sure they are of equal lengths and of types array.";
  }
  
  // Putting all elements into a list of list, so it can be turned into a matrix
  var xArray = []
  var yArray = []
  for (let i=0; i<input.length; i++) {
    xArray[i] = [1, input[i]];
    yArray[i] = [output[i]];
  }

  // Initializing the necessary variables
  var x = math.matrix(xArray);
  var y = math.matrix(yArray);
  var m = y.size()[0];
  var theta = [[0], [0]];
  var firstTheta = theta[0];
  var secondTheta = theta[1];

  // Running Gradient Descent
  for (let i = 0; i < iterations; i++) {

    // Calculating the hypothesis or prediction
    var h = math.evaluate("x * theta", {
      x,
      theta: [firstTheta, secondTheta]
    });

    firstTheta = math.evaluate(`firstTheta - alpha * (1 / m) * sum(h - y)`, {
      firstTheta,
      alpha,
      m,
      h,
      y
    });

    secondTheta = math.evaluate(
      `secondTheta - alpha * (1/m) * sum((h - y) .* x[:, 2])`,
      {
        secondTheta,
        alpha,
        m,
        h,
        y,
        x
      }
    );
  }
  return math.evaluate('inputMatrix * thetaMatrix', {
    inputMatrix: [1, targetInput], 
    thetaMatrix: [firstTheta, secondTheta],
  })[0];
}

module.exports = LinearRegressionUni;