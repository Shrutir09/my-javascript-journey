// Union of arrays with unique values while preserving order
//The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

function uniteUnique(...arrays) {
  let result = [];
  for(let arr of arrays){
    for(let item of arr){
      if(!result.includes(item)){
        result.push(item);
      }
    }
  }
  return result;
}
console.log(uniteUnique([1,2,3], [2,3,5]));