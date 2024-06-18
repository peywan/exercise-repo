// En funktion som simulerar en asynkron operation med hjälp av Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data hämtad framgångsrikt!");
            } else {
                reject("Misslyckades med att hämta data.");
            }
        }, 2000);
    });
}

// En asynkron funktion som använder async/await
async function getData() {
    try {
        let response = await fetchData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// Användning av den asynkrona funktionen
getData();
