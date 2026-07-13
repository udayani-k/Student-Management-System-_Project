alert("Dashboard JS Loaded");

// ================= Logged In User =================

document.getElementById("welcome").textContent = "Welcome";

let username =
localStorage.getItem("username") ||
sessionStorage.getItem("username");

if(username){

    document.getElementById("loggedUser").textContent = username;
    document.getElementById("welcome").textContent = "Welcome, " + username;

}else{

    document.getElementById("loggedUser").textContent = "Guest";
    document.getElementById("welcome").textContent = "Welcome";

}

// ================= Current Date =================

let today = new Date();

document.getElementById("currentDate").textContent =
today.toLocaleDateString();

// ================= Current Time =================

function updateTime(){

    let now = new Date();

    document.getElementById("currentTime").textContent =
    now.toLocaleTimeString();

}

updateTime();
setInterval(updateTime,1000);

// ===============================================
// Load Data
// ===============================================

let students = JSON.parse(localStorage.getItem("students")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
let marks = JSON.parse(localStorage.getItem("marks")) || [];

// ===============================================
// Keep Only Existing Students Data
// ===============================================

let validAttendance = attendance.filter(function(record){

    return students.some(function(student){

        return String(student.studentId).trim() ===
               String(record.studentId).trim();

    });

});

let validMarks = marks.filter(function(record){

    return students.some(function(student){

        return String(student.studentId).trim() ===
               String(record.studentId).trim();

    });

});

// ===============================================
// Dashboard Statistics
// ===============================================

// Total Students

document.getElementById("totalStudents").textContent = students.length;

// Total Departments

let departments = [...new Set(students.map(function(student){

    return student.department;

}))];

document.getElementById("totalDepartments").textContent =
departments.length;

// Present Students

let presentCount = validAttendance.filter(function(record){

    return record.status === "Present";

}).length;

document.getElementById("presentStudents").textContent = presentCount;

// Absent Students

let absentCount = validAttendance.filter(function(record){

    return record.status === "Absent";

}).length;

document.getElementById("absentStudents").textContent = absentCount;

// Highest Scoring Student

if(validMarks.length > 0){

    let highest = validMarks.reduce(function(a,b){

        return a.total > b.total ? a : b;

    });

    document.getElementById("highestStudent").textContent =
    highest.fullName;

}else{

    document.getElementById("highestStudent").textContent =
    "No Data";

}

// Recent Student

if(students.length > 0){

    let recentStudent = students[students.length - 1];

    document.getElementById("recentStudent").textContent =
    recentStudent.fullName;

}else{

    document.getElementById("recentStudent").textContent =
    "No Students";

}

// If No Students

if(students.length === 0){

    document.getElementById("presentStudents").textContent = 0;
    document.getElementById("absentStudents").textContent = 0;
    document.getElementById("highestStudent").textContent = "No Data";
    document.getElementById("recentStudent").textContent = "No Students";

}

// ===============================================
// Navigation Functions
// ===============================================

function openStudents(){

    alert("Student Registration Form Opened");

    window.location.href = "students.html";

}

function openStudentsProfile(){

    alert("Student Profile button clicked");

    window.location.href = "studentprofile.html";

}

function openAttendance(){

    alert("Attendance button clicked");

    window.location.href = "attendance.html";

}

function openMarks(){

    alert("Marks button clicked");

    window.location.href = "marks.html";

}

function openReports(){

    alert("Reports button clicked");

    window.location.href = "reports.html";

}

function openSettings(){

    alert("Settings button clicked");

    window.location.href = "settings.html";

}

function openAbout(){

    alert("About button clicked");

    window.location.href = "about.html";

}

function openContact(){

    alert("Contact button clicked");

    window.location.href = "contact.html";

}

function logout(){

    alert("Logout clicked");

    sessionStorage.clear();

    window.location.href = "index.html";

}