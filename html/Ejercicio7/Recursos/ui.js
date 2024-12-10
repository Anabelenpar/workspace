import { iniciar, pausar, reiniciar, obtenerTiempo, estaCorriendo } from './cronometro.js';

const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReset = document.getElementById("reset");
const estadoTexto = document.getElementById("estado");
const inputMinutos = document.getElementById("minutos");
const inputSegundos = document.getElementById("segundos");

function actualizarDOM() {
    const tiempo = obtenerTiempo();
    const [minutos, segundos] = tiempo.split(':');
    inputMinutos.value = minutos;
    inputSegundos.value = segundos;
}
function actualizarEstado(iniciarDeshabilitado, pausarDeshabilitado, mensaje) {
    btnIniciar.disabled = iniciarDeshabilitado;
    btnPausar.disabled = pausarDeshabilitado;
    estadoTexto.textContent = mensaje;
}
btnIniciar.addEventListener('click', function() {
    iniciar();
    actualizarEstado(true, false, "En marcha");
});
btnPausar.addEventListener('click', function() {
    pausar();
    actualizarEstado(false, true, "En pausa");
});
btnReset.addEventListener('click', function() {
    reiniciar();
    actualizarEstado(false, true, "En pausa");
    actualizarDOM();
});

setInterval(() => {
    if (estaCorriendo()) { 
        actualizarDOM(); 
    }
}, 1000);
