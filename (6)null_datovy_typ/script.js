// -------------------------------------------------
// Príklady použitia typu null v JavaScripte
// Popis: Základy práce s dátovym typom null
// 1. Premenná bez hodnoty (zámerne prázdna)
// 2. Resetovanie hodnoty
// 3. Funkcia, ktorá nenašla výsledok
// 4. Kontrola existencie
// 5. Rozdiel medzi null a undefined
// 6. null je falsy
// 7. null v objektoch (hodnota nie je dostupná)
// ---------------------


// (1. Premenná bez hodnoty) - (zámerne prázdna) ---

let pouzivatel = null;
console.log(pouzivatel); 
// Konzola výpis --> null 

// 1.1 Objekt s úmyselne prázdnou hodnotou 

let osoba = {
    meno: "Anna",
    vek: null      // vek: null
};

console.log(osoba.vek);
// Konzola výpis --> null 

// 1.2 Pole obsahujúce prázdnu hodnotu 

let data = [1, null, 3];
console.log(data[1]);   
// Konzola výpis --> null 

// 1.3 Funkcia, ktorá zámerne vracia null
function findUserSimple() {
    return null;        // vráti null
}

console.log(findUserSimple());
// Konzola výpis --> null 

// 1.4 Premenná resetovaná na null 
// (príklad - používateľ sa odhlási)

let token = "abc123";   // pôvodná hodnota - abc123
token = null;           // reset

console.log(token);
// Konzola výpis --> null 

// 1.5 Premenná pripravená na budúce použitie 

 let polozka = null;    // neskôr si pridám "kniha" ako polozka1
 console.log(polozka);
// Konzola výpis --> null 

 let polozka1 = "kniha"; // vytvoril som polozka1 s hodnotou "kniha"
 console.log(polozka1);
// Konzola výpis --> kniha


// (2. Resetovanie hodnoty) ---

let data1 = {meno: "Peter"};
data1 = null;            // reset na null
console.log(data1);
// Konzola výpis --> null 

// 2.1 Resetovanie objektu 
let osoba1 = {meno: "Jozef", vek:21 };
osoba1 = null;     // reset na null 

console.log(osoba1); 
// Konzola výpis --> null 

// 2.2 Resetovanie poľa 
let zoznam = [1, 2, 3];
zoznam = null;   // reset na null

console.log(zoznam);
// Konzola výpis --> null 

// 2.3 Resetovanie čísla 
let pocet = 42;
pocet = null;

console.log(pocet);
// Konzola výpis --> null 

// 2.4 Resetovanie reťazca
let sprava = "Ahoj";
sprava = null;   // reset na null

console.log(sprava);
// Konzola výpis --> null 

// 2.5 Resetovanie funkčnej hodnoty

let akcia = function() {
    console.log("Klik!");
}
akcia = null;   // reset na null
console.log(akcia);
// Konzola výpis --> null 

// 2.6 Resetovanie objektu po "odstranení používateľa"

let profil = { meno: "Peter", prihlasenyJe: true};
profil = null;

console.log(profil);
// Konzola výpis --> null

// 2.7 Resetovanie premennej pri zmene stavu 
// PR. hry alebo aplikácie

let aktualnyLevel = { stage: 3};
aktualnyLevel = null;

console.log(aktualnyLevel);
// Konzola výpis --> null 


// (3. Funkcia, ktorá nenašla výsledok) ---

function najdiPouzivatela(id) {
    return null;    // nenašlo nič
}

console.log(najdiPouzivatela(1));
// Konzola výpis --> null 

// 3.1 Hľadanie v poli 
// Ak hľadáme meno, ktoré nieje definované, vypíše null 

function findUserbyName(meno) { 
    let pouzivatelia = ["Anna", "Peter"];

    if (pouzivatelia.includes(meno)) {
        return meno;
    }
 
 return null; // vypíše null ak zadám mená iné ako Anna a Peter
}

console.log(findUserbyName("Anna"));   // voláme funkciu (findUser) + argument ("Anna")
// Konzola výpis --> Anna

