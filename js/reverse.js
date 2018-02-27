
var inputString = 'building';

var strArray = inputString.split("");

newArray = [];

let revString;
//reverse count and output
for (i = 0; i < strArray.length; i++) {
	newArray.unshift(inputString[i]);
	revString = newArray.join('');
}

console.log(revString);