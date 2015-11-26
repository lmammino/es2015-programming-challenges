"use strict";

/*
 For a given string, check to see if it is a Palindrome.
 For "racecar" it should return true. For "apple" it should return false
*/

function palindrome(s) {
  for (let i=0; i < s.length/2; i++) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      return false;
    }
  }

  return true;
}

let tests = ['racecar', 'apple', 'ada', 'mouse', 'eve', 'detartrated', 'hello'];
tests.forEach( word => console.log(`"${word}"`, palindrome(word)) );