console.log(findUserbyName("Peter"));  // voláme funkciu (findUser) + argument ("Peter")
// Konzola výpis --> Peter

console.log(findUserbyName("Jozef"));  // voláme funkciu (findUser) + argument ("Jozef") - neexistuje
// Konzola výpis --> null

// 3.2 Hľadanie čísla 
// Ak hľadáme číslo, ktoré pole neobsahuje, vypíše null

function findNumber(value) {
    let cisla = [1, 2, 3];      // pole obsahuje čísla 1, 2, 3


if (cisla.includes(value)) {    // čísla obsahujú hodnotu - vráti hodnotu
    return value;
}
    return null;                // inak vráti null 

}

console.log(findNumber(2));
// Konzola výpis --> 2 

console.log(findNumber(9));     // funkcia findNumber vráti null - 9 nie je v poli
// Konzola výpis --> null 

// 3.3 Hľadanie textu 

function findWord(word) {
    let words = ["byt", "dom"];

    if (words.includes(word)) {
        return word;
    }

    return null;
}

console.log(findWord("dom"));
// Konzola výpis --> dom

console.log(findWord("pozemok"));  // funkcia findWord vráti null - pozemok nieje v poli
// Konzola výpis --> null

// 3.4 Jednoduché vyhľadanie v objekte 

function findKey(obj, key) {
    if (key in obj) {
        return obj[key];
    }

    return null;
}

console.log(findKey({meno: "Anna"}, "meno"));
// Konzola výpis --> Anna

console.log(findKey({meno: "Anna"}, "vek"));
// Konzola výpis --> null  

// 3.5 Funkcia bez výsledku 

function getUser() {        // funkcia getUser vždy vracia null 
    return null;
}

console.log(getUser());
// Konzola výpis --> null  


// (4. Kontrola existencie) ---
// Jednoduchá kontrola premennej

let hodnota = null;         // premenná je nastavená na null

if (hodnota === null) {     // (operátor ===) prísna rovnosť, (podmienka) - rovnaký typ a rovnaká hodnota 
    console.log("Hodnota je prázdna");
    // Konzola výpis --> Hodnota je prázdna 
}

// 4.1 Kontrola objektu 

let osoba2 = { meno: "Feri", vek: null };

if (osoba2.vek === null) {
    console.log("Vek nie je zadaný");
    // Konzola výpis --> Vek nie je zadaný
}

// 4.2 Kontrola poľa 

let data2 = [1, null, 3];    // ak pole obsahuje null, výsledok bude stále null

if (data2[1] === null) {
    console.log("Druhá položka je prázdna");
    // Konzola výpis --> Druhá položka je prázdna 
}

// 4.3 Kontrola po resetovaní premennej 

let token1 = "abc345";
token1 = null;        // reset na null 

if (token1 === null) {
    console.log("Používateľ je odhlásený");
    // Konzola výpis --> Používateľ je odhlásený 
}

// 4.4 Kontrola návratovej hodnoty funkcie 

function findUser1() {
    return null;        // nenašlo nič
}

if (findUser1() === null) {
    console.log("Používateľ neexistuje");
    // Konzola výpis --> Používateľ neexistuje
}


// 5. Rozdiel medzi null a undefined ---
// Premenná bez hodnoty (undefined) a premenná obsahujúca hodnotu (null)

let a = null;       // null, zámerne prázdna hodnota
let b;              // undefined, nepoužíva sa hodnota 

console.log(a);   
// Konzola výpis --> null (definovaná ako null)

console.log(b);
// Konzola výpis --> undefined (nedefinovaná)

// 5.1 {Objekt} - undefined a null  
// Ako prvá sa vždy vypíše undefined, pretože vlastnosť vek ešte neexistuje

let osoba3 = {meno: "Milan"};

console.log(osoba3.vek);     // vek nie je definovaný 
// Konzola výpis --> undefined 

osoba3.vek = null;           // vek je definovaný null
console.log(osoba3.vek);
// Konzola výpis --> null

// 5.2 Resetovanie hodnoty - null

let token2 = "abc567" 
token2 = null;        // prázdna hodnota 

console.log(token2);  
// Konzola výpis --> null

