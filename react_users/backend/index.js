const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const User=require('./model/User');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/user',require('./routes/userRoutes'));

mongoose.connect("mongodb://localhost:27017/users_2025")
.then(()=>console.log("Kapcsolódva"))
.catch(err=>console.log(err));


app.listen(8000,()=>console.log("Fut..."));

app.get('/',(req,res)=>{
    res.send("User regisztráció");
})