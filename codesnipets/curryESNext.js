const arr = [1, 1, 1, 1]

const multiply = (num1, num2) 
    => num2
    => num1 * num2

const multiplyBy2 = multiply(2)
const multiplyBy3 = multiply(3)

arr
  .map(multiplyBy2)
  .map(multiplyBy3)