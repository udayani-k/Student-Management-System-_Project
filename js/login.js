
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

   
    event.preventDefault();

    // Get username and password values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

   
    if( (username === "Udayani" && password === "udayani123")||

       (username === "Hasya" && password === "hasya123")||
         (username === "Swapna" && password === "swapna2004")
)
     {

        // Store username in Session Storage
        sessionStorage.setItem("username", username);

        // Redirect to Dashboard
        window.location.href = "dashboard.html";

    }
     else {

        // Display error message
        document.getElementById("message").innerHTML = "Invalid Username or Password!";
    }

});
 function togglePassword(){

    let password = document.getElementById("password");
    let icon = document.getElementById("toggleIcon");

    if(password.type === "password"){

        password.type = "text";
        icon.textContent = "🙈";

    }else{

        password.type = "password";
        icon.textContent = "👁️";

    }

}