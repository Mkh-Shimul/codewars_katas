/*
Problem: Write a function called repeatString which repeats the given String src exactly count times.
*/

function repeatStr (n, s) {
  let sum = "";
  for (let i = 0; i < n; i++) {
    sum += s;
  }
  return sum;
}

// TEST CASES:
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
