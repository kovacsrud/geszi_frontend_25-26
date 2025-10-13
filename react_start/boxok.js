

function App(){

    return(
        React.createElement('div',{
            style:{
                backgroundColor:"black"
            }
        },
        React.createElement(Box,{hatterszin:"green",szoveg:"Box1 "}),
        React.createElement(Box,{hatterszin:"red",szoveg:"Box2 "}),
        React.createElement(Box,{hatterszin:"yellow",szoveg:"Box3 "})
    )
    )

}

function Box({hatterszin,szoveg}){
    //Kontroller rész
    const[szamlalo,setSzamlalo]=React.useState(0);
    return(
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatterszin,
                
            },
            onClick:()=>setSzamlalo(prev=>prev+1)
        },szoveg,szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
    )
}

function Reset({setSzamlalo}){
    return (
        React.createElement('button',{
            onClick:(e)=>{setSzamlalo(0);e.stopPropagation()}
        },"Reset")
    )
}

ReactDOM.render(React.createElement(App),document.getElementById('boxok'))