// A >= 90 && A <= 100
// B > 80
// C > 70
// D > 50
// F < 50
// Error > 100 && <0

function scoreToGrade(score) {
  
if (typeof score !== 'number' || score < 0 || score > 100)
  return "INVALID SCORE";
  
  var grade = "";
  
  switch(true) {
    case score < 50: grade = "F";
      break;
    case score < 70: grade = "D";
      break;
    case score < 80: grade = "C";
      break;
    case score < 90: grade = "B";
      break;
    case score <= 100: grade = "A";
      break;
  } return grade;
}

console.log(scoreToGrade(101));
