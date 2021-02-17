let sorted = [1, 3, 3, 3, 3, 3, 4, 5, 7, 8, 12, 54];
let currMax = -Infinity
let n = 7
let left = 0
let right = sorted.length - 1;

while(left < right){
   let midpoint = (Math.floor((left + right)/ 2));
   
   if(sorted[midpoint] < n) {
       left = midpoint+1
       currMax = sorted[midpoint];
    } else {
       right = midpoint
    }

}
return currMax

  function bSearch(left,right){
    if(left >= right){
       if(sorted[left] < n){
           return sorted[left];
       } else {
           return currMax;
       }
    }

    let midpoint = (Math.floor((left + right)/ 2))
    if(sorted[midpoint] < n) {
        currMax = sorted[midpoint];
       return bSearch(midpoint+1, right)
    } else {
       return bSearch(left, midpoint-1)
    }            
}
  
//Recursive Binary Search
let arr = [1,3,3,3,3,3,54,12,4,8,7];
let sorted = [1, 3, 3, 3, 3, 3, 4, 5, 7, 8, 12, 54];
let currMax = -Infinity
let n = 4

function bSearch(left,right){
    if(left >= right){
       if(sorted[left] < n){
           return sorted[left];
       } else {
           return currMax;
       }
    }

    let midpoint = (Math.floor((left + right)/ 2))
    if(sorted[midpoint] < n) {
        currMax = sorted[midpoint];
       return bSearch(midpoint+1, right)
    } else {
       return bSearch(left, midpoint-1)
    }            
}

 return bSearch(0, sorted.length-1)