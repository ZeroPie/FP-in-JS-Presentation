const arr = [1, 1, 1, 1]

const multiplyBy = (factor, number)
  => number
    => factor * number

const double = multiplyBy(2)
const triple = multiplyBy(3)

arr
  .map(double)
  .map(triple)