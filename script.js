const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const form = document.getElementById("main-section")
const errorElement = document.getElementById("formerror")
const passwordField = document.getElementById("rePassword")
const success = document.getElementById("success-main")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(name.value);
    console.log(rePassword.value);
    if(password.value != rePassword.value){
        errorElement.innerHTML="Password do not match."
        passwordField.style.border="3px solid red";
    }
    if(password.value == rePassword.value){
            form.style.display="none"
            success.style.display="flex"
    }   
    if(password.value == "" && rePassword.value == ""){
            alert('Please enter your Password !')
            form.style.display="flex"
            success.style.display="none"
    }   
})