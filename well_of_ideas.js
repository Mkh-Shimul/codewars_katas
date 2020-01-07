/*
Problem:  For every good kata idea there seem to be quite a few bad ones! In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
          If there are one or two good ideas, return 'Publish!',
          if there are more than 2 return 'I smell a series!'.
          If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
  var goodIdeas = 0;
  for(let i = 0; i < x.length; i++) {
    if(x[i] === 'good') {
      goodIdeas++;
    }
  }
  if(goodIdeas > 2) {
    return "I smell a series!";
  } else if(goodIdeas === 1 || goodIdeas === 2) {
      return "Publish!";
  } else return "Fail!";
}

// TEST CASES:
well(['bad', 'bad', 'bad']);
well(['good', 'bad', 'bad', 'bad', 'bad']);
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']);
