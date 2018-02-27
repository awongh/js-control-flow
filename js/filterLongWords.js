function filterLongWords(array) {
  var maxLength = 4;
  var new_array = [];

  array.forEach(function(word) {
    if (word.length < maxLength) new_array.push(word);
  });

  console.log(new_array);
  console.log(maxLength);
}

filterLongWords(['hello','my','name','is','alethea']);
