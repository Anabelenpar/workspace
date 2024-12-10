const { getValuesBetweenRange } = require('./getValuesBetweenRange.js');

test('devuelve los valores correctos dentro del rango', () => {
    const numberSet = new Set([15, 20, 15, 25, 30]);
    const minRange = 10;
    const maxRange = 25;
    const expectedOutput = [15, 20, 25];
    const result = getValuesBetweenRange(numberSet, minRange, maxRange);
    expect(result).toEqual(expectedOutput);
});
test('no devuelve valores fuera del rango', () => {
    const numberSet = new Set([5, 10, 15, 20, 25, 30]);
    const minRange = 10;
    const maxRange = 25;
    const expectedOutput = [10, 15, 20, 25];
    const result = getValuesBetweenRange(numberSet, minRange, maxRange);
    expect(result).toEqual(expectedOutput);
});
test('lanza un error si el set no es un Set válido', () => {
    expect(() => getValuesBetweenRange([1, 2, 3], 10, 25)).toThrow(`El primer argumento debe ser un set, pero se recibio un object`);
});
test('lanza un error si min o max no son números', () => {
    const numberSet = new Set([15, 20, 25, 30]);
    expect(() => getValuesBetweenRange(numberSet, '10', 25)).toThrow(`Los valores de min y max deben ser números, pero se recibio string y number`);
});
