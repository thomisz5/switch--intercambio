'use strict';

//validação REGEX
//BLUR
//VAL()
//ALERT;
//IF;
//FUNCAO ANONIMA
$(document).ready(function () {

    const validaNome = () => {
        const regexCaracter = /[A-Zz-z]/g;
        let carac = $('#inputUsername').val();

        if (!regexCaracter.test(carac)) {
            alert('o valor informado está vazio ou nao contem apenas caracteres!')
            return false;
        }
        return true;
    }
    $('#inputUsername').on('blur', () => validaNome())



    $('#form-login').on('submit', function (e) {

        if (validaNome()) {
            alert('Login com sucesso')
        } else {
            e.preventDefault();
            alert('falha no login')
        }
    })

})

function github() {
    let val = window.confirm('Deseja ir para o github?');
    if (val === true) {
        window.open('https://github.com/thomisz5/switch-intercambio');
    } else {
        window.alert('Continue explorando o site!');
    }
}

window.onload = function () {
    setTimeout(function () {
        window.alert('Preencha com Usuário e senha corretamente');
    }, 1000);
};