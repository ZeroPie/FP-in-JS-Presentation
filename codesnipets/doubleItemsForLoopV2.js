const arr = [1,1]

function doubleItems(arr) {
  let doubledItems = [];
  for (let i = 0; i < arr.length; i++) {
    doubledItems.push(arr[i] * 2)
  }
  return doubledItems
}

let newArr = doubleItems(arr)

arr    // [1,1]
newArr // [2,2]