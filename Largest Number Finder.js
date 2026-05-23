// build a function that returns an array consisting of the largest number from each provided sub-array

function largestOfAll(arr) {
  let results = [];
  for (let i = 0; i< arr.length; i++) {
    let biggestNumber = Math.max(...arr[i]);
    results.push(biggestNumber);
  }
  return results;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));