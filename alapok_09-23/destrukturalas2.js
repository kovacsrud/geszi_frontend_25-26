let szamok=[1,2,3,4,5,6];


let szemely={
    nev:"Kiss Elek",
    magassag:178,
    suly:78
}

//Destruktúrálás - elemek kiemelése

const [elso,masodik,...rest]=szamok;

const[,,harmadik,,otodik]=szamok;

console.log(elso,masodik,harmadik);
console.log(...rest);

const {nev,magassag,suly}=szemely;

console.log(nev,magassag,suly);

const {nev:n,magassag:m,suly:s}=szemely;

//spread operátor
console.log({...szemely});


