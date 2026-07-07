// const studentForm = document.getElementById("studentForm");

// studentForm.addEventListener("submit", function(event){

//     // Prevent page refresh
//     event.preventDefault();

//     // Get input values
//     let studentId = document.getElementById("studentId").value;
//     let fullName = document.getElementById("fullName").value;
//     let email = document.getElementById("email").value;
//     let mobile = document.getElementById("mobile").value;
//     let department = document.getElementById("department").value;
//     let year = document.getElementById("year").value;

//     // Validation
//     if(studentId === ""){
//         alert("Please Enter Student ID");
//         return;
//     }

//     if(fullName === ""){
//         alert("Please Enter Full Name");
//         return;
//     }

//     if(email === ""){
//         alert("Please Enter Email");
//         return;
//     }

//     if(mobile.length !== 10){
//         alert("Mobile Number should contain 10 digits");
//         return;
//     }

//     // Create Student Object
//     let student = {
//         studentId,
//         fullName,
//         email,
//         mobile,
//         department,
//         year
//     };

//     // Get existing students
//     let students = JSON.parse(localStorage.getItem("students")) || [];

//     // Check Edit Mode
//     let editIndex = localStorage.getItem("editIndex");

//     if(editIndex !== null){

//         // Update existing student
//         students[editIndex] = student;

//         localStorage.removeItem("editIndex");

//         alert("Student Updated Successfully!");

//     }else{

//         // Add new student
//         students.push(student);

//         alert("Student Registered Successfully!");

//     }

//     // Save to Local Storage
//     localStorage.setItem("students", JSON.stringify(students));

//     // Clear Form
//     studentForm.reset();

//     // Go to Student List Page
//     window.location.href = "studentlist.html";

// });

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event){

    // Prevent page refresh
    event.preventDefault();

    // =========================
    // Personal Information
    // =========================

    let studentId = document.getElementById("studentId").value;
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let gender = "";

    let genderSelected = document.querySelector('input[name="gender"]:checked');

    if(genderSelected){
        gender = genderSelected.value;
    }

    let dob = document.getElementById("dob").value;

    // =========================
    // Academic Information
    // =========================

    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let semester = document.getElementById("semester").value;
    let section = document.getElementById("section").value;
    let rollNo = document.getElementById("rollNo").value;

    // =========================
    // Skills
    // =========================

    let skills = [];

    document.querySelectorAll('input[name="skills"]:checked').forEach(function(skill){

        skills.push(skill.value);

    });

    // =========================
    // Address
    // =========================

    let houseNo = document.getElementById("houseNo").value;
    let street = document.getElementById("street").value;
    let village = document.getElementById("village").value;
    let city = document.getElementById("city").value;
    let district = document.getElementById("district").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;

    // =========================
    // Documents
    // =========================

    let photo = document.getElementById("photo").value;
    let resume = document.getElementById("resume").value;
    let audio = document.getElementById("audio").value;
    let video = document.getElementById("video").value;

    // =========================
    // Validation
    // =========================

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

    // =========================
    // Create Student Object
    // =========================

    let student = {

        studentId,
        fullName,
        email,
        mobile,

        gender,
        dob,

        department,
        year,
        semester,
        section,
        rollNo,

        skills,

        houseNo,
        street,
        village,
        city,
        district,
        state,
        country,
        pincode,

        photo,
        resume,
        audio,
        video

    };

    // =========================
    // Local Storage
    // =========================

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let editIndex = localStorage.getItem("editIndex");

    if(editIndex !== null){

        students[editIndex] = student;
         localStorage.setItem("students", JSON.stringify(students));

    localStorage.setItem("profileIndex", editIndex);

    localStorage.removeItem("editIndex");

    window.location.href = "studentprofile.html"

      

        alert("Student Updated Successfully!");

    }else{

        students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    localStorage.setItem("profileIndex", students.length - 1);

        alert("Student Registered Successfully!");

    }

    localStorage.setItem("students", JSON.stringify(students));

    // =========================
    // Clear Form
    // =========================

    studentForm.reset();

    // =========================
    // Redirect
    // =========================
    localStorage.setItem("profileIndex", students.length - 1);
    window.location.href = "studentlist.html";

});