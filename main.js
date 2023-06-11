$(document).ready(function() {
    // Eventos jQuery
    // Callback jQuery
    $('header button').click(function() {
        // Expande o formulário
        $('form').slideDown();
    })   

    $('#botao-cancelar').click(function() {
        // Recolhe o formulário
        $('form').slideUp();
    }) 
})