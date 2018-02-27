function reverse(str) {
  var final_str = "";
  for (var i=str.length-1; i>=0; i--) {
    final_str += str[i]
  }
  return final_str;
}

var input = 'building';
console.log(reverse(input));