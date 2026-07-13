// Get Form
let contactForm = document.getElementById("contactForm");

// Submit Event
contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Get Values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation
    if(name === ""){

        alert("Please enter your name.");
        return;

    }

    if(email === ""){

        alert("Please enter your email.");
        return;

    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");
        return;

    }

    if(subject === ""){

        alert("Please enter the subject.");
        return;

    }

    if(message === ""){

        alert("Please enter your message.");
        return;

    }

    // Save to Local Storage
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    let contact = {

        name: name,
        email: email,
        subject: subject,
        message: message

    };

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Message Sent Successfully!");

    // Clear Form
    contactForm.reset();

});