var arrayWords = ["this", "is", "an", "array"];
var maxLength = 3;
var newArray = [];

function filterLongWords(arrayWords) {
	for(i=0; i<arrayWords.length; i++) {
		if (arrayWords[i].length > maxLength) {
			newArray.push(arrayWords[i]);
		} 
	}
	console.log(newArray);
}

filterLongWords(arrayWords);