const express=require('express');
const sqlite=require('sqlite3');
const cors=require('cors');
const db=new sqlite.Database('./trolibusz.db');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log('Running')});

app.get('/',(req,res)=>{
    res.json({dbname:"Metró -és trolibusz hálózat"});
});

app.get('/megallok',(req,res)=>{
    db.all('SELECT * FROM megallok',(err,rows)=>{
        if(err){
            res.json(err);
        }else {
            res.json(rows);
        }
    });
});

app.get('/jaratok',(req,res)=>{
    db.all('SELECT * FROM jaratok',(err,rows)=>{
        if(err){
            res.json(err);
        }else {
            res.json(rows);
        }
    });
});


app.get('/jarat/:jarat/irany/:irany',(req,res)=>{
    const jarat=req.params.jarat;
    const irany=req.params.irany;
    db.all('select jaratok.jaratSzam,jaratok.jaratTipus,halozat.megallo,megallok.nev,halozat.irany from jaratok,halozat,megallok where jaratok.id=halozat.jarat and halozat.megallo=megallok.id and halozat.jarat=? and halozat.irany=? collate nocase',[jarat,irany],(err,rows)=>{
        if(err){
            res.json(err);
        } else {
            if(rows.length>0){
            res.json(rows);
            } else {
                res.json({message:"Nincs ilyen adat!"});
            }
        }
    });
});

app.get('/megallo/:megalloid',(req,res)=>{
    const megalloId=req.params.megalloid;
    
    db.all(`select 
    megallok.nev,
    jaratok.jaratSzam,
    jaratok.jaratTipus,
    halozat.irany,
    halozat.sorszam
    from megallok,jaratok,halozat
    where megallok.id=halozat.megallo
     and halozat.jarat=jaratok.id
     and megallok.id=? `,[megalloId],(err,rows)=>{
        if(err){
            res.json(err.message);
        } else {
            if(rows.length>0){
            res.json(rows);
            } else {
                res.json({message:"Nincs ilyen megálló!"});
            }
        }
    });
});


app.post('/jarat',(req,res)=>{
    const{id,jaratSzam,jaratTipus,elsoAjtos}=req.body;
    
    db.run('insert into jaratok values(?,?,?,?)',[id,jaratSzam,jaratTipus,elsoAjtos],(err)=>{
        if(err){
            res.json({message:err.message});
        } else {
            res.status(201).json({message:"Új megálló rögzítve!"});
        }
    });
})
