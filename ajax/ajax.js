let root=document.getElementById('root');

let valasz="";

let keres=new XMLHttpRequest();

keres.open('GET','https://jsonplaceholder.typicode.com/posts',true);

keres.onload=function(){
    valasz=JSON.parse(this.response);
    console.log(valasz);
    valasz.forEach(post=>{
        let p=document.createElement('p');
        p.textContent=post.title;
        root.appendChild(p);
    })
}

//keres.send();

console.log("Válasz:"+valasz);

//Fetch -> adatok letöltése Rest API kiszolgálóról
fetch('http://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(posztok=>{
    posztok.forEach(post=>{
        let p=document.createElement('p');
        p.textContent=post.title;
        root.appendChild(p);
    })
})
.catch(err=>alert(err));

//console.log(posztlekeres);

//async await 
async function letoltes(){
    try {
        let keres=await fetch('https://jsonplaceholder.typicode.com/posts');
        let valasz=await keres.json();

        valasz.forEach(post=>{
             let p=document.createElement('p');
             p.textContent=post.title;
             root.appendChild(p);
        })

    } catch (error) {
        alert(error);
    }

}

letoltes();