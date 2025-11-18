
// -------------------------------------------------
// Príklady použitia typu String v JavaScripte
// Popis: Základy práce zo String hodnotami
// Pozdrav, zistenie dĺžky textu, jednotlivé znaky, veľkosť písmen, spájanie reťazcov, obsah reťazca, vystrihnutie a nahradenie textu
// ---------------------

// (1.) Pozdrav ---
{
    let meno = "Anna",
        pozdrav = "Ahoj";
    console.log(meno, pozdrav);
    // Konzola výpis --> (Anna Ahoj)
}


// (2.) Zistenie dĺžky textu ---
{
let text = "Anna"; 
console.log(text.length);
//Konzola výpis --> (4)
}


// (3.) Prístup k jednotlivým znakom ---
// Indexy: 0(H), 1(e), 2(l), 3(l), 4(o)
{
let slovo = "Hello";
console.log(slovo[0]); 
// Konzola výpis --> "H" - Index 0(H)
console.log(slovo[1]); 
// Konzola výpis --> "e" - Index 1(e)
console.log(slovo[2]); 
// Konzola výpis --> "l" - Index 2(l)
console.log(slovo[3]); 
// Konzola výpis --> "l" - Index 3(l)
console.log(slovo[4]); 
// Konzola výpis --> "o" - Index 4(o)
}


// (4.) Zmena veľkosti písmen ---
{
   let jazyk = "javascript";
console.log(jazyk.toUpperCase());
// Konzola výpis --> JAVASCRIPT
console.log(jazyk.toLowerCase());
// Konzola výpis --> javascript
}


// (5.) Spájanie reťazcov
{
let meno = "Tomáš"; 
let spojenie = "Ahoj," + meno + "!";
console.log(spojenie); 
// Konzola výpis --> Ahoj,Tomáš!
}


// (6.) Kontrola, či reťazec obsahuje určitý text
{
let veta = "Mám rád programovanie";
console.log(veta.includes ("rád"));
// Konzola výpis --> true
console.log(veta.includes ("nuda"));
// Konzola výpis --> false
}


// (7.) Vystrihnutie časti textu
{
let text = "JavaScript"; 
console.log (text.slice(0, 4));
// Konzola výpis --> Java
}


// (8.) Nahradenie textu 
{
let veta = "Mám rád Java.";
let nova = veta.replace ("Java", "JavaScript");
console.log(nova); 
// Konzola výpis --> Mám rád JavaScript.
}


