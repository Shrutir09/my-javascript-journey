// WAP to print A, B, C , D, or F based on marks obtained in an exam
 
let marks = 90;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}   
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
// Output: A

// Rock Paper Scissors Game

function rps(user, computer){
    if (user === computer) return "draw";
    if (user === "rock" && computer === "scissors" ) return "user wins";
    if (user === "paper" && computer === "rock" ) return "user wins";
    if (user === "scissors" && computer === "paper" ) return "user wins";
    return "computer wins";
}
console.log(rps("rock", "scissors")); // Output: user wins
console.log(rps("rock", "paper")); // Output: computer wins
console.log(rps("rock", "rock")); // Output: draw
