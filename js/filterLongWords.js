function newArr(maxLength,wordArr){
	var revisedArr = [];
	for(var i=0; i<wordArr.length; i++){
		// console.log(wordArr[i].length)
		if (wordArr[i].length < maxLength){
			revisedArr.push(wordArr[i]);
			// console.log(revisedArr)
		};
	};
	return revisedArr;
}

console.log(newArr(4, ["Apple", "Pineapple", "Orange", "Grape", "aa"]))


