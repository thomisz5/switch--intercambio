'use strict';

$(document).ready(function () {
    $('#botaoSort').click(function () { //evento click
        $.get('/assets/resources/scripts/sorteio.js', function (getPaisesRandom) { //get ajax
            $('#resultadoSort').html(getPaisesRandom());
        });
    });
});