let root=document.getElementById('root');

let cimsor=document.createElement('h1');
cimsor.textContent="Elemek létrehozása";

let cimsor2=document.createElement('h2');
cimsor2.textContent="Névsor";

root.appendChild(cimsor);
root.appendChild(cimsor2);

let lista=document.createElement('ul');

for(let i=0;i<nevek.length;i++){
    let listaElem=document.createElement('li');
    listaElem.textContent=nevek[i];
    lista.appendChild(listaElem);
}

root.appendChild(lista);