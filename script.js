document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('filter-input');
    input.addEventListener('keyup', filterTable, false);
});

// Funkcja do filtrowania tabeli na podstawie inputu
function filterTable(event) {
    let filter = event.target.value.toUpperCase();
    let table = document.getElementById("data-table");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
        let tds = tr[i].getElementsByTagName("td");
        tr[i].style.display = "none"; // Hide the row initially
        
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Show the row if the query matches
                    break;
                }
            }
        }
    }
}

// Załadowanie danych JSON i przekształcenie ich w tabelę HTML
fetch('people_data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        let tableHTML = "<table id='data-table'><thead><tr><th>Lp.</th><th>ID</th><th>Name</th><th>Location</th><th>Street</th><th>Building</th><th>Apartment</th><th>Phone</th><th>Email</th></tr></thead><tbody>";

        data.forEach((person, index) => {
            tableHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${person.id}</td>
                    <td>${person.name}</td>
                    <td>${person.location}</td>
                    <td>${person.address.street}</td>
                    <td>${person.address.building}</td>
                    <td>${person.address.apartment}</td>
                    <td>${person.contact.phone}</td>
                    <td>${person.contact.email}</td>
                </tr>
            `;
        });

        tableHTML += "</tbody></table>";
        container.innerHTML = tableHTML;
    })
    .catch(error => console.error('Błąd wczytywania danych JSON:', error));
