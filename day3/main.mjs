const lowerLetterScore = 'abcdefghijklmnopqrstuvwxyz';
const upperLetterScore = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const commonLetters = [];

// input.forEach((input) => {
// 	const firstHalf = input.substring(0, Math.floor(input.length / 2));
// 	const secondHalf = input.substring(Math.floor(input.length / 2));
// 	new Set(firstHalf).forEach((char) => {
// 		if (secondHalf.includes(char)) {
// 			commonLetters.push(char);
// 		}
// 	});
// });

for (let i = 0; i < input.length; i += 3) {
	new Set(input[i]).forEach((char) => {
		if (input[i + 1].includes(char) && input[i + 2].includes(char)) {
			commonLetters.push(char);
		}
	});
}

const commonLetterScore = commonLetters.reduce((acc, char) => {
	if (lowerLetterScore.includes(char)) {
		return acc + lowerLetterScore.indexOf(char) + 1;
	}
	if (upperLetterScore.includes(char)) {
		return acc + upperLetterScore.indexOf(char) + 27;
	}
	return acc;
}, 0);

console.log(commonLetterScore);
