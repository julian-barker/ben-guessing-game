'use strict';

const questions = [
  'How old am I?',
  'What\'s my middle name? Choose from:\n\tHector\n\tHugh\n\tHoward\n\tHofstra',
  'What year did I graduate high school?',
  'What\'s my favorite novel? A hint: it\'s a famous Greek hero',
  'What\'s my favorite movie?',
];

const answers = [
  29,
  'hugh',
  2011,
  'ulysses',
  'ghost dog',
];


const greet = (name) => {
  console.log(`Hello, ${name}`);
};

const askQuestion = (q, a) => {
  const response = prompt(q);
  if (response == a) {
    alert('That\'s right!');
    return true;
  }
  return false;
}

// const askQuestionStr = (q, a) => {
//   const response = prompt(q).toLowerCase();
//   if (response === a) {
//     return true;
//   }
//   return false;
// }

// const age = (i) => {
//   const age = Number.parseInt(prompt(questions[i]));
  
// };

// const middleName = (i) => {
//   // eslint-disable-next-line max-len
//   const middleName = prompt(questions[i]).toLowerCase();
//   if (middleName == answers[i]) {
//     return true;
//   }
//   return false;
// };

// const hsGradYear = (i) => {
//   // eslint-disable-next-line max-len
//   const hsGradYear = Number.parseInt(prompt('What year did I graduate high school?'));
//   if (hsGradYear == 2011) {
//     return true;
//   }
//   return false;
// };

// const favoriteNovel = () => {
//   // eslint-disable-next-line max-len
//   const favoriteNovel = prompt('What\'s my favorite novel? A hint: it\'s a famous Greek hero').toLowerCase();
//   if (favoriteNovel == 'ulysses') {
//     return true;
//   }
//   return false;
// };

// const favoriteMovie = () => {
//   const favoriteMovie = prompt('What\'s my favorite movie?').toLowerCase();
//   if (favoriteMovie == 'ghost dog') {
//     return true;
//   };
//   return false;
// };

const favoriteCity = () => {
  // eslint-disable-next-line max-len
  const cities = ['paris', 'berlin', 'new york city', 'los angeles', 'tokyo', 'baltimore'];
  let guesses = 0;
  while (guesses < 6) {
    guesses++;
    const favoriteCity = prompt('What\'s my favorite city?').toLowerCase();
    for (const city of cities) {
      if (favoriteCity == city) {
        alert(`You got it, my favorite city is ${city}. The answers were ${cities}.`);
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

const guessNumber = () => {
  let numGuesses = 0;
  const rand = getRandom();
  while (numGuesses < 4) {
    numGuesses++;
    const guess = guessNumberHelper(rand);
    if (guess) {
      alert('Correct!');
      return true;
    };
  }
}

const guessNumberHelper = (num) => {
  // eslint-disable-next-line max-len
  const guess = Number.parseInt(prompt('Guess the number (between 1 and 10): '));
  if (guessRandomHelper(guess, num)) {
    return true;
  }
  return false;
};

// eslint-disable-next-line max-len
//const questions = [age, middleName, hsGradYear, favoriteNovel, favoriteMovie, favoriteCity];

const guessingGame = () => {
  greet(prompt('What\'s your name?'));
  let correctAnswers = 0;
  for (let i = 0; i < 5; i++) {
    if(askQuestion(questions[i], answers[i])) {
      correctAnswers++;
    }
  } 
  if(favoriteCity()) {
    correctAnswers++;
  }
  if(guessNumber()) {
    correctAnswers++;
  }
  alert(`You got ${correctAnswers} questions right!`);
  return;
};

guessingGame();
