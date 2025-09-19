let vezeteknevek=["Kiss","Kovács","Novák","Horváth","Kósa","Katona","Zsiga","Nagy","Jónás"];
let keresztnevek=["Edit","Ubul","Nándor","Pál","Zsófia","Janka","Dániel","Olga"];

//Készítsük egy random névsort, generáljunk 100 nevet és jelenítsük meg a weboldalon!
let ujnevek=[];

//Készítünk egy osztályt
class Nev {
    constructor(vezeteknev,keresztnev){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
    }
}


//véletlenszám generálás

console.log(Math.floor(Math.random()*(100-10))+10);

function veletlenSzam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

for(let i=0;i<50;i++){
    let vnev=vezeteknevek[veletlenSzam(0,vezeteknevek.length)];
    let knev=keresztnevek[veletlenSzam(0,keresztnevek.length)];
    let nev=new Nev(vnev,knev);
    ujnevek.push(nev);
}

console.log(ujnevek);

let szlista=document.createElement('ol');

for(let nev of ujnevek){
    let listaElem=document.createElement('li');
    listaElem.textContent=nev.vezeteknev+" "+nev.keresztnev;
    szlista.appendChild(listaElem);
}

for(let i in ujnevek){
    let listaElem=document.createElement('li');
    listaElem.textContent=ujnevek[i].vezeteknev+" "+ujnevek[i].keresztnev;
    szlista.appendChild(listaElem);
}


root.appendChild(szlista);