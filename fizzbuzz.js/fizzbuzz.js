var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var eating = function(b) {
	var newArray = [];
	for(var i = 1; i <= b.length; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			newArray.push("fizzbuzz");
		}
		else if (i % 3 === 0) {
			newArray.push("fizz");
		}
		else if (i % 5 === 0) {
			newArray.push("buzz");
		}
		else {
			newArray.push(i);
		}
	}
	return newArray;
};
console.log(eating(arr));