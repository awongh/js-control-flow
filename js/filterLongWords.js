function filterLongWords(arr) {
  var maxLength = 0;
  arr.forEach(function(element) {
    if (element.length > maxLength) {
      maxLength = element.length;
    };
  });
  return maxLength;
}

input = ['wer', 'ewrevale', 'awewe', 'nmlekr']

console.log(filterLongWords(input));