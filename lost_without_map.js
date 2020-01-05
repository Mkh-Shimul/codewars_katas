/*
Problem:  Given an array of integers, return a new array with each value doubled.
          For example:
          [1, 2, 3] --> [2, 4, 6]
          For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/

function maps(x){
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i]+ x[i]);
  }
  return arr;
}

// TEST CASES:
maps([1, 2, 3]), [2, 4, 6]);
maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
