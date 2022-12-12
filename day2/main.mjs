import fs from 'fs';

const content = fs.readFileSync('input.txt', 'utf8').split('\n');

let score = 0;

const heroPickTableScore = {
	X: 1,
	Y: 2,
	Z: 3,
};
const villanPickTable = { A: 'rock', B: 'paper', C: 'scissors' };
// const heroPickTable = { X: 'rock', Y: 'paper', Z: 'scissors' };

const getRoundScore = (villanPick, heroPick) => {
	let roundOutcome = heroPick === 'X' ? 'villanWin' : heroPick === 'Y' ? 'draw' : 'heroWin';
	let newHeroPick = getNewHeroPick(villanPick, roundOutcome);
	switch (roundOutcome) {
		case 'heroWin':
			return 6 + heroPickTableScore[newHeroPick];
		case 'villanWin':
			return 0 + heroPickTableScore[newHeroPick];
		case 'draw':
			return 3 + heroPickTableScore[newHeroPick];
		default:
			return;
	}
};
const getRoundOutcome = (villanPick, heroPick) => {
	if (villanPick === heroPick) {
		return 'draw';
	}
	if (villanPick === 'rock') {
		if (heroPick === 'paper') {
			return 'heroWin';
		} else {
			return 'villanWin';
		}
	}
	if (villanPick === 'paper') {
		if (heroPick === 'scissors') {
			return 'heroWin';
		} else {
			return 'villanWin';
		}
	}
	if (villanPick === 'scissors') {
		if (heroPick === 'rock') {
			return 'heroWin';
		} else {
			return 'villanWin';
		}
	}
};
const getNewHeroPick = (villanPick, roundOutcome) => {
	if (roundOutcome === 'draw') {
		if (villanPickTable[villanPick] === 'rock') return 'X';
		if (villanPickTable[villanPick] === 'paper') return 'Y';
		if (villanPickTable[villanPick] === 'scissors') return 'Z';
	}
	if (roundOutcome === 'villanWin') {
		if (villanPickTable[villanPick] === 'rock') return 'Z';
		if (villanPickTable[villanPick] === 'paper') return 'X';
		if (villanPickTable[villanPick] === 'scissors') return 'Y';
	}
	if (roundOutcome === 'heroWin') {
		if (villanPickTable[villanPick] === 'rock') return 'Y';
		if (villanPickTable[villanPick] === 'paper') return 'Z';
		if (villanPickTable[villanPick] === 'scissors') return 'X';
	}
};
content.forEach((round) => {
	if (round === '') return;
	score += getRoundScore(round[0], round[2]);
});

console.log(score);
