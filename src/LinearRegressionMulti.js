/**
* @file Multivarite Linear Regression algorithm
* @author Massi Faqiri <faqima01@luther.edu>
* @copyright Massi Faqiri 2020
* @license MIT
*/

// Importing mathjs module
const math = require("mathjs");

/**
 * @description Returns the predicted output based on the given arrays (2 or more) of inputs and their respective output, and the target input
 * @param {Array} outputArray - The array of outputs containing numbers (must be one array) like, [1,2,3]
 * @param {number} desiredInputsArray - The array of target inputs (of type number) like, [1,2,3], in the same order as the next parameter
 * @param {Array} inputArray - The array of inputs containing numbers (must be more than one array) like, [1,2,3], [4,5,6], etc.
 * @returns {number} The predicted output based on the given target input and the data
 */
function LinearRegressionMulti(outputArray, desiredInputsArray, ...inputArray) {

    // Handle errors here
    for (let innerArr of inputArray) {
        if (innerArr.length != outputArray.length) {
            return "Apparently your input and output parameters are not of equal lengths or they are not of type array. Please make sure they are of equal lengths and of types array.";
        }
    }
    

    // Making arrays out of inputs for our algorithm
    var xArray = []
    var yArray = []
    for (let i=0; i<outputArray.length; i++) {
        yArray[i] = [outputArray[i]];
        var xToArray = [1];
        for (let inArr of inputArray) {
            xToArray.push(inArr[i]);
        }
        xArray[i] = xToArray;
    }

    // Making matrix of out the arrays above
    var xMatrix = math.matrix(xArray);
    var yMatrix = math.matrix(yArray);

    // Calculating thetas
    thetas = math.evaluate(`inv(xMatrix' * xMatrix) * xMatrix' * yMatrix`, {
        xMatrix: xMatrix,
        yMatrix: yMatrix,
    });
    desiredInputsArray.unshift(1);
    desiredInputsMatrix = math.matrix(desiredInputsArray);
    const result = math.evaluate('desiredInputsMatrix * thetas', {
        desiredInputsMatrix,
        thetas,
    });
    return math.subset(result, math.index(0));
}

module.exports = LinearRegressionMulti;