const arr = [1, 1, 1, 1]

var multiplyBy = function multiplyBy(factor, number) {
  return function (number) {
    return factor * number
  }
}

const double = multiplyBy(2)
const triple = multiplyBy(3)

arr
  .map(double)
  .map(triple)
