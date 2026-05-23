// create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

function titleCase(str) {
  // String ko lowercase me convert kiya
  let words = str.toLowerCase().split(" ");

  // Har word ka first letter capital kiya
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Words ko wapas string me convert kiya
  return words.join(" ");
}


console.log(titleCase("I like to code"));
// "I Like To Code"

console.log(titleCase("javaScript is fun"));
// "Javascript Is Fun"