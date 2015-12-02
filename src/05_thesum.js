"use strict";

/*
 You have an array with N integers and you should write a program to find two
 elements with given sum K within the array
 */

let findSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === sum) {
        return [arr[i], arr[k]];
      }
    }
  }

  return null;
}


console.log(findSum([14,22,3,4,6,88,7,10,1,3], 0));
console.log(findSum([14,22,3,4,6,88,7,10,1,3], 13));
console.log(findSum([14,-22,3,4,6,88,7,10,1,3], -21));
