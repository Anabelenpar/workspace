//"Crea una clase de error personalizada MyError que extienda la clase Error incorporada en 
//JavaScript. Tu clase de error debe aceptar una propiedad adicional llamada statusCode
//para almacenar un código de estado HTTP (por ejemplo, 404 para 'No encontrado', 500 para
//'Error interno del servidor'). Además, debes agregar un método getErrorMessage() que 
//devuelva una cadena de texto combinando el mensaje de error y el código de estado. 
//Prueba esta clase lanzando una instancia de MyError y mostrando en consola el resultado
//de getErrorMessage()."

class MyError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }

    getErrorMessage() {
        return `Error ${this.statusCode}: ${this.message}`
    }
}

try {
    throw new MyError("Página no encontrada", 404);
} catch (err) {
    if (err instanceof MyError) {
        console.log(err.getErrorMessage());
    } else {
        console.log("Error desconocido:", err);
    }
}


module.exports = { 
    MyError, 
};
