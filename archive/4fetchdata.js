// En funktion som simulerar en asynkron operation med hjälp av Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Ändra till false för att simulera ett fel
            if (success) {
                resolve("Data hämtad framgångsrikt!");
            } else {
                reject("Misslyckades med att hämta data.");
            }
        }, 2000);
    });
}

// Användning av funktionen med then och catch
fetchData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });

