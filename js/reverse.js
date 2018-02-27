var inputString = "building".split('');

for (i = 0; i <= inputString.length; i++) {
	var reverse = inputString.length - i
	console.log(inputString[reverse]);
}