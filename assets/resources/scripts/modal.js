'use strict';
$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.slider').slider({
        indicators: true,
        height: 500,
        transition: 500,
        interval: 2500,
    });


    $('.modal > .modal-content img').css({ //seletor css/hierarquico com objeto
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '15%'
    });

    $('h4').hide().delay('1000').fadeIn(2000).css({
        'text-align': 'center'
    }); //fade
});

function addClass() { //css handle addClass
    $('h2').addClass('white');
}
//modal
//querySelector
const elemsModal = document.querySelectorAll('.modal');
const instance = M.Modal.init(elemsModal);



function github() {
    var val = window.confirm('Deseja ir para o github?');
    if (val === true) {
        window.open('https://github.com/thomisz5/switch-intercambio');
    } else {
        window.alert('Continue explorando o site!');
    }
}