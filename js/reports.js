// ==========================================
// Load Data from Local Storage
// ==========================================

let students = JSON.parse(localStorage.getItem("students")) || [];
let marks = JSON.parse(localStorage.getItem("marks")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];


// ================= Summary Cards =================

document.getElementById("totalStudents").textContent = students.length;

let present = attendance.filter(function(record){

    return record.status === "Present";

}).length;

document.getElementById("presentStudents").textContent = present;

let absent = attendance.filter(function(record){

    return record.status === "Absent";

}).length;

document.getElementById("absentStudents").textContent = absent;

if(marks.length > 0){

    let total = 0;

    marks.forEach(function(student){

        total += Number(student.percentage);

    });

    let average = total / marks.length;

    document.getElementById("averageMarksCard").textContent =
    average.toFixed(2) + "%";

}

// ==========================================
// Top Students
// ==========================================

let topStudentsBody = document.getElementById("topStudentsBody");

let sortedMarks = [...marks];

sortedMarks.sort(function(a, b){
    return b.total - a.total;
});

sortedMarks.slice(0,5).forEach(function(student,index){

    topStudentsBody.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${student.fullName}</td>
        <td>${student.percentage}%</td>
    </tr>
    `;

});

// ==========================================
// Failed Students
// ==========================================

let failedStudentsBody = document.getElementById("failedStudentsBody");

marks.forEach(function(student){

    if(student.grade === "Fail"){

        failedStudentsBody.innerHTML += `
        <tr>
            <td>${student.studentId}</td>
            <td>${student.fullName}</td>
            <td>${student.grade}</td>
        </tr>
        `;

    }

});

// ==========================================
// Highest Attendance
// ==========================================

let highestAttendanceBody = document.getElementById("highestAttendanceBody");

let presentCount = {};

attendance.forEach(function(record){

    if(record.status === "Present"){

        if(presentCount[record.studentId]){

            presentCount[record.studentId].count++;

        }else{

            presentCount[record.studentId] = {
                name: record.fullName,
                count: 1
            };

        }

    }

});

let highestName = "";
let highestValue = 0;

for(let id in presentCount){

    if(presentCount[id].count > highestValue){

        highestValue = presentCount[id].count;
        highestName = presentCount[id].name;

    }

}

highestAttendanceBody.innerHTML = `
<tr>
    <td>${highestName || "No Data"}</td>
    <td>${highestValue}</td>
</tr>
`;

// ==========================================
// Lowest Attendance
// ==========================================

let lowestAttendanceBody = document.getElementById("lowestAttendanceBody");

let absentCount = {};

attendance.forEach(function(record){

    if(record.status === "Absent"){

        if(absentCount[record.studentId]){

            absentCount[record.studentId].count++;

        }else{

            absentCount[record.studentId] = {
                name: record.fullName,
                count: 1
            };

        }

    }

});

let lowestName = "";
let lowestValue = -1;

for(let id in absentCount){

    if(absentCount[id].count > lowestValue){

        lowestValue = absentCount[id].count;
        lowestName = absentCount[id].name;

    }

}

lowestAttendanceBody.innerHTML = `
<tr>
    <td>${lowestName || "No Data"}</td>
    <td>${lowestValue == -1 ? 0 : lowestValue}</td>
</tr>
`;

// ==========================================
// Average Marks
// ==========================================

let averageMarks = document.getElementById("averageMarks");

if(marks.length > 0){

    let total = 0;

    marks.forEach(function(student){

        total += Number(student.percentage);

    });

    let average = total / marks.length;

    averageMarks.textContent = average.toFixed(2) + "%";

}else{

    averageMarks.textContent = "0%";

}

// ==========================================
// Department Wise Students
// ==========================================

let departmentBody = document.getElementById("departmentBody");

let departments = {};

students.forEach(function(student){

    if(departments[student.department]){

        departments[student.department]++;

    }else{

        departments[student.department] = 1;

    }

});

for(let dept in departments){

    departmentBody.innerHTML += `
    <tr>
        <td>${dept}</td>
        <td>${departments[dept]}</td>
    </tr>
    `;

}


