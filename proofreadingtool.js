//  a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.

function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");

  return lowerWord === reversed;
}

function findPalindromeBreaks(words) {
  let breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  let phrases = {};
  let repeatedIndices = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");

    if (!phrases[phrase]) {
      phrases[phrase] = [i];
    } else {
      phrases[phrase].push(i);
    }
  }

  for (let key in phrases) {
    if (phrases[key].length > 1) {
      repeatedIndices.push(...phrases[key]);
    }
  }

  return repeatedIndices.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  let results = [];

  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }

  return results;
}