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

function reverseStringAlt(num) {
    // Can't decide if this implementation would be faster. What happens if we want to reverse an entire novel? :D
    let result = "";
    for (let i = num.length - 1; i >= 0; i--) {
        result += num.charAt(i);
    }
    return result
}

console.log(reverseString(inputString));
console.log(reverseStringAlt(inputString));
