// 1. Skapa en asynkron funktion fetchApiData
// 2. Inuti funktionen, använd fetch för att hämta data från 'https://jsonplaceholder.typicode.com/users'
// 3. Kasta ett fel om fetch misslyckas
// 4. Omvandla responsen till JSON
// 5. Skriv ut JSON-datan på konsolen
// 6. Hantera eventuella fel med try/catch
// 7. Anropa funktionen för att testa

async function fetchApiData() {
    try {
        let response = await fetch ('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("network error or something.")
        }
    }
}
