"use strict"

/*
For the given sentence "Done is better than perfect" return the reversed
sentence "Perfect than better is done".
*/

let text = "Done is better than perfect";
let parts = text.toLowerCase().split(' ').reverse();
parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].substring(1);
let result = parts.join(' ');
console.log(result);
