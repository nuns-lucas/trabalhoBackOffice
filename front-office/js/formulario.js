function mostrarFormulario() {
    document.getElementById('formularioOcorrencia').style.display = 'flex';
}

function fecharFormulario() {
    document.getElementById('formularioOcorrencia').style.display = 'none';
}

// O código existente pode ser mantido se você ainda quiser permitir fechar ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('formularioOcorrencia');
    var conteudo = document.querySelector('.formulario-conteudo');
    
    // Evento de clique para toda a página
    document.addEventListener('click', function(event) {
        // Se o modal estiver visível E o clique não estiver no conteúdo
        // E o clique não for no botão que abre a modal
        if (modal.style.display === 'flex' && 
            !conteudo.contains(event.target) &&
            !event.target.classList.contains('btn-relatar')) {
            
            modal.style.display = "none";
        }
    });
    
    // Previne que cliques dentro do conteúdo fechem a modal
    conteudo.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});