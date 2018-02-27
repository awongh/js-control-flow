// The concept of this solution is that the residues of integers
// modulo 15 are periodic (with period 15). The implementation can
// be done in a few ways, but since machine language deals with binary
// numbers, it's possible that the fastest implementation uses
// binary numbers as a filter (because division is expensive!).
// Nevertheless, I'll write here (in 15 min?)
// both the binary and the human-readable version.

// Note: 810092018 in binary is 110000010010010000011000010000
// Split into pairs, 11 00 00 01 00 10 01 00 00 01 10 00 01 00 00
// Notice that there are 15 pairs of bits, which represent:
// 11 - divisible by 15
// 01 - divisible by 3
// 10 - divisible by 5

// To effectively use that large binary string as a filter, we use bitwise
// comparison operators, e.g. the & comparison operator, and bitshift operators
// e.g. the >> and << shift operators.

// The reason why that binary string is written like this "in reverse" is that
// the digits with smaller values are on the right, e.g. in decimal, the digit 7
// has the smallest value in the number 1234127.
'use strict';

const end = 100;
const start = 1;

function bitFizzBuzz(start, end) {
    var bFilter = 810092048;
    let counter = bFilter & 3;
    
    for (let i = 1; i < start; i++) {
        bFilter = bFilter >> 2 | counter << 28;
    }
    
    for (let num = start; num <= end; num++){
        let counter = bFilter & 3;
        let result = 'FizzBuzz';
        // if the binary string returns 0 when bitwise compared to 3 (11), then it's neither
        // divisible by 3 (represented by 01) nor 5 (represented by 10).
        // if the binary string returns 1 when bitwise compared to 3 (11), then it's divisible by 3 (01).
        // if the binary string returns 2 when bitwise compared to 3 (11), then it's divisible by 5
        // (remember, 10 indicates divisibility by 5).
        
        if (counter === 0) {
            result = num;
        } else if (counter === 1) {
            result = 'Fizz';
        } else if (counter === 2) {
            result = 'Buzz';
        }
    
        // Sadly this algorithm relies on its own iterative nature to seek the correct position in the
        // binary filter, and so doing bitFizzBuzz(15) in the console will not work.
        // We will need to do something like "for (let i=1;i<upperLimit;i++) {console.log(bitFizzBuzz(i))}"
        // to actually use this. Still need to benchmark this vs the normal implementation below though!
        // We can of course shift the binary string beforehand to account for this, but *lazy*. Edit: Ah
        // heck it, I wrote that thing above.
    
        // Need to either shift the binary filter to the right by 2 digits to prepare for the next iteration, or to reset it if it's done.
        bFilter = bFilter >> 2 | counter << 28;

        console.log(result);
    }
    console.log("Bitwise implementation");
}


// And now for the normal implementations...
function normalFizzBuzz(start, end) {
    let nFilter = [false, false, 'Fizz', false, 'Buzz', 'Fizz', false, false, 'Fizz', 'Buzz', false, 'Fizz', false, false, 'FizzBuzz'];
    for (let i = start; i <= end; i++) {
        let result = nFilter[(i - 1) % 15]; //This is an expensive operation, but how much more expensive is it in JS compared to lower level languages, and is it expensive enough to merit the bit comparison implementation above?? If we wanted to cheat like in the bit comparison implementation, we wouldn't do this and just increment the index each time, subtracting 15 each time we hit 16 for the fastest possible runtime :D
        console.log(((result) ? result : i));
    }
    console.log("Normal implementation via modulo check");
}

function nFizzBuzz(start, end) { //This is the cheaty implementation described above :D
    let nFilter = [false, false, 'Fizz', false, 'Buzz', 'Fizz', false, false, 'Fizz', 'Buzz', false, 'Fizz', false, false, 'FizzBuzz'];
    var r = (start % 16) - 1;
    for (let i = start; i <= end; i++){
        if (r > 14) {r-=15};
        console.log((nFilter[r]) ? nFilter[r] : i);
        r++;
    }
    console.log("Normal implementation with only one modulo check :D");
}

// Pick your poison! :D
//bitFizzBuzz(start, end);
//normalFizzBuzz(start, end);
nFizzBuzz(start, end);