/*
Problem:  The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
          Given a year, return the century it is in.

          Example:
          ---------------
          centuryFromYear(1705)  returns (18)
          centuryFromYear(1900)  returns (19)
*/

function century(year) {
  if(year < 0) {
    return;
  }
  if (year % 100 === 0) {
    return year / 100;
  } else {
    let remainder = year % 100;
    return ((year + 100) - remainder) / 100;
  }
}

// TEST CASES:
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
