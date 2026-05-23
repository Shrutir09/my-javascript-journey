 // Gradebook Application

 function getAverage (scores) {
  let sum = 0;
  for(let i=0; i<scores.length; i++){
    sum+=scores[i];
  }
  return sum/scores.length;
}

function getGrade(score) {
  if(score === 100){
    return "A+";
  }else if(score>=90 && score<=99){
    return "A";
  }else if(score>=80 && score<=89){
    return "B";
  }else if(score>=70 && score<=79){
    return "C";
  }else if(score>=60 && score<=69){
    return "D";
  }else{
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scores, studentScore) {
   let average = getAverage(scores);
  let grade = getGrade(studentScore);

  if(hasPassingGrade(studentScore)) {
  return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  }else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 76, 95, 68], 85));