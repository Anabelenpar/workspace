//1. Define con una función recursiva cómo calcularías la serie de Fibonacci.


//6. Pedir que se introduzca un número de dni, después, calcular si el dni es verdadero o no en función de su formato y el número de dígitos
function validarDNI(dni) {
    // Expresión regular para validar el formato (8 dígitos seguidos de una letra)
    const dniRegex = /^[0-9]{8}[A-Z]$/;
    
    // Verifica si el formato coincide con la expresión regular
    if (dniRegex.test(dni)) {
      console.log("El formato del DNI es correcto.");
    } else {
      console.log("Formato incorrecto. Un DNI válido tiene 8 números y una letra.");
      return false;
    }
    
    return true;
  }
  
  // Pedir al usuario que introduzca el DNI
  const dniUsuario = prompt("Introduce tu DNI (8 dígitos y una letra):");
  
  // Validar el DNI
  validarDNI(dniUsuario);
  