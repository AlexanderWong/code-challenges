//Delete duplicates from an array of integers.

function deDuplicate(arr) {
  var cleanArray = [];
  arr.sort();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== cleanArray[cleanArray.length - 1]) {
      cleanArray.push(arr[i]);
    }
  }
  return cleanArray;
}
