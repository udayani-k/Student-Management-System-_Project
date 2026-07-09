// alert("Dashboard JS Loaded");
// // Get username from Session Storage
// let username = sessionStorage.getItem("username");

// // Display welcome message
// document.getElementById("welcome").textContent =
// "Welcome, " + username;

// // Open Student Page
// function openStudents(){
//     alert("Button Clicked");

//     window.location.href="students.html";

// }

// // Open Attendance Page
// function openAttendance(){

//     window.location.href="attendance.html";

// }

// // Open Marks Page
// function openMarks(){

//     window.location.href="marks.html";

// }

// // Open Reports Page
// function openReports(){

//     window.location.href="reports.html";

// }

// // Logout
// function logout(){

//     sessionStorage.clear();

//     window.location.href="index.html";

// }

alert("Dashboard JS Loaded");

document.getElementById("welcome").textContent = "Welcome";
// Logged In User
// Logged In User

let username =
localStorage.getItem("username") ||
sessionStorage.getItem("username");

if(username){

    document.getElementById("loggedUser").textContent = username;
    document.getElementById("welcome").textContent = "Welcome, " + username;

}
else{

    document.getElementById("loggedUser").textContent = "Guest";
    document.getElementById("welcome").textContent = "Welcome";

}

// Current Date
let today = new Date();

document.getElementById("currentDate").textContent =
today.toLocaleDateString();

// Current Time
function updateTime(){

    let now = new Date();

    document.getElementById("currentTime").textContent =
    now.toLocaleTimeString();

}

updateTime();

// Update every second
setInterval(updateTime, 1000);
// ================= Dashboard Statistics =================

// Get Students
let students = JSON.parse(localStorage.getItem("students")) || [];

// Total Students
document.getElementById("totalStudents").textContent = students.length;

// Total Departments
let departments = [...new Set(students.map(student => student.department))];
document.getElementById("totalDepartments").textContent = departments.length;

// Get Attendance
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Present Students
let presentCount = attendance.filter(record => record.status === "Present").length;
document.getElementById("presentStudents").textContent = presentCount;

// Absent Students
let absentCount = attendance.filter(record => record.status === "Absent").length;
document.getElementById("absentStudents").textContent = absentCount;

// Highest Scoring Student
let marks = JSON.parse(localStorage.getItem("marks")) || [];

if (marks.length > 0) {

    let highest = marks.reduce(function(a, b) {
        return a.total > b.total ? a : b;
    });

    document.getElementById("highestStudent").textContent = highest.fullName;

} else {

    document.getElementById("highestStudent").textContent = "Not Available";

}

// Recent Student
if (students.length > 0) {

    let recentStudent = students[students.length - 1];

    document.getElementById("recentStudent").textContent = recentStudent.fullName;

} else {

    document.getElementById("recentStudent").textContent = "No Students";

}


function openStudents() {
    alert("Student registration Form Opened");
    window.location.href = "students.html";
}
function openStudentsProfile() {
    alert("Student button clicked")
    window.location.href = "studentprofile.html";
}
function openAttendance() {
    alert("Attendance button clicked");
     window.location.href = "attendance.html";
}

function openMarks() {
    alert("Marks button clicked");
    window.location.href = "marks.html";
}

function openReports() {
    alert("Reports button clicked");
    window.location.href = "reports.html";
}
function openSettings(){
    alert("Setting button clicked")
    window.location.href = "settings.html";

}

function openAbout(){
    alert("About button clicked")
    window.location.href = "about.html";

}

// Contact
function openContact(){
    alert("Contact button Clicked")

    window.location.href = "contact.html";

}

function logout() {
    alert("Logout clicked");
    sessionStorage.clear();

    window.location.href = "index.html";

}