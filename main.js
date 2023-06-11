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

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        /** Aplica o display none inline ao adicionar a nova imagem 
         * para executar o efeito de fadeIn */
        const novoItem = $('<li style="display: none"></li>');
        /** Adiciona o enderecoDaNovaImagem ao novo item */
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000); /* Efeito ao adicionar uma nova imagem */
            $('#endereco-imagem-nova').val('');
    })    
})