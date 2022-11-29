'use strict';

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}. Please answer the following quesitons with yes/no or y/n.`);

let questionOneGuess = prompt('Do I have a son?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry, you got it wrong.');
}

let questionTwoGuess = prompt('Do I live on a farm?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('Sorry, you got it wrong');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('You got it right!');
}

let questionThreeGuess = prompt('Was I in the military?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('You got it right!');
} else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('Sorry, you got it wrong');
}

let questionFourGuess = prompt('Did I go to college?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('You got it right!');
} else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('Sorry, you got it wrong');
}

let questionFiveGuess = prompt('Do I have a dog?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert(`Sorry, you got it wrong. Thanks for playing ${userName}!`);
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert(`You got it right! Thanks for playing ${userName}!`);
}

