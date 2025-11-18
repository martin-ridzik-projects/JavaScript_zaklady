// -------------------------------------------------
// Príklady použitia typu undefined v JavaScripte
// Popis: Základy práce s dátovym typom undefined
// 1. Deklarovaná premenná s nepriradenou hodnotou
// 2. Funkcia, ktorá nič nevracia
// 3. Prístup k neexistujúcej vlastnosti objektu
// 4. Funkcia s nepovinným parametrom
// 5. Prvok po odobratí z poľa
// ---------------------

// (1. Deklarovaná premenná s nepriradenou hodnotou) ---

let a;          // (chýba =) - nepriradená hodnota
console.log(a);   
// Konzola výpis --> undefined 


// (2. Funkcia, ktorá nič nevracia) ---

function nicNevracia() {}              // mám iba funkciu bez deklarovanej hodnoty 
console.log(nicNevracia());
// Konzola výpis --> undefined 

function nicNevracia() {}              // telo funkcie {} neobsahuje hodnotu ani príkaz return
let vysledok = 10;                     // hodnota 10 je deklarovaná mimo tela funkcie {}
console.log(nicNevracia());
// Konzola výpis --> undefined 

function sDesiatkou() {
    return 10;                         // hodnota 10 je deklarovaná v tele funkcie s príkazom return
}    
console.log(sDesiatkou());
// Konzola výpis --> 10


// (3. Prístup k neexistujúcej vlastnosti objektu) ---

const osoba = { meno: "Ján" };          // v objekte nebola deklarovaná premenná priezvisko

console.log(osoba.meno);
// Konzola výpis --> Ján

console.log(osoba.priezvisko);
// Konzola výpis --> undefined

// 3.1 - Prehodené informácie
const osoba1 = { priezvisko: "Hruška" }; // v objekte nebola deklarovaná premenná meno

console.log(osoba1.meno);
// Konzola výpis --> undefined

console.log(osoba1.priezvisko);
// Konzola výpis --> Hruška


// (4. Funkcia s nepovinným parametrom) ---

function nepozdravilSa(meno1) {                 
    console.log( "Ahoj"  +  meno1 );     // Konzola výpis --> Ahojundefined      
}
nepozdravilSa();                         // nebola odovzdaná hodnota "Jozef" - chýbajúci argument v zátvorke pozdrav()

function pozdravilSa(meno2) {
    console.log("Ahoj " + meno2);        // Konzola výpis --> Ahoj Jozef
}
pozdravilSa("Jozef");                    // bola odovzdaná hodnota "Jozef" - prítomný argument v zátvorke pozdrav("Jozef")

function privitalHo(meno3 = "Hosť") {    // bola nastavená premenná "Hosť"
    console.log("Ahoj " + meno3);        // Konzola výpis --> Ahoj Hosť
}
privitalHo();                            // bola odovzdaná premenná Hosť


// (5. Prvok po odobratí z poľa) --- 

let pole = [1, 2, 3];                    // v poli sú nastavené hodnoty 1, 2, 3
delete pole [1];                         // vymažeme pole [1] - ostane [1, empty, 3] - index
console.log(pole[1]);                    // pole [1] neexistuje - undefined
// Konzola výpis --> undefined

console.log(pole[0]);
// Konzola výpis --> 1

console.log(pole[1]);                    // pole bolo vymazané pomocou delete pole [1]; 
// Konzola výpis --> undefined

console.log(pole[2]); 
// Konzola výpis --> 3
