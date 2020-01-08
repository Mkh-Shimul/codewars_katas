/*
Problem:  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
          Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
          For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
          Your task is to convert strings to how they would be written by Jaden Smith.
          The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/
String.prototype.toJadenCase = function (str) {
  //var str = "How can mirrors be real if our eyes aren't real";
  let str1 = this.split(' ');
  for(let i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
  }
  return str1.join(' ');
};

// TEST CASES:
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
