const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const User=require('../model/User');
const jwt=require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},'asd123',{expiresIn:"1h"});
}

const regisztracio=async (req,res)=>{
     const{username,password,email,age}=req.body;
        //1. Van-e ilyen username?
        const user=await User.findOne({username:username});
        if(user){
            return res.status(400).json({message:"A felhasználói név foglalt!"});
        }
        //2. Email cím ellenőrzése
        const e_mail=await User.findOne({email:email});
        if(e_mail){
            return res.status(400).json({message:"Ezzel az email címmel már regisztráltak!"});
        }
        //3. Adatok meglétének ellenőrzése
        if(!username || !password || !email){
            return res.status(400).json({message:"Hiányos adatok!"});
        }
        //4. jelszó kezelése, jelszó hash készítése
        const hashedPassword=await bcrypt.hash(password,10);
        const ujUser=await User.create({
            username:username,
            password:hashedPassword,
            email:email,
            age:age
        });
    
        const token=generateToken(ujUser.id);
        return res.json(token);

}

const belepes=async (req,res)=>{
     const {username,password}=req.body;
        const user=await User.findOne({username:username});
        if(!user){
            return res.status(400).json({message:"Nincs ilyen felhasználó!"});
        }
        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).json({message:"A jelszó nem megfelelő!"});
        }
    
        const token=generateToken(user.id);
        return res.json(token);

}

const adatmodositas=async (req,res)=>{
    const{_id,email,password,age}=req.body;
    
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({message:"Hibás Id!"});
        }
    
        const user=await User.findById(_id);
        if(!user){
            return res.status(400).json({message:"Nincs ilyen felhasználó!"});
        }
        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).json({message:"A jelszó nem megfelelő!"});
        }
    
        await User.findByIdAndUpdate(_id,{age});
    
        return res.status(200).json(await User.findById(_id));

}

const vedett=async (req,res)=>{
    const username=req.user.username;
    res.send("Bejelentkezve:"+username);
}

module.exports={
    regisztracio,
    belepes,
    adatmodositas,
    vedett
}