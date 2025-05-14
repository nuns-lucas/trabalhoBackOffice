function mostrarFormulario() {
    document.getElementById('formularioOcorrencia').style.display = 'block';
}

window.onclick = function(event) {
    var modal = document.getElementById('formularioOcorrencia');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}