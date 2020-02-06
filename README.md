# Machine Learning Applied

This package contains various Machine Learning algorithms, simplified and applied. This package is inspired by 'Machine Learning' course of Andrew Ng at Coursera. My goal is to keep expanding it. Feel free to contribute!

# Features

* Linear Regression (with only one feature or input): useful for cases where you would like to predict an output based on the given inputs (only one type of feature/input) and their output
* Linear Regression (with multiple features or inputs): useful for cases where you would like to predict an output based on the given inputs (multiple features/inputs possible) and their output
* Logistic Regression: useful for cases where you would like to predict the possibility of an output based on the given two features/ inputs and their output

# How to Install

`npm install machine-learning-applied`

# How to Use

```
var {LinearRegressionUni} = require('machine-learning-applied');
var {LinearRegressionMulti} = require('machine-learning-applied');
var {LogisticPrediction} = require('machine-learning-applied');
```

LinearRegressionUni takes an input array and an output array of numbers, and the target input for which prediction is to happen. Then, it outputs the predicted number.

LinearRegressionMulti takes multiple input arrays, an output array and the target input for which prediction is to happen. Then, it outputs the predicted number.

LogisticRegression takes two input array with their output array which contains 0s and 1s, and the two desired inputs for which prediction is to happen. Then, it outputs a probability in range of 0 and 1. 

### Note: 

Each of the above functions are well-documented. So, while you use the function, you should see the descriptions. Also, learning rate and number of iterations are given at default. Change it only if you know what you are doing.

# Coming soon

* Image Classifier
* Neural Network
* K-means Clustering
* and more...

# Quick Note

I am actively seeking a full-time position. Please let me know if you know of any at: faqima01@luther.edu. Thanks a lot!

# License

The MIT License © 2020 Massi Faqiri. All rights reserved.

**Enjoy!**