
import http from 'http'
import { fileURLToPath } from 'url';
import path from 'path';
import express from "express";
import planets from './data.json' with { type: 'json' };


const { log } = console


const app = express();


const PORT = 5102;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

const planetsName = ["MERCURY","VENUS","EARTH","MARS","JUPITER","SATURN","URANUS","NEPTUNE"]

app.get('/:planets',(req, res) => {
    const index = planetsName.indexOf(req.params.planets.toUpperCase())
    const planet = planets[index] || planets[0];
    res.render('planets', { 
        title: planet.planetName, 
        details: planet
    })
})



app.use(express.static(path.join(__dirname, 'public')));    


app.listen(PORT, (err) => {
    if (err) {
        log("Something went run", err)
    }
    else
        log(`Server is running on http://localhost:${PORT}`);
});

