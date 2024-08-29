function validation(event){
    event.preventDefault();

    const email = document.getElementById("email-box").value;

    const password = document.getElementById("password-box").value;

    if (email === ""){
        document.getElementById("message").innerHTML = "Please enter the email";
        document.getElementById("message").style.color = "red";
    }

    else if (password === ""){
        document.getElementById("message").innerHTML = "Please enter the password";
        document.getElementById("message").style.color = "red";
    }

    else {
        document.getElementById("message").innerHTML = "Login Successful!";
        document.getElementById("message").style.color = "green";
    }
}