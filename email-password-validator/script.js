let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let successMsg = document.querySelector("#successMsg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  emailError.textContent = "";
  //Purane error / success messages hata deta hai
 //Naya validation clean state se start hota hai
  passwordError.textContent = "";
  successMsg.textContent = "";

  email.classList.remove("valid", "invalid");
  password.classList.remove("valid", "invalid");

  let isValid = true;

 
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Invalid email format";
    email.classList.add("invalid");
    isValid = false;
  } else {
    email.classList.add("valid");
  }

  if (!passwordRegex.test(password.value)) {
    passwordError.textContent = "Password is too weak";
    password.classList.add("invalid");
    isValid = false;
  } else {
    password.classList.add("valid");
  }


  if (isValid) {
    successMsg.textContent = "Everything is correct ✅";
    successMsg.style.color = "green";
  }
});

