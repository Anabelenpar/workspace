import { iniciar, pausar, reiniciar, obtenerTiempo, estaCorriendo } from './cronometro.js';

describe('Pruebas del cronómetro', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        reiniciar();
    });

    test('El cronómetro inicia correctamente con estado activo y tiempo en 00:00', () => {
        iniciar();
        expect({ corriendo: estaCorriendo(), tiempo: obtenerTiempo() }).toEqual({ corriendo: true, tiempo: '00:00' });
    });

    test('El cronómetro incrementa tiempo después de iniciarse', () => {
        iniciar();
        jest.advanceTimersByTime(3000);
        expect(obtenerTiempo()).toBe('00:03'); // Cambia esta línea
    });

    test('El cronómetro se detiene correctamente y el tiempo permanece constante', () => {
        iniciar();
        jest.advanceTimersByTime(2000);
        pausar();
        const tiempoAlParar = obtenerTiempo();
        jest.advanceTimersByTime(1000);
        expect({ corriendo: estaCorriendo(), tiempo: obtenerTiempo() }).toEqual({ corriendo: false, tiempo: tiempoAlParar });
    });

    test('El cronómetro reinicia el tiempo a 00:00 y estado detenido', () => {
        iniciar();
        jest.advanceTimersByTime(1500);
        reiniciar();
        expect({ corriendo: estaCorriendo(), tiempo: obtenerTiempo(), transcurrido: 0 }).toEqual({ corriendo: false, tiempo: '00:00', transcurrido: 0 }); // Cambia esta línea
    });

    test('Pausar sin haber iniciado mantiene el cronómetro en 00:00 y estado detenido', () => {
        pausar();
        expect({ corriendo: estaCorriendo(), tiempo: obtenerTiempo() }).toEqual({ corriendo: false, tiempo: '00:00' });
    });

    test('Llamar a iniciar mientras está corriendo no altera el tiempo', () => {
        iniciar();
        jest.advanceTimersByTime(1000);
        const tiempoAntes = obtenerTiempo();
        iniciar();
        expect(obtenerTiempo()).toBe(tiempoAntes);
    });
});
