// const getPairs = (array) => {
// 	let count = 0;
// 	array.forEach((pair) => {
// 		const [first, second] = pair.split(',');
// 		const [firstStart, firstEnd] = first.split('-');
// 		const [secondStart, secondEnd] = second.split('-');
// 		if (+firstStart === +secondStart && +firstEnd === +secondEnd) {
// 			count++;
// 			return;
// 		}
// 		if (+firstStart >= +secondStart && +firstEnd <= +secondEnd) {
// 			count++;
// 			return;
// 		}
// 		if (+secondStart >= +firstStart && +secondEnd <= +firstEnd) {
// 			count++;
// 			return;
// 		}
// 	});
// 	return count;
// };

const getPairs = (array) => {
	let count = 0;
	array.forEach((pair) => {
		const [first, second] = pair.split(',');
		const [firstStart, firstEnd] = first.split('-');
		const [secondStart, secondEnd] = second.split('-');
		if (+firstStart === +secondStart && +firstEnd === +secondEnd) {
			count++;
			return;
		}
		if (+firstStart >= +secondStart && +firstEnd <= +secondEnd) {
			count++;
			return;
		}
		if (+secondStart >= +firstStart && +secondEnd <= +firstEnd) {
			count++;
			return;
		}
		if (+firstStart < +secondStart && +firstEnd < +secondEnd && +firstEnd >= +secondStart) {
			count++;
			return;
		}
		if (+secondStart < +firstStart && +firstStart <= +secondEnd && +secondEnd < +firstEnd) {
			count++;
			return;
		}
	});
	return count;
};
