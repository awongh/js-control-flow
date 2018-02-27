function reverseString(str) {
  var arr = str.split("");
  
  var ptr1 = 0;
  var ptr2 = arr.length-1;

  while (ptr1 < ptr2) {
    var temp = arr[ptr1];
    arr[ptr1] = arr[ptr2];
    arr[ptr2] = temp;
    ptr1++;
    ptr2--;
  }

  return arr.join("");
}
console.log(reverseString("hello"));
