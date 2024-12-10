const { generate_multiples } = require('./generate_multiples');

describe('generate_multiples', () => {
    test('Debería devolver múltiplos de 2 con tamaño 4', () => {
        expect(generate_multiples(4, 2)).toEqual([2, 4, 6, 8]);
    });

    test('Debería devolver múltiplos de 3 con tamaño 3', () => {
        expect(generate_multiples(3, 3)).toEqual([3, 6, 9]);
    });

    test('Debería devolver cinco ceros con base 0', () => {
        expect(generate_multiples(5, 0)).toEqual([0, 0, 0, 0, 0]);
    });

    test('Debería devolver múltiplos negativos de -3 con tamaño 3', () => {
        expect(generate_multiples(3, -3)).toEqual([-3, -6, -9]);
    });

    test('Debería devolver un array vacío con tamaño 0', () => {
        expect(generate_multiples(0, 5)).toEqual([]);
    });
});
