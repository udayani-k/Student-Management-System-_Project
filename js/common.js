// ===============================
// Common Functions
// ===============================

console.log("common.js loaded");

// Delete Student and Related Records
function deleteStudentData(studentId) {

    console.log("Deleting Student ID:", studentId);

    // ================= Students =================
    let students = JSON.parse(localStorage.getItem("students")) || [];

    console.log("Students Before:", students);

    students = students.filter(function(student) {
        return String(student.studentId).trim() !== String(studentId).trim();
    });

    console.log("Students After:", students);

    localStorage.setItem("students", JSON.stringify(students));


    // ================= Attendance =================
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    console.log("Attendance Before:", attendance);

    attendance = attendance.filter(function(record) {
        return String(record.studentId).trim() !== String(studentId).trim();
    });

    console.log("Attendance After:", attendance);

    localStorage.setItem("attendance", JSON.stringify(attendance));


    // ================= Marks =================
    let marks = JSON.parse(localStorage.getItem("marks")) || [];

    console.log("Marks Before:", marks);

    marks = marks.filter(function(record) {
        return String(record.studentId).trim() !== String(studentId).trim();
    });

    console.log("Marks After:", marks);

    localStorage.setItem("marks", JSON.stringify(marks));


    // ================= Remove Temporary Data =================
    localStorage.removeItem("editIndex");
    localStorage.removeItem("profileIndex");
    localStorage.removeItem("attendanceEditIndex");
    localStorage.removeItem("attendanceEditData");

    console.log("Student and related records deleted successfully.");
}