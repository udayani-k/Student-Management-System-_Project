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

function openStudents() {
    alert("Student button clicked");
    window.location.href = "students.html";
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

function logout() {
    alert("Logout clicked");
    sessionStorage.clear();

    window.location.href = "index.html";

}