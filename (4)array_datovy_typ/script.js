// -------------------------------------------------
// Príklady použitia typu Array v JavaScripte
// Popis: Základy práce s poliami (arrays)
// 1. Vytvorenie poľa
// 2. Prístup k prvkom
// 3. Zmena hodnoty
// 4. Pridanie/odstránenie prvkov 
// 5. prechádzanie poľa 
// 6. Premapovanie, 
// 7. Filtrovanie
// 8. Spojenie prvkov 
// 9. Kombinovanie polí
// 10. Dĺžka poľa
// ---------------------

// (1. Vytvorenie poľa) ---
// vytvorenie základných polí (arrays)

let cisla = [1, 2, 3, 4, 5,];
let ovocie1 = ["jablko", "banán", "hruška"];
let zmiesane = [1, "text", true, {meno: "Adam"}];  // rôzne typy (number, string, boolean, objekt)

console.log(cisla);
// Konzola výpis --> 1, 2, 3, 4, 5

console.log(ovocie1);
// Konzola výpis --> jablko, banán, hruška

console.log(zmiesane);
// Konzola výpis --> 1, text, true, {meno: "Adam"} (celý objekt sa vypíše ako objekt)

console.log(zmiesane[3]);    // pomocou indexu 3 vytiahnem objekt (Adam)
// Konzola výpis --> {meno: "Adam"}

console.log(zmiesane[3].meno);
// Konzola výpis --> Adam


// (2. Prístup k jednotlivým prvkom podľa indexu) ---
// Indexovanie začína od 0!

let ovocko = ["jablko", "banán", "hruška"];

console.log(ovocko[0]);
// Konzola výpis --> jablko (prvý prvok, index 0)

console.log(ovocko[1]);
// Konzola výpis --> banán (druhý prvok, index 1)

console.log(ovocko[2]);
// Konzola výpis --> hruška (tretí prvok, index 2)

console.log(ovocko[3]);
// Konzola výpis --> undefined (máme iba 3 druhy ovocia)
// (pole má len 3 prvky, teda indexy 0–2)


// (3. Zmena hodnoty pomocou indexu) ---
// Pôvodné pole
let ovocie2 = ["jablko", "banán", "hruška"];

// Zmena hodnoty pre index 1 (nahradenie banánu za pomaranč)
ovocie2[1] = "pomaranč"

// Výpis upraveného poľa do konzoly
console.log(ovocie2);
// Konzola výpis --> jablko, pomaranč, hruška


// (4. Pridanie a odstránenie prvkov) ---

let zelenina = ["paprika", "paradajka", "uhorka"];
console.log ("Pôvodné pole: ", zelenina);
// Konzola výpis --> Pôvodné pole: paprika, paradajka, uhorka

// (4.1) pridá "redkvička" na koniec poľa
zelenina.push("redkvička");   
console.log("push('redkvička'):", zelenina);
// Konzola výpis --> paprika, paradajka, uhorka, redkvička

// (4.2) pridá "kukurica" na začiatok poľa
zelenina.unshift("kukurica")  
console.log("unshift('kukurica'):", zelenina);
// Konzola výpis --> kukurica, paprika, paradajka, uhorka, redkvička

// (4.3) odstráni posledný prvok "redkvička"
zelenina.pop();    
console.log("pop():", zelenina);
// Konzola výpis --> kukurica, paprika, paradajka, uhorka

// (4.4) odstráni prvý prvok "kukurica"
zelenina.shift();  
console.log("Po shift():", zelenina);
// Konzola výpis --> paprika, paradajka, uhorka


// (5. Prechádzanie polí) ---
// forEach - prejde každý prvok poľa cisla1
// x => je aktuálny prvok poľa a console.log(x) ho vypíše do konzoly

let cisla1 = [1, 2, 3];
cisla1.forEach(x => console.log(x)); 
// Konzola výpis --> 1, 2, 3


// (6. Premapovanie) ---
// cisla2.map - prejde každý prvok poľa cisla2 
// x => x * 2 - funkcia ktorá vynásobí každý prvok dvoma

let cisla2 = [1, 2, 3];
let zdvojenie = cisla2.map(x => x * 2);
console.log(zdvojenie);
// Konzola výpis --> 2, 4, 6


// (7. Filtrovanie) ---
// cisla3.filter - prejde každý prvok poľa cisla3
// x => x > 2 je podmienka, ktorá vracia true alebo false
// filter vracia nové pole obsahujúce len tie prvky, ktoré splnili podmienku (true)

let cisla3 = [1, 2, 3];
let vacsieAko2 = cisla3.filter(x => x > 2);
console.log(vacsieAko2); 
// Konzola výpis --> [3] - pretože iba 3 spĺňa podmienku (3 > 2)


// (8. Spojenie prvkov) --- 
// join(", ") - prejde všetky prvky poľa a spojí ich do jedného reťazca, oddeleného čiarkou a medzerou
let zelenina1 = ["paprika", "paradajka", "uhorka"];
console.log(zelenina1.join(", ")); 
// Konzola výpis --> paprika, paradajka, uhorka (vypíše ako reťazec)


// (9. Kombinovanie polí) ---
// a.concat(b) - spojí dve premenné do jedného poľa

let a = [1, 2]; 
let b = [3, 4];

// spojí [1, 2] + [3, 4]
let spojenie = a.concat(b);  
console.log(spojenie); 
// Konzola výpis --> [1, 2, 3, 4]


// (10. Dĺžka poľa) ---
// zelenina2.length - vráti počet prvkov v poli 

let zelenina2 = ["paprika", "paradajka", "uhorka"];
console.log(zelenina2.length);
// Konzola výpis --> 3 (pole obsahuje 3 prvky)








 

