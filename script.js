window.onload = function() {
    setTimeout(function() {
        document.getElementById('miPopup').style.display = 'flex';
    }, 3000); // 3000 milisegundos = 3 segundos
};

function cerrarPopup() {
    document.getElementById('miPopup').style.display = 'none';
}
