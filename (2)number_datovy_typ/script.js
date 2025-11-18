// -------------------------------------------------
// Príklady použitia typu number v JavaScripte
// Popis: Základy práce s number hodnotami  
// 1. Celé čísla
// 2. Desatinné čísla
// 3. Exponenciálny zápis
// 4. Základné operácie
// 5. Špeciálne hodnoty
// 6. Kontrola typu
// 7. Number objekt
// 8. Zaokrúhľovanie
// 9. Náhodné čísla
// ---------------------


// (1. Celé čísla) - (Integer) ---
// Pre celé čísla platí, že môžu využívať kladné, záporné a 0

let a = 10; // celé číslo, kladné
let b = -5; // celé číslo, záporné
let c = 0;  // nula, celé číslo
console.log(a, b, c); // vypíše: 10 -5 0
// Konzola výpis --> 10 -5 0


// (2. Desatinné čísla) - (Floats) ---
// Pre desatinné čísla platí že používajú bodku (.) ako oddelovač desatinných miest podľa amerického formátu čísel.

let pi = 3.14; // desatinné číslo, typ number
let cena = 19.99 // desatinné číslo reprezentujúce cenu
console.log(pi, cena);
// Konzola výpis --> 3.14, 19.99


// (3. Exponenciálny zápis) ---
// Skrátený zápis čísla pomocou mocnín desiatky (10^n)

// (3.1) Kladné exponenty
let e1 = 1e1;   // 1 × 10¹ = 10 
let e2 = 2e2;   // 2 × 10² = 200
let e3 = 3e3;   // 3 × 10³ = 3000
let e4 = 4e4;   // 4 × 10⁴ = 40000
console.log(e1, e2, e3, e4);
// Konzola výpis --> 10 200 3000 40000

// (3.2) Kladné exponenty - ako pole 
let positiveExponents = [e1, e2, e3, e4]; 
console.log("Kladné exponenty:", positiveExponents);
// Konzola výpis --> Kladné exponenty: [10, 200, 3000, 40000]

// (3.3) Záporné exponenty 
let eNeg1 = 1e-1;  // 1 × 10⁻¹ = 0.1
let eNeg2 = 2e-2;  // 2 × 10⁻² = 0.02
let eNeg3 = 3e-3;  // 3 × 10⁻³ = 0.003
let eNeg4 = 4e-4;  // 4 × 10⁻⁴ = 0.0004
console.log(eNeg1, eNeg2, eNeg3, eNeg4);
// Konzola výpis --> 0.1 0.02 0.003 0.0004

// (3.4) Záporné exponenty - ako pole 
let negativeExponents = [eNeg1, eNeg2, eNeg3, eNeg4];
console.log("Záporné exponenty:", negativeExponents);
// Konzola výpis --> Záporné exponenty: [0.1, 0.02, 0.003, 0.0004]


// (4. Základné operácie) ---
// Základné operácie využívajú sčítanie, odčítanie, násobenie, delenie, zvyšok po delení (modulo), umocnenie

// Sčítanie 
let sucet = 10 + 5; // 15
// Odčítanie
let odcitanie = 10 - 5; // 5
// Násobenie 
let nasobenie = 10 * 5; // 50
// Delenie
let delenie = 10 / 5; // 2
// Zvyšok po delení (modulo)
let zvysok = 10 % 3;  //  výsledok je 1 (3 × 3 = 9), zostáva zvyšok 1
// Umocnenie
let mocnina = 2 ** 3; // výsledok je 8 (2 na tretiu - 2 * 2 * 2)
console.log(sucet, odcitanie, nasobenie, delenie, zvysok, mocnina);
// Konzola výpis --> 15 5 50 2 1 8


// (5. Špeciálne hodnoty) --- 
// Vznikajú pri neobvyklých alebo neplatných matematických operáciách 
// Patria sem: Infinity (nekonečno), -Infinity (záporné nekonečno) a NaN (Not a Number - neplatná číselná hodnota).

// (5.1) Nekonečno (delenie kladného čísla nulou) - (Infinity)
let positiveInfinity = 1 / 0;
console.log("Kladné nekonečno", positiveInfinity);
// Konzola výpis --> Kladné nekonečno Infinity

// (5.2) Nekonečno (delenie záporného čísla nulou) - (-Infinity)
let negativeInfinity = -1 / 0;
console.log("Záporné nekonečno", negativeInfinity);
// Konzola výpis --> Záporné nekonečno -Infinity

// (5.3) Neplatná číselná hodnota - (NaN)
let invalidOperation = 0 / 0; // Nieje definované delenie
console.log ("Neplatná operácia", invalidOperation);
// Konzola výpis --> Neplatná operácia NaN

let invalidRoot = Math.sqrt(-1); // Odmocnina zo záporného čísla
console.log("Odmocnina záporného čísla", invalidRoot);
// Konzola výpis --> Odmocnina záporného čísla NaN


// (6. Kontrola typu) ---
// Slúži na zistenie typu premennej
// Používa sa hlavne operátor typeof

