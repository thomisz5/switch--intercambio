'use strict';
//strict para tratar exceptions
$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.slider').slider({
        indicators: true,
        height: 500,
        transition: 500,
        interval: 2500,
    });

});


//prompt
//onload
//funcao anonima
//alert
//string template
//funcao local
//funcao sem argumento
//funcao com nome
//if/else
//confirm
let nome = prompt('Digite seu nome', 'nome');

window.onload = function welcome() {
    window.alert(`Seja bem vindo(a) à Switch Intercâmbio, ${nome} !`);
};


//onclick/funcao inline
function github() {
    var val = window.confirm('Deseja ir para o github?');
    if (val === true) {
        window.open('https://github.com/thomisz5/switch-intercambio');
    } else {
        window.alert('Continue explorando o site!');
    }
}