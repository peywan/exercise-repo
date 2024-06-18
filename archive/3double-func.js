// En funktion som dubblar ett enskilt tal
function doubleNumber(num) {
    return num * 2;
}

// En funktion som applicerar en annan funktion på varje element i en array
function applyFunctionToArray(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

// Användning av funktionen applyFunctionToArray med doubleNumber som parameter
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = applyFunctionToArray(numbers, doubleNumber);
console.log("Dubblade nummer: ", doubledNumbers);
