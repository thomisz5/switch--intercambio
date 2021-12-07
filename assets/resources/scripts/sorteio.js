'use strict';

const paises = [
    'Russia',
    'Japão',
    'França',
    'Canadá'
];
const genericRandom = (min, max) => //arrow
    Math.floor(Math.random() * (max - min + 1)) + min;

const getPaisesRandom = () =>
    paises[genericRandom(0, paises.length - 1)];


document.getElementById('resultadoSort').innerHTML = getPaisesRandom();