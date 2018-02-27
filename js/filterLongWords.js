var myWords = ["hello", "wow", "hippopotamus", "hi"];

var maxLength = 10;

var longWords = [];

for (var i = 0; i < myWords.length; i++) {
	if (myWords[i].length >10) {
		longWords.push(myWords[i]);
		console.log("The Maximum length is 10.")
	}
}