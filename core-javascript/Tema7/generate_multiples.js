const readline = require('readline');

function generate_multiples(size, base) {
    const multiples = [];
    for (let i = 1; i <= size; i++) {
        multiples.push(base * i);
    }
    return multiples;
}

// Función para manejar la entrada y salida
function ask_user() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Ingresa el tamaño del array: ', (size_input) => {
        const size = parseInt(size_input) || 0;

        rl.question("Ingresa el número del cual obtener sus múltiplos: ", (base_input) => {
            const base = parseInt(base_input) || 0;
            const multiples = generate_multiples(size, base);
            console.log(multiples);
            rl.close();
        });
    });
}

// Exportar la función para poder testearla
module.exports = { 
    generate_multiples,
 };

// Llamar a askUser solo si el archivo se ejecuta directamente
if (require.main === module) {
    ask_user();
}
