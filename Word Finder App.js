//build a function that returns the length of the longest word in the provided sentence.
//For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.



function findLongestWordLength(str) {

  const words = str.split(" ");
  let longest = 0;

  for (let i = 0; i < words.length; i++) {

    if (words[i].length > longest) {
      longest = words[i].length;
    }

  }

  return longest;
}