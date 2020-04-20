'use strict'

var arr = [1, 1, 1, 1]

var multiplyBy = function multiplyBy (factor, number) {
  return function (number) {
    return factor * number
  }
}

var multiplyBy2 = multiplyBy(2)
var multiplyBy3 = multiplyBy(3)
arr.map(multiplyBy2).map(multiplyBy3)
