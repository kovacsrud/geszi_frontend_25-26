let szamok1=[1,2,3,4,5,6];
let szamok2=[7,8,9,10,11,12];

//két lista egyesítése
let osszesSzam=[...szamok1,...szamok2];

console.log(osszesSzam);

let dolgozo={
    nev:"Lovász Géza",
    kor:49
}

let munkahely={
    munkahely:{
        nev:"Lovász Kft",
        cim:"Kisrét u. 19"
    }
}

let dolgozoMunkahely={...dolgozo,...munkahely};
console.log(dolgozoMunkahely);

//Rest arrow function-nél
const osszeg=(...szamok)=>{
    let osszeg=0;
    for(let szam of szamok){
        osszeg+=szam;
    }
    return osszeg;
}

console.log(osszeg(1,2,3,4,5))
console.log(osszeg(1,2,3,4,5,6,7,8))