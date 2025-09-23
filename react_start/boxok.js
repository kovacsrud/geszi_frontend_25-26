

function App(){

    return(
        React.createElement('div',{
            style:{
                backgroundColor:"black"
            }
        },
        React.createElement(Box,{hatterszin:"green",szoveg:"Box1"}),
        React.createElement(Box,{hatterszin:"red",szoveg:"Box2"}),
        React.createElement(Box,{hatterszin:"yellow",szoveg:"Box3"})
    )
    )

}

function Box({hatterszin,szoveg}){
    return(
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatterszin
            }
        },szoveg)
    )
}

ReactDOM.render(React.createElement(App),document.getElementById('boxok'))