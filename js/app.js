'use strict';

console.log('hi');

//get users name - prompt - alert a greeting back to the user
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}. Please answer the following quesitons with yes/no or y/n.`);


//prompt them with 5 yes/no questions, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(quesitonOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
  } else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
    alert('Sorry, you got it wrong');
  }

  // give a personalized message at the end