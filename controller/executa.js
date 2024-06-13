const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { lado1,lado2, lado3 } = req.body;
    const volumeCubo = Calculadora.volumeCubo(
        parseFloat(lado1), parseFloat(lado2), parseFloat(lado3));
    res.send(`O volume é: ${volumeCubo}`);
});

module.exports = resultado;