// create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").
//The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns true.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}


console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)); // 8
console.log(findElement([1, 3, 5], num => num % 2 === 0)); // undefined