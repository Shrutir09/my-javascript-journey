let form = document.getElementById("myForm");
form.addEventListener("submit", function(dets){
    dets.preventDefault();

    //read values
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let message=document.getElementById("message");
    let country=document.getElementById("country");

    console.log(name,email,message,country);

    if(name.value === ""){
        alert("Name is required");
        return;
    }
    if(email.value === ""){
        alert("Email is required");
        return;
    }
    if(message.value === ""){
        alert("message is required");
        return;
    }
    if(country.value === ""){
        alert("select your country");
        return;
    }
    else{
    alert("Form submittted sucessfully");
    }
});