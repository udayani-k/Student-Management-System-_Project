// Get attendance records
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Get selected attendance index
let editIndex = localStorage.getItem("attendanceEditIndex");

// If no record is selected, go back
if (editIndex === null) {
    window.location.href = "attendancelist.html";
}

// Get the selected attendance record
let record = attendance[editIndex];

// Display record in the form
document.getElementById("studentId").value = record.studentId;
document.getElementById("studentName").value = record.fullName;
document.getElementById("department").value = record.department;
document.getElementById("date").value = record.date;
document.getElementById("status").value = record.status;

// Update Attendance
function updateAttendance() {

    record.date = document.getElementById("date").value;
    record.status = document.getElementById("status").value;

    attendance[editIndex] = record;

    localStorage.setItem("attendance", JSON.stringify(attendance));

    localStorage.removeItem("attendanceEditIndex");

    alert("Attendance Updated Successfully");

    window.location.href = "attendancelist.html";
}