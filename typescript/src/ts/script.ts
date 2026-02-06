//A typescript statikus típusosság használatát teszi lehetővé
let szam:number=237;

//type inference=> a jobb oldali érték alapján meghatározza a típust

let szam2=789;

szam=556;

let szoveg="Valami";

let logikai=false;

logikai=true;

//Union típus =>több típus használata is lehetséges egy ilyen változóval
let uni:string|number;
uni=129;
uni="szöveg";

//Literál típus

let elfogadott:10|20|30;

elfogadott=10;

//Típus definíció
type ElfogadottTipus=100|200|300|400;

let szazasok:ElfogadottTipus;
let masikSzazasok:ElfogadottTipus;

szazasok=200;

//Függvények

function osszead(a:number,b:number){
    return a+b;
}

console.log(osszead(111,56));

//listák,  tömbök
let szamLista:Array<number>=[];
szamLista=[12,45,89,112,441];

type Vegyes=(string|number)[];

let vegyes:Vegyes=["q",34,67,"gh"];

//Összetett típus
type Szemely={
    vezeteknev:string,
    keresztnev:string,
    kor:number,
    kepek?:Array<Kep>
}

interface Kep {
    fajlnev:string,
    szelesseg:number,
    magassag:number
}

let szemely:Szemely={
    vezeteknev:"Kiss",
    keresztnev:"Egon",
    kor:34
}

//Javascriptben undefined lenne, typescriptbe hibát okoz
//console.log(szemely.telefon)

//tuple

type Dolgozo=[nev:string,eletkor:number];

let dolgozo:Dolgozo=["Kalmár Zénó",35];

const[nev,eletkor]=dolgozo;