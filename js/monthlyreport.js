function generateReport(){

    let selectedMonth = document.getElementById("month").value;

    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    let reportBody = document.getElementById("reportBody");

    reportBody.innerHTML = "";

    attendance.forEach(function(record){

        if(record.date.startsWith(selectedMonth)){

            reportBody.innerHTML += `

            <tr>

                <td>${record.studentId}</td>
                <td>${record.fullName}</td>
                <td>${record.department}</td>
                <td>${record.date}</td>
                <td>${record.status}</td>

            </tr>

            `;

        }

    });

}