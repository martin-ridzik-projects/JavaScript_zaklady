// -------------------------------------------------
// Príklady použitia typu Boolean v JavaScripte
// Popis: Základy práce s boolean hodnotami 
// 1. Priame priradenie
// 2. Logické operácie
// 3. Porovnávanie hodnôt
// 4. Prevod iných typov na boolean
// 5. Použitie vo výrazoch
// ---------------------

// (1. Priame priradenie) ---
// Premenné obsahujú hodnoty true a false.
let jeZapnuté = true;
console.log(jeZapnuté);
// Konzola výpis --> true

let jeVypnute = false;
console.log(jeVypnute);
// Konzola výpis --> false

// (2. Logické operácie) ---
let jeDospelý = true; 
let maListok = false;
console.log(jeDospelý, maListok);
// Konzola výpis --> true, false

let x = jeDospelý && maListok;  // false (&& - obe hodnoty musia byť true)
console.log(x);
// Konzola výpis --> false

let y = jeDospelý || maListok;  // true (|| - stačí aby jedna hodnota bola true)
console.log(y);
// Konzola výpis --> true

let z = !jeDospelý;             // false (! - negácia, zmení na opačnú hodnotu)
console.log(z);    
// Konzola výpis --> false

// (3. Porovnávanie hodnôt) ---
let a = 5;
let b = 10;

console.log(a > b);     // a nieje väčšie ako b
// Konzola výpis --> false 

console.log(a < b);     // b je väčšie ako a 
// Konzola výpis --> true 

console.log(a === b);   // a aj b sú čísla (number), ale nemajú rovnakú hodnotu
// Konzola výpis --> false 

// (4. Prevod iných typov na boolean) ---

Boolean(0);          // Číslo 0 je považované za nepravdu 
console.log(Boolean(0)); 
// Konzola výpis --> false 

Boolean(1);          // Akékoľvek číslo okrem 0 je považované za pravdu
console.log(Boolean(1));
// Konzola výpis --> true 

Boolean("");         // Prázdny textový reťazec je nepravda 
console.log(Boolean(""))
// Konzola výpis --> false 

Boolean("text");     // Vyplnený text je pravda
console.log(Boolean("text"));
// Konzola výpis --> true 

Boolean(null);       // null znamená "nič"
console.log(Boolean(null));
// Konzola výpis --> false 

Boolean(undefined);  // undefined znamená "nenastavené"
console.log(Boolean(undefined));
// Konzola výpis --> false

// (5. Použitie vo výrazoch) --- 

let aktivny = true;
console.log("Stav: " + aktivny);
// Konzola výpis --> Stav: true

let jeDospely = false;
console.log("Dospely: " + jeDospely);
// Konzola výpis --> Dospely: false

let maLístok = true;
console.log("Lístok: " + maLístok);
// Konzola výpis --> Lístok: true

let jeZapnute = false;
console.log("Zapnuté: " + jeZapnute); 
// Konzola výpis --> Zapnuté: false
