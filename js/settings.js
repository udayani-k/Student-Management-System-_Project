// ==============================
// Load Saved Theme
// ==============================

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

}

// ==============================
// Light Mode
// ==============================

function lightMode(){

    document.body.classList.remove("dark-mode");

    localStorage.setItem("theme","light");

    alert("Light Mode Enabled");

}

// ==============================
// Dark Mode
// ==============================

function darkMode(){

    document.body.classList.add("dark-mode");

    localStorage.setItem("theme","dark");

    alert("Dark Mode Enabled");

}

// ==============================
// Update Profile
// ==============================

function updateProfile(){

    let username = document.getElementById("username").value.trim();

    if(username === ""){

        alert("Please Enter Username");

        return;

    }

    localStorage.setItem("username",username);

    alert("Profile Updated Successfully");

    document.getElementById("username").value = "";

}

// ==============================
// Logout
// ==============================

function logout(){

    let confirmLogout = confirm("Are you sure you want to Logout?");

    if(confirmLogout){

        sessionStorage.clear();

        window.location.href = "index.html";

    }

}