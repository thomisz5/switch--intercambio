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


    $('#inputPassword').mask('99999999'); //mascara jquery

    const validaSenha = () => {
        let senha = $('#inputPassword').val()

        if (isNaN(senha)) {
            alert('A senha informada precisa ser um número!')
            return false;
        } else {
            return true;
        }
    }
    $('#inputPassword').on('load', () => validaSenha())



    $('#form-login').on('submit', function (e) {

        if (validaNome() && validaSenha()) {
            alert('Login com sucesso')
        } else {
            //e.preventDefault();
            alert('falha no login')
        }
    })

})
/*$('#inputCPF').mask('999.999.999-99'); //mascara jquery

    const validaCPF = () => {
        const regexCPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
        let cpf = $('#inputCPF').val();

        if (!regexCPF.test(cpf)) {

            return false;
        } else {
            return true;
        }
    }
    $('#inputCPF').on('load', () => validaCPF())
*/



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
        window.alert('Preencha os campos corretamente!');
    }, 1000);
};