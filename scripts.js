function passwordVal(){
    let password = document.getElementById("user_password");
    let passwordConfirm = document.getElementById("user_password_confirm");
    if (password.value === ""){
        password.setCustomValidity('Please enter a password');
    }
    else if (passwordConfirm.value === ""){
        passwordConfirm.setCustomValidity('Please confirm password');
    }
    else if (password.value !== passwordConfirm.value){
        passwordConfirm.setCustomValidity('Passwords must match');
    }
    else{
        passwordConfirm.setCustomValidity('');
    }
}