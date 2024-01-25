
const fs = require('fs');

// Funkcja do generowania losowych danych
function generateRandomData() {
    const names = ["Jan", "Anna", "Piotr", "Katarzyna", "Marek", "Agnieszka", "Tomasz", "Monika", "Paweł", "Magdalena"];
    const surnames = ["Kowalski", "Nowak", "Wiśniewski", "Dąbrowski", "Lewandowski", "Wójcik", "Kamiński", "Kaczmarek", "Zając", "Król"];

    const streets = ["Marszałkowska", "Krakowska", "Słoneczna", "Polna", "Leśna", "Główna", "Ogrodowa", "Parkowa", "Lipowa", "Brzozowa"];
    const cities = ["Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice"];

    const person = {
        id: (Math.floor(Math.random() * 1000) + 1).toString().padStart(3, '0'),
        name: names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)],
        location: cities[Math.floor(Math.random() * cities.length)],
        address: {
            street: streets[Math.floor(Math.random() * streets.length)],
            building: Math.floor(Math.random() * 100) + 1,
            apartment: Math.floor(Math.random() * 100) + 1
        },
        contact: {
            phone: Math.floor(Math.random() * 900000000 + 100000000),
            email: "email@example.com"
        }
    };

    return person;
}

// Generowanie 100 rekordów
const people = [];
for (let i = 0; i < 100; i++) {
    people.push(generateRandomData());
}

// Zapisywanie wygenerowanych danych do pliku JSON
fs.writeFile('people_data.json', JSON.stringify(people, null, 4), err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Plik z danymi 100 osób został zapisany.');
});
