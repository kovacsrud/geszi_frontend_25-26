let p1=new Promise((resolve,reject)=>{
    resolve(150);
});



let p2=function(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("Az a nem lehet kisebb mint b!");
        }
    })
}

p2(10,5).then(ertek=>console.log(ertek)).catch(err=>console.log(err));
p2(5,10).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

p2(10,5).then(ertek=>p2(ertek,11)).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

function novel(szam){
    return szam+60;
}

p2(10,5).then(ertek=>novel(ertek)).then(ertek=>console.log(ertek)).catch(err=>console.log(err));


async function promiseok(){
    try {
        let adat1=await p1;
        let adat2=await p2(adat1,5);
        console.log(adat2);
    } catch (error) {
        alert(error);
    }
}

promiseok();

//Több promise futtatása egyszerre
const all=Promise.all([p1,p2(20,2)]);

all.then(ertekek=>console.log(ertekek)).catch(err=>console.log(err));

