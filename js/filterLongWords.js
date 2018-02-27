function filterLongWords(array) {
  var maxLength = 4;
  var new_array = [];
  for (var word in array) {
    if (word.length < maxLength) new_array.push(word);
  }
  console.log(maxLength);
}

filterLongWords(['hello','my','name','is','alethea']);
