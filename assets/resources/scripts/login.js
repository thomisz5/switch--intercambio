'use strict';
//setTimeOut
//função auto-executavel
//onload
//get elementsById
//localStorage

//var logado = false;
//if (localStorage.getItem('acess') === 'true') {
//    logado = true;
//}
//if (logado !== true) {
//   alert('usuário não autenticado');
//    window.location.href = '/app/login.html';
//}

//function login() { //tentar por arrow
//   let userName = document.getElementById('input-username');
//  let password = document.getElementById('input-password');

/**if (userName.value === 'admin@admin' && password.value === 'admin') {
 *  localStorage.setItem('acess', true);
 * alert('usuario autenticado');
 * window.location.href = '/app/about-us.html';
 * } else {
 *   alert('usuário ou senha inválidos');
 * }
 */

//callback
window.onload = function () {
    setTimeout(function () {
        window.alert('Preencha com Usuário e senha corretamente');
    }, 1000);
};


//validação dos formulários
//hieraquico
let user = document.forms[0];
let password = document.forms[1];

user.onsubmit = function (e) {
    e.preventDefault();

    alert('Enviado com sucesso');
};

password.onsubmit = function (e) {
    e.preventDefault();

    alert('Enviado com sucesso');
};

function github() {
    let val = window.confirm('Deseja ir para o github?');
    if (val === true) {
        window.open('https://github.com/thomisz5/switch-intercambio');
    } else {
        window.alert('Continue explorando o site!');
    }
}