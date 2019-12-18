/*

Problem: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/


function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let noswaps;
  for(let i = array.length; i > 0; i--) {
  noswaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(array[j].length > array[j+1].length) {
        let temp = array[j];``
        array[j] = array[j+1];
        array[j+1] = temp;
        noswaps = false;
      }
    } if(noswaps) break;
  }
  return array;
};


// TEST CASES
sortByLength(["Beg", "Life", "I", "To"]);
sortByLength(["", "Moderately", "Brains", "Pizza"]);