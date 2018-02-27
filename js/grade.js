function grade(score) {
  switch(true) {
    case (score < 50):
      return 'F';
    case (score < 60):
      return 'E';
    case (score < 70):
      return 'D';
    case (score < 80):
      return 'C';
    case (score < 90):
      return 'B';
    case (score < 100):
      return 'A';
  };  
}

input = 85;
console.log(grade(input));