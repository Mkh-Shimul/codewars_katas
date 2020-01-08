/*
Problem:  Write a method sum (sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers and returns the sum of the numbers.
          These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative.
          If the array does not contain any numbers then you should return 0.
*/

function sum (numbers) {
  "use strict";
  let add = 0;
  if(numbers.length > 0 ) {
    for(let i = 0; i < numbers.length; i++) {
      add += numbers[i];
    }
  }
return add;
};

// TEST CASES:
sum([]), 0;
sum([1, 5.2, 4, 0, -1]), 9.2;
