const express = require('express');
const cors = require('cors');
const app = express();
const preguntas = require('./preguntas.json');

const PORT = process.env.PORT || 3000;

app.use(cors({
    methods: ['GET']
}));

const preguntas = [
    {
        id: 1,
        pregunta: '¿Cuál es la capital de Francia?',
        opciones: ['Madrid', 'París', 'Roma', 'Berlín'],
        correcta: 'París'
    },
  // más preguntas...
];

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API lista.'
    });
})

app.get('/preguntas', (req, res) => {
    res.json(preguntas);
});

app.listen(PORT, () => {
    console.log('Servidor escuchando el puerto ', PORT);
});