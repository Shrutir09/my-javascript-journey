//  create a function that removes all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // Truthy values ko hi add karo
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}


console.log(bouncer([7, "ate", "", false, 9]));
// [7, "ate", 9]

console.log(bouncer([null, NaN, 1, 2, undefined]));
// [1, 2]