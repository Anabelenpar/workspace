const { fizz_buzz } = require('./fizz_buzz.js');


describe("fizz_buzz", () => {
    it("si los numeros no son divisibles ni por 3 ni por 5", () =>{
        expect(fizz_buzz(1)).toBe(1);
        expect(fizz_buzz(2)).toBe(2);
        expect(fizz_buzz("hola")).toBe("hola");
        expect(fizz_buzz(41)).toBe(41);
    });
    it("devuelve fizzbuzz si el numero es divisible por 3 y por 5", () => {
        expect(fizz_buzz(15)).toBe("fizzbuzz");
        expect(fizz_buzz(30)).toBe("fizzbuzz");
        expect(fizz_buzz(0)).toBe("fizzbuzz");
    });
    it("devuelve fizz si el numero es divisible por 3", () => {
        expect(fizz_buzz(3)).toBe("fizz");
        expect(fizz_buzz(6)).toBe("fizz");
    });
    it("devuelve buzz si el número es divisible por 5", () => {
        expect(fizz_buzz(5)).toBe("buzz");
        expect(fizz_buzz(10)).toBe("buzz");
    });

});