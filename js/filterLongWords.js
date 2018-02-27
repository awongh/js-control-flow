let words = ['Ant', 'Balloon', 'Car', 'Donkey'];

const maxLength = 5;

let filterLongWords = [];

for (let i = 0; i < words.length; i++) {
	if (words[i].length < maxLength) {
		filterLongWords.push(words[i]);
	}
};

console.log(filterLongWords);
console.log(maxLength);



