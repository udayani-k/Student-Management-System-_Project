// Get students from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Get table body
let attendanceBody = document.getElementById("attendanceBody");

// Display all students
students.forEach(function(student, index){

    let row = `
    <tr>

        <td>${student.studentId}</td>

        <td>${student.fullName}</td>

        <td>${student.department}</td>

        <td>
            <input type="date" id="date${index}">
        </td>

        <td>
            <select id="status${index}">
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
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

// Save / Update Attendance
function saveAttendance(index){

    let date = document.getElementById("date" + index).value;
    let status = document.getElementById("status" + index).value;

    if(date === ""){

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

    let editIndex = localStorage.getItem("attendanceEditIndex");

    if(editIndex !== null){

        attendance[editIndex] = record;

        localStorage.removeItem("attendanceEditIndex");

        alert("Attendance Updated Successfully");

    }else{

        attendance.push(record);

        alert("Attendance Saved Successfully");

    }

    localStorage.setItem("attendance", JSON.stringify(attendance));

    // Go back to Attendance History
    window.location.href = "attendancelist.html";

}