
function grade(score) {
  // Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.
  var grade;
  switch(true) {
    case score > 100:
        grade = "There's no way your score could be that high!";
        break;
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
      }
  console.log(grade);
}

grade(80);
grade(166);
