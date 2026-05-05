const express = require('express');
const cors = require('cors');
const app = express();

const preguntas = require('./preguntas.json');
const palbras = require('./palabras.json')

const PORT = process.env.PORT || 3000;

app.use(cors({
    methods: ['GET']
}));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API lista.'
    });
})

app.get('/palabras', (req, res) => {
    res.json(palbras);
});

app.get('/preguntas', (req, res) => {
    res.json(preguntas);
});

app.listen(PORT, () => {
    console.log('Servidor escuchando el puerto ', PORT);
});