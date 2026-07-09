// ===============================
// Get Marks from Local Storage
// ===============================

let marks = JSON.parse(localStorage.getItem("marks")) || [];

// Sort by Total (Highest First)
marks.sort(function(a, b){
    return b.total - a.total;
});

// Get Table Body
let marksTableBody = document.getElementById("marksTableBody");

// Clear Table
marksTableBody.innerHTML = "";

// ===============================
// Display Marks
// ===============================

marks.forEach(function(record, index){

    let row = `
    <tr>

        <td>${record.studentId}</td>

        <td>${record.fullName}</td>

        <td>${record.department}</td>

        <td>${record.html}</td>

        <td>${record.css}</td>

        <td>${record.javascript}</td>

        <td>${record.react}</td>

        <td>${record.node}</td>

        <td>${record.total}</td>

        <td>${record.percentage}%</td>

        <td>${record.grade}</td>

        <td>${index + 1}</td>

        <td>

            <button onclick="editMarks(${index})">
                Edit
            </button>

            <button onclick="deleteMarks(${index})">
                Delete
            </button>

        </td>

    </tr>
    `;

    marksTableBody.innerHTML += row;

});

// ===============================
// Edit Marks
// ===============================

function editMarks(index){

    let record = marks[index];

    let html = prompt("HTML Marks", record.html);
    let css = prompt("CSS Marks", record.css);
    let javascript = prompt("JavaScript Marks", record.javascript);
    let react = prompt("React Marks", record.react);
    let node = prompt("Node.js Marks", record.node);

    if(
        html === null ||
        css === null ||
        javascript === null ||
        react === null ||
        node === null
    ){
        return;
    }

    html = Number(html);
    css = Number(css);
    javascript = Number(javascript);
    react = Number(react);
    node = Number(node);

    let total = html + css + javascript + react + node;

    let percentage = (total / 500) * 100;

    let grade = "";

    if(percentage >= 90){
        grade = "A+";
    }
    else if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 70){
        grade = "B";
    }
    else if(percentage >= 60){
        grade = "C";
    }
    else if(percentage >= 50){
        grade = "D";
    }
    else{
        grade = "Fail";
    }

    marks[index].html = html;
    marks[index].css = css;
    marks[index].javascript = javascript;
    marks[index].react = react;
    marks[index].node = node;

    marks[index].total = total;
    marks[index].percentage = percentage.toFixed(2);
    marks[index].grade = grade;

    localStorage.setItem("marks", JSON.stringify(marks));

    alert("Marks Updated Successfully");

    location.reload();

}

// ===============================
// Delete Marks
// ===============================

function deleteMarks(index){

    let confirmDelete = confirm("Are you sure you want to delete this record?");

    if(confirmDelete){

        marks.splice(index,1);

        localStorage.setItem("marks", JSON.stringify(marks));

        alert("Marks Deleted Successfully");

        location.reload();

    }

}