function filterLongWords(arr, maxLength) {
  var final_arr = [];
  arr.forEach(function(element) {
    if (element.length < maxLength) {
      final_arr.push(element);
    };
  });
  return final_arr;
}

input = ['wer', 'ewrevale', 'awewe', 'nmlekr']

console.log(filterLongWords(input, 8));