const { capitalize_last_name, ValueError } = require('./capitalize_last_name.js');

describe('capitalize_last_name', () => {
    test('devuelve el nombre y apellido con el formato correcto', () => {
        expect(capitalize_last_name('marisa tomei')).toBe('Marisa TOMEI');
    });

    test('maneja mayúsculas y minúsculas correctamente', () => {
        expect(capitalize_last_name('MARISA tomei')).toBe('Marisa TOMEI');
        expect(capitalize_last_name('marisa TOMEI')).toBe('Marisa TOMEI');
    });

    test('lanza TypeError si el argumento no es una cadena', () => {
        expect(() => capitalize_last_name(123)).toThrow(TypeError);;
    });

    test('lanza ValueError si la cadena no tiene exactamente dos palabras', () => {
        expect(() => capitalize_last_name('marisa')).toThrow(ValueError);
    });

    test('elimina espacios en blanco alrededor del nombre completo', () => {
        expect(capitalize_last_name('   marisa   tomei   ')).toBe('Marisa TOMEI');
    });
});
