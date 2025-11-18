// -------------------------------------------------
// Príklady použitia typu Object v JavaScripte
// Popis: Základy práce s Objektami
// 1. Jednoduchý objekt
// 2. Pridávanie a upravovanie vlastností 
// 3. Metódy v objekte
// 4. Vnorené objekty 
// 5. Iterácia cez vlastnosti
// 6. Objekt s dynamickými kľúčmi
// ---------------------



// (1. Jednoduchý objekt) ---
// Vytvorenie jednoduchého objektu s hodnotami

const osoba = {
meno: "Anna",    // meno (kľúč), Anna (hodnota)
vek: 25          // vek (kľúč), 25 (hodnota)
};

console.log(osoba);  // objekt
// Konzola výpis --> {meno: 'Anna', vek: 25}

console.log(osoba.meno, osoba.vek);    // objekt.kľúč
// Konzola výpis --> Anna 25



// (2. Pridávanie a upravovanie vlastností) ---
// Pridanie priezviska a zmena veku 

osoba.priezvisko = "Nováková";  // pridanie novej vlastnosti
osoba.vek = 26;  // zmena existujúcej vlastnosti

console.log(osoba);   // objekt
// Konzola výpis --> {meno: 'Anna', vek: 26, priezvisko: 'Nováková'}

console.log(osoba.meno, osoba.priezvisko, osoba.vek);
// Konzola výpis --> Anna Nováková 26    // objekt.kľúč



// (3. Metódy v objekte) ---
// Metóda info: function() v objekte

const auto = {
    znacka: "Toyota",
    model: "Auris",
    info: function() {      // function () {...} - samotná funkcia
      return `${this.znacka} ${this.model}`;  // vráti text, ktorý spája hodnoty znacka a model
    }
};

console.log(auto.info());
// Konzola výpis --> Toyota Auris



// (4. Vnorené objekty) ---
// Obsahuje objekt v objekte 

const clovek = {
    meno: "Peter",
    adresa: {      // adresa je vnorený objekt v rámci objektu clovek
        mesto: "Bratislava",
        ulica: "Hlavná 1"
    }
};

console.log(clovek);
// Konzola výpis --> {meno: 'Peter', adresa: {…}}

console.log(clovek.meno);
// Konzola výpis --> Peter

console.log(clovek.meno, clovek.adresa)
// Konzola výpis --> Peter {mesto: 'Bratislava', ulica: 'Hlavná 1'}



// (5. Iterácia cez vlastnosti) ---
// Prechádza všetky vlastnosti objektu (názov a hodnota)

const osoba1 = {
meno: "Milan",    // meno (kľúč), Milan (hodnota)
vek: 21          // vek (kľúč), 21 (hodnota)
};

// for...in prejde všetky vlastnosti objektu
for (let kľúč in osoba1) {     
    console.log(kľúč, osoba1[kľúč]);
}
// Konzola výpis --> meno Milan vek 21
// keď kľúč = "meno", potom osoba1[kľúč] = osoba1["meno"] = "Milan"
// keď kľúč = "vek", potom osoba1[kľúč] = osoba1["vek"] = 21



// (6. Objekt s dynamickými kľúčmi) ---
// Pridá novú vlastnosť do objektu pomocou premennej ako kľúča

const kľúč = "vek";    // premenná
const info = {
    meno: "Mária",
    [kľúč]: 30        // vytvorí vlastnosť "vek": 30
};

console.log(info);
// Konzola výpis --> {meno: 'Mária', vek: 30}

console.log(info.meno);
// Konzola výpis --> Mária

console.log(info.vek);
// Konzola výpis --> 30

console.log(info.vek, info.meno);
// Konzola výpis --> 30 'Mária'

console.log(kľúč.vek);
// Konzola výpis --> undefined 
// (kľúč je len textový reťazec "vek", nie objekt)

console.log(kľúč.meno);
// Konzola výpis --> undefined 
// (kľúč je len textový reťazec "meno", nie objekt)


                     


