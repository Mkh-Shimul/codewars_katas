/*
Problem:    An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
            Note: anagrams are case insensitive
            Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

// write the function isAnagram
function isAnagram (test, original) {
    
    // Make sure both strings are in same cases...
    const str1 = test.toLowerCase();   
    const str2 = original.toLowerCase();   

    if(str1.length !== str2.length) return false;

    let newObject = {};

    for(let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      newObject[letter] ? newObject[letter] += 1 : newObject[letter] = 1;
    }
    
    for(let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if(!newObject[letter]) return false; 
      else newObject[letter] -= 1;
    }
    return true;
};


// TEST CASES: 
isAnagram("foefet", "toffee")               // true
isAnagram("Buckethead", "DeathCubeK")       // true
isAnagram("Twoo", "WooT")                   // true
isAnagram("dumble", "bumble")               // false
isAnagram("ound", "round")                  // false
isAnagram("apple", "pale")                  // false