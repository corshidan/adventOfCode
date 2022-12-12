import fs from 'fs';

const content = fs.readFileSync('input.txt', 'utf8');
// fs.readFile('input.txt', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	return data;
// });

let current = 0;
let maxValue = 0;
const podium = {
	first: 0,
	second: 0,
	third: 0,
};
const checkTop3 = (podium, value) => {
	if (value > podium.first) {
		podium.third = podium.second;
		podium.second = podium.first;
		podium.first = value;
	} else if (value > podium.second) {
		podium.third = podium.second;
		podium.second = value;
	} else if (value > podium.third) {
		podium.third = value;
	}
};
content.split('\n').map((value) => {
	if (value === '') {
		if (current > maxValue) {
			maxValue = current;
		}
		checkTop3(podium, current);
		current = 0;
	}
	current += +value;
});

console.log(Object.values(podium).reduce((a, b) => a + b, 0));
