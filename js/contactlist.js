// Get Contacts
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

let tableBody = document.getElementById("contactTableBody");

displayContacts();

function displayContacts(){

    tableBody.innerHTML = "";

    contacts.forEach(function(contact,index){

        let row = `
        <tr>

            <td>${contact.name}</td>

            <td>${contact.email}</td>

            <td>${contact.subject}</td>

            <td>${contact.message}</td>

            <td>

                <button onclick="deleteContact(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

function deleteContact(index){

    let confirmDelete = confirm("Delete this message?");

    if(confirmDelete){

        contacts.splice(index,1);

        localStorage.setItem("contacts",JSON.stringify(contacts));

        displayContacts();

    }

}