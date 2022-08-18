'use strict';

const greet = (name) => {
  console.log(`Hello, ${name}`);
};

const age = () => {
  const age = Number.parseInt(prompt('How old am I?'));
  if (age == 29) {
    return true;
  }
  return false;
};

const middleName = () => {
  // eslint-disable-next-line max-len
  const middleName = prompt('What\'s my middle name? Choose from:\n\tHector\n\tHugh\n\tHoward\n\tHofstra').toLowerCase();
  if (middleName == 'hugh') {
    return true;
  }
  return false;
};

const hsGradYear = () => {
  // eslint-disable-next-line max-len
  const hsGradYear = Number.parseInt(prompt('What year did I graduate high school?'));
  if (hsGradYear == 2011) {
    return true;
  }
  return false;
};

const favoriteNovel = () => {
  // eslint-disable-next-line max-len
  const favoriteNovel = prompt('What\'s my favorite novel? A hint: it\'s a famous Greek hero').toLowerCase();
  if (favoriteNovel == 'ulysses') {
    return true;
  }
  return false;
};

const favoriteMovie = () => {
  const favoriteMovie = prompt('What\'s my favorite movie?').toLowerCase();
  if (favoriteMovie == 'ghost dog') {
    return true;
  };
  return false;
};

const favoriteCity = () => {
  // eslint-disable-next-line max-len
  const cities = ['paris', 'berlin', 'new york city', 'los angeles', 'tokyo', 'baltimore'];
  let guesses = 0;
  while (guesses < 6) {
    guesses++;
    const favoriteCity = prompt('What\'s my favorite city?').toLowerCase();
    for (const city of cities) {
      if (favoriteCity == city) {
        alert(`You got it, my favorite city is ${city}`);
        return true;
      }
    }
  }
  return false;
};

const getRandom = () => {
  return Math.floor(Math.random() * 10);
};

const guessRandomHelper = (guess, num) => {
  if (num > guess) {
    alert('Try again: go higher');
  } else if (num < guess) {
    alert('Try again: go lower');
  } else if (num == guess) {
    alert('You got it!');
    return true;
  }
  return false;
};

const guessNumber = (num) => {
  // eslint-disable-next-line max-len
  const guess = Number.parseInt(prompt('Guess the number (between 1 and 10): '));
  if (guessRandomHelper(guess, num)) {
    return true;
  }
  return false;
};

// eslint-disable-next-line max-len
const questions = [age, middleName, hsGradYear, favoriteNovel, favoriteMovie, favoriteCity];

const guessingGame = () => {
  greet(prompt('What\'s your name?'));
  let correctAnswers = 0;
  for (const question of questions) {
    correctAnswers += question() ? 1 : 0;
  }
  let numGuesses = 0;
  const rand = getRandom();
  while (numGuesses < 4) {
    numGuesses++;
    const guess = guessNumber(rand);
    if (guess) {
      correctAnswers++;
      break;
    };
  }
  alert(`You got ${correctAnswers} questions right!`);
  return;
};

guessingGame();
