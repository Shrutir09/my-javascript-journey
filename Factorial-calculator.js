//create a factorial calculator that takes a number from the user and calculates the factorial of that number.

const num = 5;

function factorialCalculator(number) {

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);