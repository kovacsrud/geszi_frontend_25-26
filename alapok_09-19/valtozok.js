document.write("Javascript");

//A javascript dinamikusan kezeli a változókat. Nem kell külön megadni a változó típusát.
//TypeScript : statikus típososságot ad a nyelvhez.

//Csak abban a kódblokkban létezik, ahol létrehozták
let a=17;

//A teljes szkriptben elérhető
var globalis=567;

//Ez nem később már nem változtatható
const konstans="bármi";

document.writeln(a);

a="Valami";

document.writeln(a);

let b=true;

a=21.6;

if(true){
    let lokalis=559;
    console.log(lokalis);
}

if(true){
    let lokalis="Lokális változó";
    console.log(lokalis);
}

console.log(lokalis);