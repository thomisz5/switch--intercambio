'use strict';
/*$(document).ready(function () {
    let botaoSort = $('#botaoSort');

    botaoSort.click(function () { //evento click JQUERY

        $.get('sorteio.js').done(function (data) { //apos o sucesso do done, o get retorna

            $('#resultadoSort').load(data); //imprimir o resultado no span
        });
    });
});*/
$(document).ready(function () {
    $('#botaoSort').click(function () { //evento click
        $.get('/assets/resources/scripts/sorteio.js', function (getPaisesRandom) { //get ajax
            $('#resultadoSort').html(getPaisesRandom());
        });
    });
});