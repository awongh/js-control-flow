var inputString = 'building';

var new_array = [];


for (i = 0; i < inputString.length; i ++) {
	new_array.unshift(inputString[i])
	var newer_string = new_array.join("")
	console.log(newer_string);
};