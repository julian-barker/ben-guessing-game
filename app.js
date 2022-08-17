'use strict';

const answers = new Map();
answers.set('age', 29);
answers.set('middle_name', 'Hugh');
answers.set('hs_grad_year', 2011);
answers.set('favorite_novel', 'Ulysses');

const greet = (name) => {
    console.log(`Hello, ${name}`);
};

const age = () => {
    let age = Number.parseInt(prompt('How old am I?'));
    if (age == answers.get('age')) {
	return true;
    }
    return false;
};

const middle_name = () => {
    let middle_name = prompt('What\'s my middle name? Choose from: Hector, Hugh, Howard, Hofstra').toLowerCase();
    if (middle_name == answers.get('middle_name').toLowerCase()) {
	return true;
    }
    return false;
};

const hs_grad_year = () => {
    let hs_grad_year = Number.parseInt(prompt('What year did I graduate high school?'));
    if (hs_grad_year == answers.get('hs_grad_year')) {
	return true;
    }
    return false;
};

const favorite_novel = () => {
    let favorite_novel = prompt('What\'s my favorite novel? A hint: it\'s a famous Greek hero').toLowerCase();
    if (favorite_novel == answers.get('favorite_novel').toLowerCase()) {
	return true;
    }
    return false;
};

const get_random = () => {
    return Math.floor(Math.random() * 10);
};

const guess_random_helper = (guess) => {
    const num = 5;
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

const guess_number = (num) => {
    let guess = Number.parseInt(prompt('Guess the number (between 1 and 10): '));
    if (guess_random_helper(guess)) {
	return true;
    }
    return false;
};

const guessing_game = () => {
    let name = greet(prompt('What\'s your name, friend?'));
    let num = get_random();
    while (true) {
	if (age() &&
	    middle_name() &&
	    hs_grad_year() &&
	    favorite_novel()) {
	    while (!guess_number()) {
		continue;
	    }
	    break;
	}
    }
    alert('You win');
};

guessing_game();
