const modal = document.querySelector("#miPopup");
const cerrar = document.querySelector("#cerrar");
// Abrir automáticamente tras 3 segundos (3000ms)
setTimeout(() => { modal.showModal(); }, 3000);
cerrar.addEventListener("click", () => { modal.close(); });
