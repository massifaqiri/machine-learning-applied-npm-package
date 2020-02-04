// Importing the packages
var fs = require("fs");
const LinearReg = require('../src/LinearRegressionUni');
const LinearRegMulti = require('../src/LinearRegressionMulti');
const LogisticPrediction = require('../src/LogisticRegression');

// ******************Testing Linear Regression Uni**************************************

var inputRead = fs.readFileSync("./data/LinearRegUni/input.txt").toString("utf-8");
var inputArray = inputRead.split("\n");
var outputRead = fs.readFileSync("./data/LinearRegUni/output.txt").toString("utf-8");
var outputArray = outputRead.split("\n");
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === "\r" || inputArray[i] === "") {
    inputArray.splice(i);
    break;
  }
  inputArray[i] = parseFloat(inputArray[i].replace(" ", "").replace("\r", ""));
}
for (let i = 0; i < outputArray.length; i++) {
  if (outputArray[i] === "\r" || outputArray[i] === "") {
    outputArray.splice(i);
    break;
  }
  outputArray[i] = parseFloat(
    outputArray[i].replace(" ", "").replace("\r", "")
  );
}

var linearRegUniResult = LinearReg(inputArray, outputArray, 7);
// LinearReg(inputArray, outputArray, 7) should give us 45342.450129/10000
console.log(linearRegUniResult === 4.534245012944714);

// *********************************Testing Linear Regression Multi************************* 

var inputRead1 = fs.readFileSync("./data/LinearRegMulti/x1.txt").toString("utf-8");
var inputArray1 = inputRead1.split("\n");
var inputRead2 = fs.readFileSync("./data/LinearRegMulti/x2.txt").toString("utf-8");
var inputArray2 = inputRead2.split("\n");
var outputRead = fs.readFileSync("./data/LinearRegMulti/y.txt").toString("utf-8");
var outputArray = outputRead.split("\n");
for (let i = 0; i < inputArray1.length; i++) {
  if (inputArray1[i] === "\r" || inputArray1[i] === "") {
    inputArray1.splice(i);
    inputArray2.splice(i);
    outputArray.splice(i);
    break;
  }
  inputArray1[i] = parseFloat(inputArray1[i].replace(" ", "").replace("\r", ""));
  inputArray2[i] = parseFloat(inputArray2[i].replace(" ", "").replace("\r", ""));
  outputArray[i] = parseFloat(outputArray[i].replace(" ", "").replace("\r", ""));
}

const linearRegMultiResult = LinearRegMulti(outputArray, [2000, 3], inputArray1, inputArray2);
// LinearRegMulti(outputArray, [2000, 3], inputArray1, inputArray2, inputArray3) should give us roughly $341805.200241
console.log(linearRegMultiResult === 341805.200241065);

// *******************************Testing Logistic Regression*************************** 

var inputRead1 = fs.readFileSync("./data/LogisticReg/data1X1.txt").toString("utf-8");
var inputArray1 = inputRead1.split("\n");
var inputRead2 = fs.readFileSync("./data/LogisticReg/data1X2.txt").toString("utf-8");
var inputArray2 = inputRead2.split("\n");
var outputRead = fs.readFileSync("./data/LogisticReg/data1X3.txt").toString("utf-8");
var outputArray = outputRead.split("\n");
for (let i = 0; i < inputArray1.length; i++) {
  if (inputArray1[i] === "\r" || inputArray1[i] === "") {
    inputArray1.splice(i);
    inputArray2.splice(i);
    outputArray.splice(i);
    break;
  }
  inputArray1[i] = parseFloat(inputArray1[i].replace(" ", "").replace("\r", ""));
  inputArray2[i] = parseFloat(inputArray2[i].replace(" ", "").replace("\r", ""));
  outputArray[i] = parseFloat(outputArray[i].replace(" ", "").replace("\r", ""));
}

const lrResult = LogisticPrediction(inputArray1, inputArray2, outputArray, 45, 85);
// LogisticPrediction(inputArray1, inputArray2, outputArray, 45, 85) should give us roughly 0.775
console.log(lrResult === 0.7749278864017519);