// // Get students from Local Storage
// // let students = JSON.parse(localStorage.getItem("students")) || [];

// // // Get table body
// // let tableBody = document.getElementById("tableBody");
// // let currentPage = 1;
// // let studentsPerPage = 5;

// // Display all students
// // students.forEach(function(student, index){

// //     let row = `
    
// //     <tr>

// //         <td>${student.studentId}</td>

// //         <td>${student.fullName}</td>

// //         <td>${student.email}</td>

// //         <td>${student.department}</td>

// //         <td>${student.year}</td>

// //         <td class="action-buttons">

// //             <button onclick="editStudent(${index})">Edit</button>

// //             <button onclick="deleteStudent(${index})">Delete</button>

// //         </td>

// //     </tr>

// //     `;

// //     tableBody.innerHTML += row;

// // });

// function displayStudents(){

//    let start = (currentPage - 1) * studentsPerPage;
//     let end = start + studentsPerPage;

//     students.slice(start, end).forEach(function(student, index){

//         let row = `
//         <tr>

//             <td>${student.studentId}</td>

//             <td>${student.fullName}</td>

//             <td>${student.email}</td>

//             <td>${student.department}</td>

//             <td>${student.year}</td>

//             <td>

//                 <button onclick="editStudent(${index})">Edit</button>

//                 <button onclick="deleteStudent(${index})">Delete</button>

//             </td>

//         </tr>
//         `;

//         tableBody.innerHTML += row;

//     });

// }

// displayStudents();
// // Edit Function
// function editStudent(index){

//     alert("Edit Student: " + students[index].fullName);

//     localStorage.setItem("editIndex", index);

//     // Open Student Registration Form
//     window.location.href = "students.html";


// }

// // Delete Function
// function deleteStudent(index){

//      let confirmDelete = confirm("Are you sure you want to delete this student?");

//     if (confirmDelete) {

//         // Remove the student from the array
//         students.splice(index, 1);

//         // Save updated array to Local Storage
//         localStorage.setItem("students", JSON.stringify(students));

//         // Refresh the page
//         location.reload();

//     }
// }

//     function searchStudent(){

//     let input = document.getElementById("search").value.toLowerCase();

//     let rows = document.querySelectorAll("#tableBody tr");

//     rows.forEach(function(row){

//         let text = row.textContent.toLowerCase();

//         if(text.includes(input)){

//             row.style.display = "";

//         }else{

//             row.style.display = "none";

//         }

//     });

// }

// function filterDepartment(){

//     let department = document.getElementById("departmentFilter").value;

//     let rows = document.querySelectorAll("#tableBody tr");

//     rows.forEach(function(row){

//         let departmentCell = row.cells[3].textContent;

//         if(department === "All" || departmentCell === department){

//             row.style.display = "";

//         }
//         else{

//             row.style.display = "none";

//         }

//     });

// }
// // Sort by Student ID
// function sortById(){

//     students.sort(function(a,b){

//         return a.studentId.localeCompare(b.studentId);

//     });

//     displayStudents();

// }

// // Sort by Name
// function sortByName(){

//     students.sort(function(a,b){

//         return a.fullName.localeCompare(b.fullName);

//     });

//     displayStudents();

// }
// function nextPage(){

//     if(currentPage * studentsPerPage < students.length){

//         currentPage++;

//         document.getElementById("pageNumber").textContent = currentPage;

//         displayStudents();

//     }

// }

// function previousPage(){

//     if(currentPage > 1){

//         currentPage--;

//         document.getElementById("pageNumber").textContent = currentPage;

//         displayStudents();

//     }

// }
// Get students from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];
console.log(students)
// Table Body
let tableBody = document.getElementById("tableBody");

// Pagination Variables
let currentPage = 1;
let studentsPerPage = 5;

// ==========================
// Display Students
// ==========================
function displayStudents(){

    tableBody.innerHTML = "";

    let start = (currentPage - 1) * studentsPerPage;
    let end = start + studentsPerPage;

    students.slice(start, end).forEach(function(student, index){

        let actualIndex = start + index;

        let row = `
        <tr>

            <td>${student.studentId}</td>

            <td>${student.fullName}</td>

            <td>${student.email}</td>

            <td>${student.department}</td>

            <td>${student.year}</td>

           <td>

                <button onclick="viewStudent(${actualIndex})">View</button>

                  <button onclick="editStudent(${actualIndex})">Edit</button>

                 <button onclick="deleteStudent(${actualIndex})">Delete</button>

             </td>

       

        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

displayStudents();

// ==========================
// View Student
// ==========================
function viewStudent(index){

    localStorage.setItem("profileIndex", index);

    window.location.href = "studentprofile.html";

}

// ==========================
// Edit Student
// ==========================
function editStudent(index){

    localStorage.setItem("editIndex", index);

    window.location.href = "students.html";

}

// ==========================
// Delete Student
// ==========================
function deleteStudent(index){

    let confirmDelete = confirm("Are you sure you want to delete this student?");

    if(confirmDelete){

        students.splice(index,1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();

    }

}

// ==========================
// Search Student
// ==========================
function searchStudent(){

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(function(row){

        let text = row.textContent.toLowerCase();

        if(text.includes(input)){

            row.style.display = "";

        }
        else{

            row.style.display = "none";

        }

    });

}

// ==========================
// Filter Department
// ==========================
function filterDepartment(){

    let department = document.getElementById("departmentFilter").value;

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(function(row){

        let departmentCell = row.cells[3].textContent;

        if(department === "All Departments" || department === "" || departmentCell === department){

            row.style.display = "";

        }
        else{

            row.style.display = "none";

        }

    });

}

// ==========================
// Sort by Student ID
// ==========================
function sortById(){

    students.sort(function(a,b){

        return a.studentId.localeCompare(b.studentId);

    });

    displayStudents();

}

// ==========================
// Sort by Name
// ==========================
function sortByName(){

    students.sort(function(a,b){

        return a.fullName.localeCompare(b.fullName);

    });

    displayStudents();

}

// ==========================
// Next Page
// ==========================
function nextPage(){

    if(currentPage * studentsPerPage < students.length){

        currentPage++;

        document.getElementById("pageNumber").textContent = currentPage;

        displayStudents();

    }

}

// ==========================
// Previous Page
// ==========================
function previousPage(){

    if(currentPage > 1){

        currentPage--;

        document.getElementById("pageNumber").textContent = currentPage;

        displayStudents();

    }

}