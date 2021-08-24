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
/*function login() {
    if ('inputUsername'.value === 'admin@admin' && 'inputPassword'.value === 'admin') {
        localStorage.setItem('acess', true);
        alert('usuario autenticado');
        window.location.href = '/app/about-us.html';
    } else {
        alert('usuário ou senha inválidos');
    }
}
*/
function login() {
    let nome, senha;
    nome = document.getElementById('inputUsername').value; //Leitura e escrita de dados simples
    senha = $('#inputPassword').val(); //Leitura e escrita de JSON
    //senha = document.getElementById('inputPassword').value;

    localStorage.setItem('nome', nome); //LocalStorage ou SessionStorage
    localStorage.setItem('senha', senha);

    /*if ('inputUsername'.value === 'thomas' && 'inputPassword'.value === 'root') {
        //window.alert('usuário autenticado!');
        window.location.href = '/app/search.html';
    } else {
        window.alert('usuário e senha inválidos!');
    }*/
}



//callback
window.onload = function () {
    setTimeout(function () {
        window.alert('Preencha com Usuário e senha corretamente');
    }, 1000);
};


//validação dos formulários
//hieraquico

//validação 2
/*function valida() {
    let user = document.forms['form-login']['input-username'].val();
    let password = document.forms['form-login']['input-password'].value;
    if (user === '' || password === '') {
        document.getElementById('erro').innerHTML = 'preencha todos os campos';
        return false;
    }

}*/


//localstorage
/*function login() {
    let user = document.getElementById('inputUsername').value;
    let password = document.getElementById('inputPassword').value;

    let usuario = localStorage.getItem('usuario');
    let senha = localStorage.getItem('senha');

    if (user === usuario && password === senha) {
        window.location.href = 'index.html';
    } else {
        alert('usuário e senha incorretos!');
    }
}*/
/*const login = e => {
    let formData = {
        usuario: document.getElementById('inputUsername').value,
        senha: document.getElementsByName('inputPassword').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    e.preventDefault();
}*/



function github() {
    let val = window.confirm('Deseja ir para o github?');
    if (val === true) {
        window.open('https://github.com/thomisz5/switch-intercambio');
    } else {
        window.alert('Continue explorando o site!');
    }
}