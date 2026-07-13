// ==========================================
// Load Data from Local Storage
// ==========================================

let students = JSON.parse(localStorage.getItem("students")) || [];
let marks = JSON.parse(localStorage.getItem("marks")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// ==========================================
// Keep only existing students
// ==========================================

let validMarks = marks.filter(function(mark) {
    return students.some(function(student) {
        return String(student.studentId).trim() === String(mark.studentId).trim();
    });
});

let validAttendance = attendance.filter(function(record) {
    return students.some(function(student) {
        return String(student.studentId).trim() === String(record.studentId).trim();
    });
});


document.getElementById("totalStudents").textContent = students.length;

let present = validAttendance.filter(function(record) {
    return record.status === "Present";
}).length;

document.getElementById("presentStudents").textContent = present;

let absent = validAttendance.filter(function(record) {
    return record.status === "Absent";
}).length;

document.getElementById("absentStudents").textContent = absent;

if(validMarks.length > 0){

    let total = 0;

    validMarks.forEach(function(student){
        total += Number(student.percentage);
    });

    let average = total / validMarks.length;

    document.getElementById("averageMarksCard").textContent =
        average.toFixed(2) + "%";

}else{

    document.getElementById("averageMarksCard").textContent = "0%";

}


let topStudentsBody = document.getElementById("topStudentsBody");

let sortedMarks = [...validMarks];

sortedMarks.sort(function(a,b){
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



let failedStudentsBody = document.getElementById("failedStudentsBody");

validMarks.forEach(function(student){

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



let highestAttendanceBody = document.getElementById("highestAttendanceBody");

let presentCount = {};

validAttendance.forEach(function(record){

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


let lowestAttendanceBody = document.getElementById("lowestAttendanceBody");

let absentCount = {};

validAttendance.forEach(function(record){

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



let averageMarks = document.getElementById("averageMarks");

if(validMarks.length > 0){

    let total = 0;

    validMarks.forEach(function(student){
        total += Number(student.percentage);
    });

    let average = total / validMarks.length;

    averageMarks.textContent = average.toFixed(2) + "%";

}else{

    averageMarks.textContent = "0%";

}



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