// ===============================
// Load Students & Existing Marks
// ===============================

let students = JSON.parse(localStorage.getItem("students")) || [];
let marks = JSON.parse(localStorage.getItem("marks")) || [];

let marksBody = document.getElementById("marksBody");

// ===============================
// Display Students
// ===============================

students.forEach(function(student, index) {

    // Check if this student already has marks
    let existing = marks.find(function(item) {
        return item.studentId === student.studentId;
    });

    let row = `
    <tr>

        <td>${student.studentId}</td>

        <td>${student.fullName}</td>

        <td>${student.department}</td>

        <td><input type="number" id="html${index}" min="0" max="100">

         </td>

        <td><input type="number" id="css${index}" min="0" max="100">
        </td>

        <td><input type="number" id="javascript${index}" min="0" max="100">
      </td>

        <td><input type="number" id="react${index}" min="0" max="100">

        </td>

        <td><input type="number" id="node${index}" min="0" max="100">
        </td>
      


        <td id="total${index}">0
    
        </td>

        <td id="percentage${index}">0% </td>
    
     

        <td id="grade${index}">
        </td>

        <td id="rank${index}">
            -
        </td>

        <td>

            <button onclick="saveMarks(${index})">
                Save
            </button>

        </td>

    </tr>
    `;

    marksBody.innerHTML += row;

});

// ===============================
// Save Marks
// ===============================

function saveMarks(index){

    let html = document.getElementById("html"+index).value;
    let css = document.getElementById("css"+index).value;
    let javascript = document.getElementById("javascript"+index).value;
    let react = document.getElementById("react"+index).value;
    let node = document.getElementById("node"+index).value;

    // Validation
    if(html==="" || css==="" || javascript==="" || react==="" || node===""){

        alert("Please enter all subject marks.");

        return;

    }

    html = Number(html);
    css = Number(css);
    javascript = Number(javascript);
    react = Number(react);
    node = Number(node);

    // Total
    let total = html + css + javascript + react + node;

    // Percentage
    let percentage = (total / 500) * 100;

    // Grade
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

    // Display Results
    document.getElementById("total"+index).textContent = total;
    document.getElementById("percentage"+index).textContent = percentage.toFixed(2) + "%";
    document.getElementById("grade"+index).textContent = grade;

    // Create Record
    let record = {

        studentId: students[index].studentId,
        fullName: students[index].fullName,
        department: students[index].department,

        html: html,
        css: css,
        javascript: javascript,
        react: react,
        node: node,

        total: total,
        percentage: percentage.toFixed(2),
        grade: grade

    };

    // Check if record already exists
    let existingIndex = marks.findIndex(function(item){

        return item.studentId === students[index].studentId;

    });

    if(existingIndex !== -1){

        marks[existingIndex] = record;

    }
    else{

        marks.push(record);

    }

    // Calculate Rank
    marks.sort(function(a,b){

        return b.total - a.total;

    });

    marks.forEach(function(item, i){

        let studentIndex = students.findIndex(function(student){

            return student.studentId === item.studentId;

        });

        if(studentIndex !== -1){

            document.getElementById("rank"+studentIndex).textContent = i + 1;

        }

    });

    // Save Local Storage
    localStorage.setItem("marks", JSON.stringify(marks));

    alert("Marks Saved Successfully!");

}