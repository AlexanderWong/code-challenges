//Reverse an array. Don’t use a built-in reverse function.

function reverseArr(arr) {
  var newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
