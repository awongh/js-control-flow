var arrayOfWords = ["test", "hello", "you", "abcdef"];
var maxLength = 4;
var newArray = [];

function arrayPusher (arrayOfWords) {
	for (var i = 0; i < arrayOfWords.length; i++) {
		if (arrayOfWords[i].length < maxLength) {
			newArray.push(arrayOfWords[i]);
		}
	}
	console.log(newArray);
}

arrayPusher(arrayOfWords);
