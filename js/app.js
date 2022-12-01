'use strict';

let answerTracker = 0;
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}. Please answer the following quesitons with yes/no or y/n.`);

yesNoQuestions();
numberGame();
top4Foods();

function yesNoQuestions() {
  let questionOneGuess = prompt('Do I have a son?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('You got it right!');
    answerTracker++;
  } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('Sorry, you got it wrong.');
  }

  let questionTwoGuess = prompt('Do I live on a farm?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('Sorry, you got it wrong');
  } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert('You got it right!');
    answerTracker++;
  }

  let questionThreeGuess = prompt('Was I in the military?').toLowerCase();

  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert('You got it right!');
    answerTracker++;
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('Sorry, you got it wrong');
  }

  let questionFourGuess = prompt('Did I go to college?').toLowerCase();

  if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert('You got it right!');
    answerTracker++;
  } else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert('Sorry, you got it wrong');
  }

  let questionFiveGuess = prompt('Do I have a dog?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert('Sorry, you got it wrong.');
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert('You got it right!');
    answerTracker++;
  }
}

function numberGame() {
  let attempts = 4;

  for (let i = 0; i < 4; i++) {

    let questionSixGuess = prompt(`How many countries have I visited? You have ${attempts} attempts.`);

    if (parseInt(questionSixGuess) === 16) {
      alert('You got it right!');
      answerTracker++;
      i = 4;
    } else if (questionSixGuess > 16) {
      alert('You guessed too high!');
      attempts--;
    } else if (questionSixGuess < 16) {
      alert('You guessed too low!');
      attempts--;
    }

    if (attempts === 0) {
      alert('I have visited 16 different countries.');
    }
  }
}

function top4Foods() {
  let favoriteFoods = ['pizza', 'pho', 'burritos', 'sticky-rice'];

  for (let i = 0; i < 6; i++) {
    let questionSevenGuess = prompt('What is one of my favorite meals to eat?');

    if (questionSevenGuess === favoriteFoods[0] || questionSevenGuess === favoriteFoods[1] || questionSevenGuess === favoriteFoods[2] || questionSevenGuess === favoriteFoods[3]) {
      alert('You got it right!');
      answerTracker++;
      i = 6;
    } else {
      alert('You got it wrong! Try again!');
    }
  }

  alert(`My favorite foods are: ${favoriteFoods}`);
}

alert(`Thanks for playing ${userName}! You got ${answerTracker} out of 7 correct!`);
