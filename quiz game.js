// Questions array
const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    category: "General Knowledge",
    question: "Who is the Prime Minister of India (2025)?",
    choices: ["Narendra Modi", "Rahul Gandhi", "Amit Shah"],
    answer: "Narendra Modi"
  },
  {
    category: "Programming",
    question: "Which language is used for web development?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean?",
    choices: ["Atlantic", "Indian", "Pacific"],
    answer: "Pacific"
  }
];

// Get random question
function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

// Get random computer choice
function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Get result
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}