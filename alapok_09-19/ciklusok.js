//For, While, Do..While

//lista vagy tömb? 
let nevek=["Elek","Ubul","Zénó","Ella","Lajos"];

for(let i=0;i<nevek.length;i++){
    console.log(nevek[i]);
}

for(let i in nevek){
    console.log(nevek[i]);
}

for(let i of nevek){
    console.log(i);
}

let sorszam=0;
console.log("----------------------");
while(sorszam<nevek.length){
    console.log(nevek[sorszam]);
    sorszam++;
}

sorszam=0;
do {
    console.log(nevek[sorszam]);
    sorszam++;
} while(sorszam<nevek.length);