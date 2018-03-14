var words = ["hi", "hello", "bye", "good", "morning", "sleepy"];
var maxLength = 5;
	var newArrary = [];
	for (var i = 0; i < words.length; i++) {
		if(words[i].length < maxLength) {

		newArrary.push(words[i]);
		console.log(words[i]);	
		}
}