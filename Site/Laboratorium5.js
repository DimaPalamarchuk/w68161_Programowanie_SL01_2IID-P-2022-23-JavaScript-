// Zadanie 1

//Napisz program, który poprosi użytkownika o podanie swojego wieku. Zapisz to
//do zmiennej i sprawdź, czy jest pełnoletni. Wypisz odpowiedni komunikatu na ekranie.

let wiek = prompt('Podaj swój wiek: ');
if (wiek >=18) {
    console.log('Jesteś pełnoletni!');
} else {
    console.log('Nie jesteś pełoletni!')
}



// Zadanie 2

//Dokonaj konwersji stopni Celsjusza na stopnie Fahrenheita na podstawie podanej temperatury.
//Wypisz wartość konsoli.

let stopnieC = prompt('Podaj stopnieC: ');
let stopnieF = (stopnieC * 9/5) + 32;
console.log('Temperatura w stopniach Fahrenheita:' + stopnieF);



// Zadanie 3

//Stwórz tablice liczb i wykonaj na niej poniższe operacje
//Do operacji wykorzystaj metody tablic. Wynik operacji wypisz w konsoli.

let numbersArray = [2, 5, 8, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50];

let sum = numbersArray.reduce(function(acc, val) { return acc + val; }, 0);
console.log("Suma wartości: " + sum);

let evenNumbers = numbersArray.filter(function(num) { return num % 2 === 0; });
console.log("Liczby parzyste: " + evenNumbers);

let multipliedArray = numbersArray.map(function(num) { return num * 3; });
console.log("Pomnożone wartości: " + multipliedArray);

numbersArray.push(12345);
let albumIndex = numbersArray.indexOf(12345);
console.log("Index mojego numeru albumu: " + albumIndex);

let avg = sum / numbersArray.length;
console.log("Średnia arytmetyczna: " + avg);

let max = Math.max(...numbersArray);
console.log("Największa liczba: " + max);

let valueToCount = 25;
let count = numbersArray.filter(function(num) { return num === valueToCount; }).length;
console.log("Liczba wystąpień wartości " + valueToCount + ": " + count);



// Zadanie 4

//Stwórz tablice z 100 elementami zawierający kolejnymi liczbami ciągu Fibonacciego.

let fibonacciArray = [0,1];
for (let i = 2; i < 100; i++) {
    fibonacciArray[i] = fibonacciArray[i-1]+fibonacciArray[i-2];
}
console.log(fibonacciArray)