const String_transformer = require('./string_transformer');

describe('String_transformer', () => {
    let transformer;

    beforeEach(() => {
        transformer = new String_transformer('Hola Mundo');
    });

    test('transform_array() convierte el string a un array', () => {
        expect(transformer.transform_array()).toEqual(['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']);
    });

    test('ordena los caracteres de manera aleatoria y devolver un string', () => {
        const ordered = transformer.order_aleatory();
        expect(typeof ordered).toBe('string');
    });

    test('mantiene la misma longitud que el string original', () => {
        const ordered = transformer.order_aleatory();
        expect(ordered.length).toBe(transformer.inicial_string.length);
    });
    

    test('invierte el orden de los caracteres', () => {
        expect(transformer.invert_order()).toBe('odnuM aloH');
    });

    test('elimina las vocales del string', () => {
        expect(transformer.remove_vowels()).toBe('Hl Mnd');
    });

    test('elimina las consonantes del string', () => {
        expect(transformer.remove_consonants()).toBe('oa uo');
    });

    test('convierte el string a un array de palabras', () => {
        expect(transformer.array_words()).toEqual(['Hola', 'Mundo']);
    });

    test('invierte el orden de las palabras del string', () => {
        expect(transformer.reverse_words()).toBe('Mundo Hola');
    });
});
