const { MyError } = require("./MyError")

describe("MyError", () => {
    test("Debe crear una instancia de MyError con el mensaje y código de estado correctos", () => {
        const error = new MyError("Página no encontrada", 404);
        expect(error).toBeInstanceOf(MyError);
        expect(error.message).toBe("Página no encontrada");
        expect(error.statusCode).toBe(404);
    });

    test("Debe devolver el mensaje de error formateado correctamente", () => {
        const error = new MyError("Página no encontrada", 404);
        expect(error.getErrorMessage()).toBe("Error 404: Página no encontrada");

    });

    test("Debe mantener el nombre del error como MyError", () => {
        const error = new MyError("Página no encontrada", 404);
        expect(error.name).toBe("MyError");
    })
});