

var inputString = "building";
var letters = inputString.split("");
var newLetter = [];

for (i=0; i<inputString.length; i++){
	newLetter.unshift(letters[i]);
}

console.log(newLetter.join(""));





