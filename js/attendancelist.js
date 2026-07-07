// Get Attendance Records
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Table Body
let tableBody = document.getElementById("attendanceTableBody");

// Display Attendance
attendance.forEach(function(record, index){

    let row = `

    <tr>

        <td>${record.studentId}</td>

        <td>${record.fullName}</td>

        <td>${record.department}</td>

        <td>${record.date}</td>

        <td>${record.status}</td>

        <td>
        <button onclick="editAttendance(${index})">
    Update
</button>

            <button onclick="editAttendance(${index})">
                Edit
            </button>

            <button onclick="deleteAttendance(${index})">
                Delete
            </button>

        </td>

    </tr>

    `;

    tableBody.innerHTML += row;

});

// Edit Attendance
function editAttendance(index){

    // Save the selected attendance index
    localStorage.setItem("attendanceEditIndex", index);
    localStorage.setItem("attendanceEditData",JSON.stringify(attendance[index]))
    // Open Attendance Page
    window.location.href = "updateattendance.html";

}

// Delete Attendance
function deleteAttendance(index){

    let confirmDelete = confirm("Delete this attendance record?");

    if(confirmDelete){

        attendance.splice(index,1);

        localStorage.setItem("attendance",JSON.stringify(attendance));

        location.reload();

    }

}