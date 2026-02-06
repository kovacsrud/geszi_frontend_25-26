"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//A typescript statikus típusosság használatát teszi lehetővé
let szam = 237;
//type inference=> a jobb oldali érték alapján meghatározza a típust
let szam2 = 789;
szam = 556;
let szoveg = "Valami";
let logikai = false;
logikai = true;
//Union típus =>több típus használata is lehetséges egy ilyen változóval
let uni;
uni = 129;
uni = "szöveg";
//Literál típus
let elfogadott;
elfogadott = 10;
let szazasok;
let masikSzazasok;
szazasok = 200;
//Függvények
function osszead(a, b) {
    return a + b;
}
console.log(osszead(111, 56));
//listák,  tömbök
let szamLista = [];
szamLista = [12, 45, 89, 112, 441];
let vegyes = ["q", 34, 67, "gh"];
let szemely = {
    vezeteknev: "Kiss",
    keresztnev: "Egon",
    kor: 34
};
let dolgozo = ["Kalmár Zénó", 35];
const [nev, eletkor] = dolgozo;
//# sourceMappingURL=script.js.map