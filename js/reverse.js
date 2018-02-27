reverseString = (stringed) => {
	let reversed = "";
	for(i=(stringed.length - 1); i>=0; i--) {
		reversed += stringed[i];
		// console.log(i);
	}
	console.log(reversed);
}

var inputString = 'building';
reverseString(inputString);
