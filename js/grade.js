const score = 56;

function grade(testScore) {
    if (typeof(testScore) != "number" || testScore < 0 || testScore > 100) {console.error("Need a valid test score between 0 and 100!"); return}
    let result = "A";
    switch (true) {
        case (testScore < 45): {result = "F"; break};
        case (testScore < 50): {result = "E"; break};
        case (testScore < 55): {result = "D"; break};
        case (testScore < 60): {result = "C"; break};
        case (testScore < 70): {result = "B"; break};
        default:
            break;
    }
    return result;
}

console.log("A score of " + score + " gives you a grade of " + grade(score) + ".");
