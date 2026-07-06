// Get students from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Get table body
let tableBody = document.getElementById("tableBody");
let currentPage = 1;
let studentsPerPage = 5;

// Display all students
// students.forEach(function(student, index){

//     let row = `
    
//     <tr>

//         <td>${student.studentId}</td>

//         <td>${student.fullName}</td>

//         <td>${student.email}</td>

//         <td>${student.department}</td>

//         <td>${student.year}</td>

//         <td class="action-buttons">

//             <button onclick="editStudent(${index})">Edit</button>

//             <button onclick="deleteStudent(${index})">Delete</button>

//         </td>

//     </tr>

//     `;

//     tableBody.innerHTML += row;

// });

function displayStudents(){

   let start = (currentPage - 1) * studentsPerPage;
    let end = start + studentsPerPage;

    students.slice(start, end).forEach(function(student, index){

        let row = `
        <tr>

            <td>${student.studentId}</td>

            <td>${student.fullName}</td>

            <td>${student.email}</td>

            <td>${student.department}</td>

            <td>${student.year}</td>

            <td>

                <button onclick="editStudent(${index})">Edit</button>

                <button onclick="deleteStudent(${index})">Delete</button>

            </td>

        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

displayStudents();
// Edit Function
function editStudent(index){

    alert("Edit Student: " + students[index].fullName);

    localStorage.setItem("editIndex", index);

    // Open Student Registration Form
    window.location.href = "students.html";


}

// Delete Function
function deleteStudent(index){

     let confirmDelete = confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

        // Remove the student from the array
        students.splice(index, 1);

        // Save updated array to Local Storage
        localStorage.setItem("students", JSON.stringify(students));

        // Refresh the page
        location.reload();

    }
}

    function searchStudent(){

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(function(row){

        let text = row.textContent.toLowerCase();

        if(text.includes(input)){

            row.style.display = "";

        }else{

            row.style.display = "none";

        }

    });

}

function filterDepartment(){

    let department = document.getElementById("departmentFilter").value;

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(function(row){

        let departmentCell = row.cells[3].textContent;

        if(department === "All" || departmentCell === department){

            row.style.display = "";

        }
        else{

            row.style.display = "none";

        }

    });

}
// Sort by Student ID
function sortById(){

    students.sort(function(a,b){

        return a.studentId.localeCompare(b.studentId);

    });

    displayStudents();

}

// Sort by Name
function sortByName(){

    students.sort(function(a,b){

        return a.fullName.localeCompare(b.fullName);

    });

    displayStudents();

}
function nextPage(){

    if(currentPage * studentsPerPage < students.length){

        currentPage++;

        document.getElementById("pageNumber").textContent = currentPage;

        displayStudents();

    }

}

function previousPage(){

    if(currentPage > 1){

        currentPage--;

        document.getElementById("pageNumber").textContent = currentPage;

        displayStudents();

    }

}