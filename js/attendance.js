// ===============================
// Get Students & Attendance
// ===============================

let students = JSON.parse(localStorage.getItem("students")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

let attendanceBody = document.getElementById("attendanceBody");

// ===============================
// Display Students
// ===============================

students.forEach(function(student, index){

    // Check whether attendance already exists
    let existingAttendance = attendance.find(function(record){

        return record.studentId === student.studentId;

    });

    let row = `
    <tr>

        <td>${student.studentId}</td>

        <td>${student.fullName}</td>

        <td>${student.department}</td>

        <td>
            <input
                type="date"
                id="date${index}"
                value="${existingAttendance ? existingAttendance.date : ""}">
        </td>

        <td>

            <select id="status${index}">

                <option value="Present"
                ${existingAttendance && existingAttendance.status==="Present" ? "selected" : ""}>
                Present
                </option>

                <option value="Absent"
                ${existingAttendance && existingAttendance.status==="Absent" ? "selected" : ""}>
                Absent
                </option>

            </select>

        </td>

        <td>

            <button onclick="saveAttendance(${index})">
                Save
            </button>

        </td>

    </tr>
    `;

    attendanceBody.innerHTML += row;

});

// ===============================
// Save Attendance
// ===============================

function saveAttendance(index){

    let date = document.getElementById("date"+index).value;
    let status = document.getElementById("status"+index).value;

    if(date===""){

        alert("Please Select Date");
        return;

    }

    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    let record = {

        studentId: students[index].studentId,
        fullName: students[index].fullName,
        department: students[index].department,
        date: date,
        status: status

    };

    // Check if attendance already exists
    let existingIndex = attendance.findIndex(function(item){

        return item.studentId === students[index].studentId;

    });

    if(existingIndex !== -1){

        attendance[existingIndex] = record;

        alert("Attendance Updated Successfully");

    }else{

        attendance.push(record);

        alert("Attendance Saved Successfully");

    }

    localStorage.setItem("attendance", JSON.stringify(attendance));

    window.location.href = "attendancelist.html";

}