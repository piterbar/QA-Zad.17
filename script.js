
// Załadowanie danych JSON i przekształcenie ich w tabelę HTML
fetch('people_data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        let tableHTML = "<table><tr><th>ID</th><th>Name</th><th>Location</th><th>Street</th><th>Building</th><th>Apartment</th><th>Phone</th><th>Email</th></tr>";

        data.forEach(person => {
            tableHTML += `
                <tr>
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

        tableHTML += "</table>";
        container.innerHTML = tableHTML;
    })
    .catch(error => console.error('Błąd wczytywania danych JSON:', error));
