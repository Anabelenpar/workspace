let tiempo = 0;
let corriendo = false;
let intervaloId = null;


export const iniciar = () => {
    if (!corriendo) {
        corriendo = true;
        intervaloId = setInterval(() => tiempo++, 1000);
    }
};
export const pausar = () => {
    if (corriendo) {
        corriendo = false;
        clearInterval(intervaloId);
        intervaloId = null;
    }
};
export const reiniciar = () => {
    pausar();
    tiempo = 0;
};
export const obtenerTiempo = () => {
    return `${String(Math.floor(tiempo / 60)).padStart(2, '0')}:${String(tiempo % 60).padStart(2, '0')}`;
};
export const estaCorriendo = () => corriendo;
