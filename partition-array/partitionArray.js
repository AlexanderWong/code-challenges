function partitionArr(arr) {
  var pivot = [];
  var left = [];
  var right = [];
  var partition = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      pivot.push(arr[i]);
    }
    if (arr[i] < 0) {
      left.push(arr[i]);
    }
    if (arr[i] > 0) {
      right.push(arr[i]);
    }
  }
  return partition(...left, ...pivot, ...right);
}

//or

// function partitionArray(arr){
//   let i = 0;
//   let j = arr.length - 1;
//   while(i < j){
//     if(arr[i] > 0){
//       if(arr[j < 0]){
//         //swap(arr, i, j);
//       }
//       j--;
//     }
//     elseif(arr[j] < 0){
//       if(arr[i] > 0){
//         //swap(arr, i, j);
//         i++;
//       }
//     }
//     else{
//       i++;
//       j--;
//     }
//   }
// }