// 5.3 [Pole] - undefined a null 

let data3 = [1, ,3];     // druhý prvok v poli nieje definovaný 
console.log(data3[1]);   // [1] index - 1 znamená druhý prvok
// Konzola výpis --> undefined 


data3[1] = null;         // nastavená druhý prvok na null
console.log(data3[1]);    // null
// Konzola výpis --> null

// 5.4 funkcia() - undefined a null

function findUser2() {
    return null; 
}

console.log(findUser2());
// Konzola výpis --> null

let result;
console.log(result);
// Konzola výpis --> undefined


// (6. null je falsy) ---
// null je falsy - umožnujú vykonať kód, keď hodnota je prázdna alebo neexistuje
// null, undefined, 0, "", false, NaN - sú false  
// !null = true, pretože null je falsy - blok if sa vykoná

if (!null) {     // operátor negácie (!) - prevrátenie pravdivostnej hodnoty 
    console.log("null sa vyhodnotí ako false");      
    // Konzola výpis --> null sa vyhodnotí ako false
}

// 6.1 if / else - true a false - null

let hodnota1 = null;

if (hodnota1) {
    console.log("true");
    // Konzola výpis (ak by som nastavil napr. let hodnota1 = 1;) --> (true) 
} else {
    console.log("false");
    // Konzola výpis --> false 
}

// 6.2 Kontrola existencie - null 

let data4 = null;

if (data4 === null) {       // (operátor ===) prísna rovnosť, (podmienka) - rovnaký typ a rovnaká hodnota 
    console.log("Hodnota je null");
    // Konzola výpis --> Hodnota je null
}

// 6.3 Negácia - null 

let d = null;        // null je false 
console.log(!d); 
// Konzola výpis --> true 

let e = 1;           // 1 je true 
console.log(!e);
// Konzola výpis --> false

// 6.4 Podmienka s premennou 

let x = null;

if (!x) {           // !x = true, pretože x je null (falsy)
    console.log("x je falsy (null)");
    // Konzola výpis --> x je falsy (null)
}


// (7. null v objektoch - hodnota nie je dostupná)
// Neznámy vek používateľa

const pouzivatel1 = {
    meno: "Dáša",
    vek: null,     // nepridelený vek 
}

console.log(pouzivatel1);
// Konzola výpis --> { meno: "Dáša", vek: null }

console.log(pouzivatel1.meno);
// Konzola výpis --> Dáša

console.log(pouzivatel1.vek);
// Konzola výpis --> null

// 7.1 Prázdny email 

const pouzivatel2 = {
    meno: "Peter", 
    email: null     // nepridelený email
};

console.log(pouzivatel2);
// Konzola výpis --> {meno: 'Peter', email: null}

console.log(pouzivatel2.meno);
// Konzola výpis --> Peter

console.log(pouzivatel2.email);
// Konzola výpis --> null

// 7.2 Nepridelená adresa 

const pouzivatel3 = {
    meno: "Jozef",
    adresa: null     // nepridelená adresa
};

console.log(pouzivatel3);
// Konzola výpis --> {meno: 'Jozef', adresa: null}

console.log(pouzivatel3.meno);
// Konzola výpis --> Jozef

console.log(pouzivatel3.adresa);
// Konzola výpis --> null

// 7.3 Funkcia, ktorá vracia objekt s null hodnotou 

function createUser() {
    return {
    meno: "Marek", 
    mobil: null}  
};

const newUser = createUser();

console.log(newUser);
// Konzola výpis --> {meno: 'Marek', mobil: null}

console.log(newUser.meno);
// Konzola výpis --> Marek 

console.log(newUser.mobil);
// Konzola výpis --> null

// 7.4 Resetovanie hodnoty objektu 

let pouzivatel4 = {meno: "Lukáš", vek: 25};
pouzivatel4.vek = null    // vek nie je známy

console.log(pouzivatel4);
// Konzola výpis --> {meno: 'Lukáš', vek: null}

console.log(pouzivatel4.meno);
// Konzola výpis --> Lukáš

console.log(pouzivatel4.vek);
// Konzola výpis --> null 

