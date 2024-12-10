// Comenzar un bucle infinito.
while (true) {
    // Pedir multiplicación al usuario en formato 'a * b'.
    let entrada = prompt("Introduzca una multiplicación en formato 'a * b' (o 'salir' para terminar):");

    // Añadir una salida del bucle infinito.
    if (entrada.toLowerCase() === 'salir') {
        alert("Gracias por participar. ¡Hasta luego!");
        break;
    }

    // Verificar puntos necesarios para la multiplicación.
    let partes = entrada.split('*');

    if (partes.length === 2) {
        let a = parseFloat(partes[0].trim()); // Primera parte.
        let b = parseFloat(partes[1].trim()); // Segunda parte.
        
        if (!isNaN(a) && !isNaN(b)) {
            // Calcular y mostrar el resultado de la multiplicación.
            alert(`El resultado de ${a} * ${b} es: ${a * b}`);
        } else { 
            alert("Por favor, introduzca números válidos."); // Mensaje de error.
        }
    } else {
        alert("Por favor, use el formato correcto 'a * b'."); // Mensaje de error.
    }
}