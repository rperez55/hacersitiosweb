window.onload = function() {
    const popup = document.getElementById('miPopup');
    
    // 1. Mostrar después de 2 segundos (2000 ms)
    setTimeout(function() {
        popup.classList.add('mostrar');
    }, 2000);

    // 2. Ocultar automáticamente después de 6 segundos (6000 ms)
    setTimeout(function() {
        popup.classList.remove('mostrar');
    }, 6000);
};
