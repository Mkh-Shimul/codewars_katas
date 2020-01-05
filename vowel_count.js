/*
Problem:  Return the number (count) of vowels in the given string.
          We will consider a, e, i, o, and u as vowels for this Kata.
          The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;
  let words = str.split("");
	  for(let i = 0; i < words.length; i++) {
		  if(words[i] === "a" || words[i] === "e" || words[i] === "i" || words[i] === "o" || words[i] === "u") {
			  vowelsCount += words[i].length;
		  }
	  }
  return vowelsCount;
}

// TEST CASES:
getCount("abracadabra"), 5