let celeCislo = 42;
let desatinneCislo = 3.14;
let nekonecno = Infinity;
let neplatnaHodnota = NaN;
console.log(celeCislo, desatinneCislo, nekonecno, neplatnaHodnota);
// Konzola výpis --> 42 3.14 Infinity NaN

console.log(typeof celeCislo);
// Konzola výpis --> (number)
console.log(typeof desatinneCislo);
// Konzola výpis --> (number)
console.log(typeof nekonecno);
// Konzola výpis --> (number)
console.log(neplatnaHodnota);
// Konzola výpis --> (NaN)

// (6.1) Number.isInteger() - funkcia, ktorá skontroluje, či je číslo celé
console.log(Number.isInteger(celeCislo));
// Konzola výpis --> true
console.log(Number.isInteger(desatinneCislo));
// Konzola výpis --> false

// (6.2) Number.isFinite() - funkcia, ktorá skontroluje, či je hodnota konečné číslo
// True - ak je reálne číslo (42, 3.14)
// False - ak nieje reálne číslo (Infinity, - Infinity, NaN)

console.log(Number.isFinite(celeCislo));
// Konzola výpis --> true
console.log(Number.isFinite(desatinneCislo));
// Konzola výpis --> true
console.log(Number.isFinite(nekonecno));
// Konzola výpis --> false
console.log(Number.isFinite(neplatnaHodnota));
// Konzola výpis --> false


// (7. Number objekt {} a konverzia) ---
// Number() dokáže previesť textový reťazec na číslo - "42" - 42 alebo "3.14" - 3.14
// Ak prevod nieje možný, "abc" nezmení na číslo - vráti NaN (Not a Number)

const numberExamples = {
  celeCislo: Number("42"),        // 42
  desatinneCislo: Number("3.14"), // 3.14
  zaporneCislo: Number("-7"),     // -7
  neplatnaHodnota: Number("abc"), // NaN
  nulaZPrazdneho: Number(""),     // 0
  nulaZMedzery: Number(" "),      // 0
  nekonecno: Infinity,             // Infinity
  zaporneNekonecno: -Infinity,     // -Infinity
  odmocninaZaporneho: Math.sqrt(-1) // NaN
};

console.log(numberExamples);
// Konzola výpis --> celeCislo: 42, desatinneCislo: 3.14, zaporneCislo: -7, neplatnaHodnota: NaN, nulaZPrazdneho: 0,


// (8. Zaokrúhľovanie) ---
// Zaokrúhľovanie je možné na najbližšie celé čísla, nadol, nahor a n desatinných miest

let cislo1 = 3.14;
let cislo2 = 7.8;
let cislo3 = -2.6;

// 8.1 Math.round()  - zaokrúhli na najbližšie celé číslo
let zaokruhlene1 = Math.round(cislo1); // 3
let zaokruhlene2 = Math.round(cislo2); // 8
let zaokruhlene3 = Math.round(cislo3); // -3
console.log(zaokruhlene1, zaokruhlene2, zaokruhlene3);
// Konzola výpis --> 3 8 -3

// 8.2 Math.floor()  - zaokrúhli "nadol" na najbližšie celé číslo
let podlaha1 = Math.floor(cislo1); // 3
let podlaha2 = Math.floor(cislo2); // 7
let podlaha3 = Math.floor(cislo3); // -3
console.log(podlaha1, podlaha2, podlaha3);
// Konzola výpis --> 3 7 -3

// 8.3 Math.ceil() - zaokrúhli "nahor" na najbližšie celé číslo
let strop1 = Math.ceil(cislo1); // 4
let strop2 = Math.ceil(cislo2); // 8
let strop3 = Math.ceil(cislo3); // -2
console.log(strop1, strop2, strop3);
// Konzola výpis --> 4 8 -2

// 8.4 toFixed
// Number(cislo1.toFixed(1)) - zaokrúhli číslo na n desatinných miest, výsledok je **number**
let fixed1 = Number(cislo1.toFixed(1)); // "3.1"
let fixed2 = Number(cislo2.toFixed(2)); // "7.8"
let fixed3 = Number(cislo3.toFixed(3)); // "-2.6"
console.log(fixed1, fixed2, fixed3);
// Konzola výpis --> 3.1 7.8 -2.6 - number (lepšia pre matematické operácie)

// cislo1.toFixed(n) - zaokrúhli číslo na n desatinných miest, výsledok je **string**
let fixed4 = cislo1.toFixed(1); // "3.1"
let fixed5 = cislo2.toFixed(2); // "7.8"
let fixed6 = cislo3.toFixed(3); // "-2.6"
console.log(fixed4, fixed5, fixed6);
// Konzola výpis --> 3.1 7.80 -2.600 - string (nevhodný na výpočty, len na formátovanie)


// (9. Náhodné číslo) ---
// Vracia náhodne generované čísla 0 <= Math.random() < 1
// 0 je možná / 1 nikdy nevznikne

let nahodneCislo = Math.random();
console.log(nahodneCislo); 
// Konzola výpis --> vždy vygeneruje náhodné číslo 

