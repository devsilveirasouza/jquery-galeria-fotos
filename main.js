$(document).ready(function() {
    // Eventos jQuery
    // Callback jQuery
    $('header button').click(function() {
        alert("Expandir Formulário...");
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();

    })

    $('#botao-cancelar').click(function() {
        alert("Recolher Formulário...");
    })
})