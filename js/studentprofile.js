// Get all students from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Get selected student index
let index = localStorage.getItem("profileIndex");

// If no student is selected
if (index === null) {

    if (students.length > 0) {

        index = 0;

    } else {

        alert("No student records found.");

        window.location.href = "students.html";
    }
}

// Get selected student
let student = students[index];

// Personal Information
document.getElementById("studentId").textContent = student.studentId || "";
document.getElementById("fullName").textContent = student.fullName || "";
document.getElementById("email").textContent = student.email || "";
document.getElementById("mobile").textContent = student.mobile || "";
document.getElementById("gender").textContent = student.gender || "";
document.getElementById("dob").textContent = student.dob || "";

// Academic Information
document.getElementById("department").textContent = student.department || "";
document.getElementById("year").textContent = student.year || "";
document.getElementById("semester").textContent = student.semester || "";
document.getElementById("section").textContent = student.section || "";
document.getElementById("rollNo").textContent = student.rollNo || "";

// Skills
document.getElementById("skills").textContent =
    student.skills ? student.skills.join(", ") : "";

// Address
document.getElementById("houseNo").textContent = student.houseNo || "";
document.getElementById("street").textContent = student.street || "";
document.getElementById("village").textContent = student.village || "";
document.getElementById("city").textContent = student.city || "";
document.getElementById("district").textContent = student.district || "";
document.getElementById("state").textContent = student.state || "";
document.getElementById("country").textContent = student.country || "";
document.getElementById("pincode").textContent = student.pincode || "";

// Attendance & Marks
document.getElementById("attendance").textContent = "Not Available";
document.getElementById("marks").textContent = "Not Available";

// Uploaded Documents
document.getElementById("resumeName").textContent = student.resume || "No Resume Uploaded";

if (student.photo) {
    document.getElementById("profileImage").src = student.photo;
} else {
    document.getElementById("profileImage").alt = "No Photo Uploaded";
}