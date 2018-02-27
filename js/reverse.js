const inputString = 'building';

function reverseString(num) {
    // Iteratively concatenate a result string with the character popped off at the end of the given string
    let result = "";
    let tmp = num.split('');
    while (tmp.length) {
        result += tmp.pop();
    }
    return result;
}

console.log(reverseString(inputString));
