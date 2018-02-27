var arrayOfWords = ["Apple", "Orange", "Pear", "Kiwi", "Coconut", "Oat"];

var maxLength = 5;

var newArray = [];

for (var i = 0; i < arrayOfWords.length; i++) {
  if (arrayOfWords[i].length < maxLength) {
    newArray.push(arrayOfWords[i]);
  }
};

console.log(newArray);