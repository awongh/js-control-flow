
var maxLength = 4
var filterLongWords = function (array){
	var longWordArray =[]
	array.forEach(function(x){
		if (x.length<=maxLength){
		}else{
			longWordArray.push(x);
			array.pop(x);
			console.log("As some words exceeded maxLength of "+maxLength+",those words have been pushed to a new array")
			console.log("original array: "+array)
			console.log("new array: "+longWordArray)
			console.log("maximum character length is: "+maxLength)
		}
	})

}