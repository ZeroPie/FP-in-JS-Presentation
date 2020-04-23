var arr = [1, 1, 1, 1]

var multiply = function multiply(num1, num2) {
  return function (num2) {
    return num1 * num2
  }
}

var multiplyBy2 = multiply(2)
var multiplyBy3 = multiply(3)

arr.map(multiplyBy2).map(multiplyBy3)
