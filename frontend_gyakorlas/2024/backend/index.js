const express=require('express');
const cors=require('cors');
const sqlite3=require('sqlite3');

const app=express();
const db=new sqlite3.Database('./webshop.db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Webshop");
})

app.get('/vevok',(req,res)=>{
    db.all("select * from vevok"
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        }
        res.status(200).json(rows);

    });
});

app.get('/termekek',(req,res)=>{
    db.all("select * from termekek"
    ,(error,rows)=>{
        if(error){
            res.status(400).json(error);
        }
        res.status(200).json(rows);

    });

});

app.post('/vevok',(req,res)=>{
    const {nev,iranyitoszam,telepules,utcahazszam}=req.body;
    db.run("insert into vevok (nev,iranyitoszam,telepules,utcahazszam) values(?,?,?,?)"
    ,[nev,iranyitoszam,telepules,utcahazszam]
    ,function (error){
        if(error){
            res.status(400).json({message:error.message});
        }
            
        res.status(201).json({message:"Beszúrás rendben "+this.lastID});
        

    });
});

app.post('/termekek',(req,res)=>{
    const {megnevezes,ar}=req.body;
    db.run("insert into termekek (megnevezes,ar) values(?,?)"
    ,[megnevezes,ar]
    ,function (error){
        if(error){
            res.status(400).json({message:error.message});
        }
        
        res.status(201).json({message:"Beszúrás rendben "+this.lastID});
        

    });

})

app.delete('/termekek/:id',(req,res)=>{
    const id=req.params.id;
    db.run("delete from termekek where id=?"
    ,[id]
    ,function (error){
        
        if(error){
            res.status(404).json({message:error.message});
        }  
        console.log(this.changes);
        if(this.changes==1){
            res.status(200).json({message:"Törölve!"});
        } else {
            res.status(200).json({message:"Nincs ilyen Id"});
        }

    });

});

app.delete('/vevok/:id',(req,res)=>{
    const id=req.params.id;
    db.run("delete from vevok where id=?"
    ,[id]
    ,function (error){
        
        if(error){
            res.status(404).json({message:error.message});
        }  
        console.log(this.changes);
        if(this.changes==1){
            res.status(200).json({message:"Törölve!"});
        } else {
            res.status(200).json({message:"Nincs ilyen Id"});
        }

    });

});

app.get('/vevoszamlai/:vevoid',(req,res)=>{
    const vevoid=req.params.vevoid;

    db.all("select szamlaszam,kelt,teljesites,vevoid,v.nev from szamlafej,vevok as v where vevoid=?"
    ,[vevoid]
    ,(error,rows)=>{
        if(error){
            res.status(400).json({message:error.message});
        }
        if(rows.length>0){
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"A vevőhöz nem tartoznak számlák"});     
        }
                                                    
        
    });

});

app.get('/szamla/',(req,res)=>{
    const szamlaszam=req.query.szamlaszam;
    db.all(`select sf.szamlaszam,sf.kelt,sf.teljesites,vevok.nev as "vevo_neve" from szamlafej as sf,vevok where sf.vevoid=vevok.id and sf.szamlaszam=?`,
    [szamlaszam]
    
    ,(error,rows)=>{
        if(error){
            res.status(400).json({message:error.message});
        }
        if(rows.length>0){
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"Nincs ilyen!"});     
        }
                                                   
        
    });


});

app.get('/vevoszamlak_old/',(req,res)=>{
    const vevoid=req.query.vevoid;
    db.all(`select st.szamlafejid,st.mennyiseg,st.mennyisegiegyseg,sf.szamlaszam,v.nev,t.megnevezes from szamlatetel as st, szamlafej as sf,vevok as v ,termekek as t where st.szamlafejid=sf.id and st.termekid=t.id and sf.vevoid=v.id and v.id=?`
    ,[vevoid]
    ,(error,rows)=>{
        if(error){
            res.status(400).json({message:error.message});
        }
        if(rows.length>0){
            
            res.status(200).json(rows);     
        } else {
            res.status(200).json({message:"Nincs ilyen!"});     
        }
                                                   
        
    });

    

});

app.get('/vevoszamlak/',(req,res)=>{
    const vevoid=req.query.vevoid;


    db.serialize(()=>{
        db.all("select nev,iranyitoszam,telepules,utcahazszam from vevok where id=?",[vevoid],(err,rows1)=>{
            if(err){
                res.status(500).json({message:"Adatbázis hiba!"});
                return;
            }

            db.all(`select st.szamlafejid,st.mennyiseg,st.mennyisegiegyseg,sf.szamlaszam,t.megnevezes from szamlatetel as st, szamlafej as sf,vevok as v ,termekek as t where st.szamlafejid=sf.id and st.termekid=t.id and sf.vevoid=v.id and v.id=?`
            ,[vevoid]
                ,(error,rows2)=>{
            if(error){
                res.status(400).json({message:error.message});
            return;
            }

            if(rows1.length>0){
            
                res.status(200).json(Object.assign({"vevo":rows1[0]},{"vevo_szamlai":rows2}));     
                //res.status(200).json({vevo:rows1[0],vevoszamlak:rows2});     
            } else {
                res.status(200).json({message:"Nincs ilyen felhasználó!"});     
            }

            });


           
        });

        
            
                                                   
        
        

    });
    
    
    

    

    

});
