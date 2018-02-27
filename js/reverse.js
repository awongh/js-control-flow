var inputString = 'building';

var reversefn = function(inputString){
	var array =[];
	for (i=inputString.length;i>-1;i--){
	array.push(inputString[i])
	}
	console.log(array.join(""));
};

reversefn(inputString);

