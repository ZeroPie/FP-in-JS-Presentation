const arr = [1,1]

function doubleItems(arr) {
  for (let i = 0; i < arr.length; i++) {
     arr[i] = arr[i] * 2
  }
}

doubleItems(arr)

arr // [2,2]