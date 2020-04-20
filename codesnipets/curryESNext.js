const arr = [1, 1, 1, 1]

const multiplyBy = (factor, number) => number
    => factor * number

const multiplyBy2 = multiplyBy(2)
const multiplyBy3 = multiplyBy(3)

arr
  .map(multiplyBy2)
  .map(multiplyBy3)