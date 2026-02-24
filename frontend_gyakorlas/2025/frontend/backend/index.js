const express=require("express");
const cors=require("cors");
const app=express();
const sqlite3=require("sqlite3");
const db=new sqlite3.Database("./beiskolazas.db");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.listen(8000,()=>console.log("A backend fut"));

app.get('/',(req,res)=>{
    res.send("Beiskolázás backend");
})

app.get('/tanulok',(req,res)=>{
    db.all("select * from diakok",(err,rows)=>{
        if(err) return res.json({message:err});
        return res.json(rows);
    })
});

app.get('/jelentkezesek',(req,res)=>{
    db.all(`select
             diakok.nev, jelentkezesek.tag as tagozat,jelentkezesek.hely from diakok,jelentkezesek
             where diakok.oktazon=jelentkezesek.diak`
         ,(err,rows)=>{
            if(err) return res.json({message:err.stack});
            return res.json(rows);

    })
});

app.post('/tanulo',(req,res)=>{
    const {oktazon,nev,hozott,kpmagy,kpmat}=req.body;
    db.run('insert into diakok (oktazon,nev,hozott,kpmagy,kpmat) values(?,?,?,?,?)'
        ,[oktazon,nev,hozott,kpmagy,kpmat]
        ,(err)=>{
         if(err) return res.json({message:err})   
         return res.json({message:"Új tanuló adatai rögzítve!"})   

    },
)
});

app.delete('/tanulo/id/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        return res.json({message:"Id nem található!"});
    }
    
   

    db.run('delete from diakok where oktazon=?',[id],function(err){
        if(err) return res.json({message:err});
       
        if(this.changes==1){
            return res.json({message:id+" id törölve!"});
        } else {
            return res.json({message:id+" nem található!"});
        }
    })
})
