function pairElement(str){
  let result = [];
  for(let char of str){
    if(char === "A"){
      result.push(["A", "T"]);
    }else if(char === "T"){
      result.push(["T", "A"]);
    }else if(char === "C"){
      result.push(["C", "G"]);
    }else if(char === "G"){
      result.push(["G", "C"]);
    }
  }
  return result;
}
console.log(pairElement("ATCG"));