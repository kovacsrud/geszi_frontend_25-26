//Javascript gomb
//procedurális

const gomb=document.createElement('button');
gomb.textContent="Js gomb";
gomb.onclick=function(){
    alert("Js gomb");
}

const jsgomb=document.getElementById('js-gomb');
jsgomb.appendChild(gomb);

//React gomb
//A react deklaratív
const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }
},"React gomb");

const kontener=React.createElement('div',{
    style:{
        backgroundColor:"green",
        width:"100px",
        height:"200px"
    }
},rgomb,rgomb,rgomb,rgomb,rgomb);

ReactDOM.render(kontener,document.getElementById('react-gomb'));