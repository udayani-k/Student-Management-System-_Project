const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event){

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    let studentId = document.getElementById("studentId").value;
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    // Validation
    if(studentId === ""){
        alert("Please Enter Student ID");
        return;
    }

    if(fullName === ""){
        alert("Please Enter Full Name");
        return;
    }

    if(email === ""){
        alert("Please Enter Email");
        return;
    }

    if(mobile.length !== 10){
        alert("Mobile Number should contain 10 digits");
        return;
    }

    // Create Student Object
    let student = {
        studentId,
        fullName,
        email,
        mobile,
        department,
        year
    };

    // Get existing students
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Check Edit Mode
    let editIndex = localStorage.getItem("editIndex");

    if(editIndex !== null){

        // Update existing student
        students[editIndex] = student;

        localStorage.removeItem("editIndex");

        alert("Student Updated Successfully!");

    }else{

        // Add new student
        students.push(student);

        alert("Student Registered Successfully!");

    }

    // Save to Local Storage
    localStorage.setItem("students", JSON.stringify(students));

    // Clear Form
    studentForm.reset();

    // Go to Student List Page
    window.location.href = "studentlist.html";

});