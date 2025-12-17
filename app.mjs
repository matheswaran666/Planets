
import http from 'http'
import { fileURLToPath } from 'url';
import path from 'path';
import express from "express";
import planets from './data.json' with { type: 'json' };


const { log } = console


const app = express();


const PORT = 5101;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.get('/', (req, res) => {
    res.render('planets', { 
        title: planets[2].planetName, 
        details: planets[2]
    });
});

app.get('/mercury', (req, res) => {
    res.render('planets', { 
        title: planets[0].planetName, 
        details: planets[0]
    });
});

app.get('/venus', (req, res) => {
    res.render('planets', { 
        title: planets[1].planetName, 
        details: planets[1]
    });
});
app.get('/earth', (req, res) => {
    res.render('planets', { 
        title: planets[2].planetName, 
        details: planets[2]
    });
});

app.get('/mars', (req, res) => {
    res.render('planets', { 
        title: planets[3].planetName, 
        details: planets[3]
    });
});

app.get('/jupiter', (req, res) => {
    res.render('planets', { 
        title: planets[4].planetName, 
        details: planets[4]
    });
});

app.get('/saturn', (req, res) => {
    res.render('planets', { 
        title: planets[5].planetName, 
        details: planets[5]
    });
});

app.get('/uranus', (req, res) => {
    res.render('planets', { 
        title: planets[6].planetName, 
        details: planets[6]
    });
});


app.get('/neptune', (req, res) => {
    res.render('planets', { 
        title: planets[7].planetName, 
        details: planets[7]
    });
});


app.use(express.static(path.join(__dirname, 'public')));    


app.listen(PORT, (err) => {
    if (err) {
        log("Something went run", err)
    }
    else
        log(`Server is running on http://localhost:${PORT}`);
});

