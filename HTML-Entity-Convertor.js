function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (let char of str) {
    if (entities[char]) {
      result += entities[char];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));