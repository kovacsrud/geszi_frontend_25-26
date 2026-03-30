const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());



let hajok = [
    { id: 1, nev: "Szent Miklós", tipus: "M", szemelyzetSzama: 4 },
    { id: 2, nev: "Kékszalag Bajnok", tipus: "V", szemelyzetSzama: 0 },
    { id: 3, nev: "Balatonfüred", tipus: "M", szemelyzetSzama: 2 },
    { id: 4, nev: "Akali", tipus: "M", szemelyzetSzama: 4 },
    { id: 5, nev: "Siófok", tipus: "M", szemelyzetSzama: 3 }

];
 
// GET végpont
app.get('/hajok', (req, res) => {
    res.status(200).json(hajok);
});

// POST végpont
app.post('/hajok', (req, res) => {
    
    console.log(req.body);
    const ujHajo = req.body;
    
    hajok.push(ujHajo);
    res.status(201).json({ message: "Sikeres mentés!", hivo: ujHajo });
});

app.listen(PORT, () => {
    console.log(`Backend fut: http://localhost:${PORT}`);
});