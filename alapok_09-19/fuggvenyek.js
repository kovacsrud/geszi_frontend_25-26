
function osszead(a,b){
    return a+b;
}

console.log(osszead(12,67));

//overloading "túlterhelés" : Készíthetek több függvényt ugyanazzal a névvel, de eltérő paraméterlistával

function osszead(a,b=5,c=10){
    return a+b+c;
}

console.log(osszead(12,10));

//arguments
function osszead(){
    let osszeg=0;
    for(let i=0;i<arguments.length;i++){
        osszeg+=arguments[i];
    }

    return osszeg;
}

console.log(osszead(1,3,7,8));
console.log(osszead(1,3,7,8,56,21,99,54,112));
console.log(osszead(1,3,7,8,56,21,99,54,112,889,1123,6,7,89));


//arrow function, nincs argument

const kivonas=(a,b)=>a-b;

console.log(kivonas(10,5));