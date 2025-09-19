//Javascript objektumok

let szemely={
    vezeteknev:"Kósa",
    keresztnev:"Géza",
    szulev:1969,
    kor() {
        return new Date().getFullYear()-this.szulev;
    }

}

console.log(szemely.keresztnev);
console.log(szemely.kor());


class Szemely {
    constructor(vezeteknev,keresztnev,szulev){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.szulev=szulev;
    }
    kor() {
        return new Date().getFullYear()-this.szulev;
    }
}

let zoltan=new Szemely("Novák","Zoltán",2003);
let imre=new Szemely("Havasi","Imre",2010);

