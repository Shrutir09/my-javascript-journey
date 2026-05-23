//  create an algorithm to merge two arrays.

function frankenSplice(arr1, arr2, n) {
  // arr2 ki copy banayi taki original change na ho
  let result = arr2.slice();

  // arr1 ke elements n index se insert kiye
  result.splice(n, 0, ...arr1);

  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));