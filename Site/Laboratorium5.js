// Zadanie 1
let wiek = prompt('Podaj swój wiek: ');
if (wiek >=18) {
    console.log('Jesteś pełnoletni!');
} else {
    console.log('Nie jesteś pełoletni!')
}



// Zadanie 2
let stopnieC = prompt('Podaj stopnieC: ');
let stopnieF = (stopnieC * 9/5) + 32;
console.log('Temperatura w stopniach Fahrenheita:' + stopnieF);



// Zadanie 3

let numbersArray = [2, 5, 8, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50];

// Zsumuj wartości
let sum = numbersArray.reduce(function(acc, val) { return acc + val; }, 0);
console.log("Suma wartości: " + sum);

// Znajdź liczby parzyste
let evenNumbers = numbersArray.filter(function(num) { return num % 2 === 0; });
console.log("Liczby parzyste: " + evenNumbers);

// Pomnóż wartości razy 3
let multipliedArray = numbersArray.map(function(num) { return num * 3; });
console.log("Pomnożone wartości: " + multipliedArray);

// Dodaj do tablicy swój numer albumu. Znajdź jego index w tablicy
numbersArray.push(12345);
let albumIndex = numbersArray.indexOf(12345);
console.log("Index mojego numeru albumu: " + albumIndex);

// Oblicz średnią arytmetyczna
let avg = sum / numbersArray.length;
console.log("Średnia arytmetyczna: " + avg);

// Znajdź największą liczbę
let max = Math.max(...numbersArray);
console.log("Największa liczba: " + max);

// Zlicz ilość wystąpień wybranej wartości
let valueToCount = 25;
let count = numbersArray.filter(function(num) { return num === valueToCount; }).length;
console.log("Liczba wystąpień wartości " + valueToCount + ": " + count);



// Zadanie 4
let fibonacciArray = [0,1];
for (let i = 2; i < 100; i++) {
    fibonacciArray[i] = fibonacciArray[i-1]+fibonacciArray[i-2];
}
console.log(fibonacciArray)