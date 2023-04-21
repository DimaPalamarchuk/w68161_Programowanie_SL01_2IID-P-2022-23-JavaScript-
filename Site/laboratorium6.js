// Zadanie 1
// Napisz funkcje, która obliczy silnię dla liczby całkowitej podanej jako argumen

function silnia(n){
    if(n > 1){
        return n* silnia(n-1);
    }
    return 1;
}

console.log(silnia(5));


// Zadanie 2
// Stwórz trzy przyciski, po kliknięciu każdego z nich, zmień kolor tła tylko
// klikniętego przycisku. Jeśli któryś z przycisków już ma zmienione tło, to przy kliknięciu innego
// przycisku jego kolor tła powinien powrócić do pierwotnego stanu, a kolor klikniętego przycisku
// powinien się zmienić.


const btns = document.querySelectorAll('button');

// for(let i = 0; i < btns.length; i++) {
//     const btn = btns[i];
// }

// let selectedBtn;

// btns.forEach(btn => {
    
//     btn.addEventListener('click', ()=> {
//         if(selectedBtn){
//             selectedBtn.classList.remove('selected');
//         }

//         btn.classList.add('selected');
//         selectedBtn = btn;
//     })
// });

let selectedBtn;

const elementToHide = document.querySelector('p');

btns.forEach(btn => {
    if(SelectedBtn){
        selectedBtn.classList.remove('selected');
    }
    elementToHide.hidden = !elementToHide.hidden;

    btn.classList.add('selected');
    selectedBtn = btn;
 })




// Zadanie 3
// Dodaj przycisk po kliknięciu którego zmieni się widoczność dowolnego element
// na stronie

const input = document.querySelector('input');
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');

submit.addEventListener('click', ()=>{
    const value = input.value;
    const li1 = document.createElement('li');
    li1.textContent = value;
    ul.appendChild(li1); 
});




// Zadanie 4
// Dodaj pole tekstowe oraz przycisk. Po kliknięciu przycisku dodaj wartość pola
// tekstowego do listy.

const input = document.querySelector('input');
const surnameInput = document.querySelector('#surname');
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');

const tabke = document.querySelector('table');
submit.addEventListener('click', () => {
    const value = input.value;
    const surname = surnameInput.value;
    const li1 = document.createElement('li');
    li1.textContent = value;
    ul.appendChild(li1);

    const row =  table.insertRow();
    const newCell = row.insertCell();
    newCell.textContent = value;
    const newCell2 = row.insertCell();
    newCell2.textContent = surname;
});

// Zadanie 5
// Dodaj kolejne pole tekstowe. Dodaj tabelę z dwoma kolumnami Imię i Nazwisko.
// Po kliknięciu przycisku wartość pól tekstowych powinna zostać dodana do tabeli. Wyczyść
// wartość pól.


