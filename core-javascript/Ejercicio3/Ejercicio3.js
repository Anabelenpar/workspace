// Pedir datos al usuario.  
let diametroRueda = prompt("Por favor, introduzca el diámetro de la rueda en metros");
let grosorRueda = prompt("Por favor, introduzca el grosor de la rueda en metros");

// Convertir las entradas a números y eliminar espacios en blanco.
diametroRueda = parseFloat(diametroRueda.trim());
grosorRueda = parseFloat(grosorRueda.trim());

//Verificar si las entradas son números válidos.
if (isNaN(diametroRueda)) {
    alert("Error: Diámetro no válido. Debe introducir un número");
} else if (isNaN(grosorRueda)) {
    alert("Error: Grosor no válido. Debe introducir un número"); 
} else {
    // Comprobar si el grosor es adecuado al diámetro.
    if ((diametroRueda > 1.4 && grosorRueda < 0.4) || 
        (diametroRueda > 0.8 && grosorRueda < 0.25)) {
            alert("Advertencia: El grosor para esta rueda es inferior al recomendado");
    } 
    // Clasificar la rueda según su diámetro de la rueda y mostrar el mensaje adecuado.
    if (diametroRueda > 1.4) {
        alert("La rueda es para un vehículo grande");
    } else if (diametroRueda > 0.8) {
        alert("La rueda es para un vehículo mediano");
    } else {
        alert("La rueda es para un vehículo pequeño");
    }
}
