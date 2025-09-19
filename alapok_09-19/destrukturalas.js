
let valaki={
    nev:"Laki Lajos",
    magassag:180,
    suly:90
}

let szamok=[1,2,3,4,5,6,7];

//A destruktúrálás során közvetlenül változókba nyerjük ki az objektum adatait.

console.log(valaki.nev)

//Destruktúrálás objektumból
const {nev,magassag,suly}=valaki;

console.log(nev,magassag,suly);

const {nev:n,magassag:m,suly:s}=valaki;

console.log(n,m,s);

//Destruktúrálás listából
const [elso,masodik,...rest]=szamok;
console.log(elso,masodik);
console.log(...rest);