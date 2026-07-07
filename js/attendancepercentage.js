// Get Attendance Records
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Object to store student attendance
let students = {};

// Count attendance
attendance.forEach(function(record){

    if(!students[record.studentId]){

        students[record.studentId] = {

            studentId: record.studentId,
            fullName: record.fullName,
            present: 0,
            absent: 0

        };

    }

    if(record.status === "Present"){

        students[record.studentId].present++;

    }else{

        students[record.studentId].absent++;

    }

});

// Display Percentage
let tbody = document.getElementById("percentageBody");

for(let id in students){

    let student = students[id];

    let total = student.present + student.absent;

    let percentage = ((student.present / total) * 100).toFixed(2);

    tbody.innerHTML += `

    <tr>

        <td>${student.studentId}</td>

        <td>${student.fullName}</td>

        <td>${student.present}</td>

        <td>${student.absent}</td>

        <td>${total}</td>

        <td>${percentage}%</td>

    </tr>

    `;

}