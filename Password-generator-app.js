function generatePassword(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";
  for(let i = 0; i < length; i++){
    let randomIndex = Math.floor(Math.random()*chars.length);
    password +=chars[randomIndex];
  }
  return password;
}
let password = generatePassword(8);
console.log(`Generated password: ${password}`);