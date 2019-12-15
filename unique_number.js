/* 
Problem: There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers
The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) { 
  let notUnique;
  for (let i=0; i<arr.length; i++) {
    if(arr[i] === arr[i+1] || arr[i] === arr[i+2]) {
      notUnique = arr[i];
      break;
    }
  }
  for(let j=0; j<arr.length; j++) {
    if(arr[j] != notUnique) {
      return arr[j];
    }
  }
}
 
	// Test Cases
	findUniq([ 0, 1, 0 ]), 1;
	findUniq([ 1, 1, 1, 2, 1, 1 ]), 2;
	findUniq([ 3, 10, 3, 3, 3 ]), 10;