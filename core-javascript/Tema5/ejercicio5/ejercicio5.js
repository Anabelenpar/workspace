function found_match () {

    let num, dig;

    //Solicitar un número válido al usuario y eliminar espacios en blanco.
    while(true) {
        num = prompt("Introduzca un número").trim();
        if (!isNaN(num)) {
            break; //Salir del bucle si la entrada es válida.
        }
        alert("Por favor, introduzca un número válido");  
    }
  
    //Solicitar un dígito válido al usuario y eliminar espacios en blanco.
    while(true) {
        dig = prompt("Introduzca un solo dígito").trim();
        if (!isNaN(dig) && dig.length ===1) {
            break; //Salir del bucle si la entrada es válida.
        }
        alert("Por favor, introduzca un solo dígito válido");  
    }

    

    let counter = 0; //Inicializar el contador de coincidencias.
    
    //Contar cuantas veces aparece el dígito en el número.
    for (let i =0; i < num.length; i++) {
        if (num[i] === dig) {
            counter++;
        }
    }

    //Mostrar el resultado al usuario.
    alert(`Tu dígito se repite ${counter} veces en tu número`);
}

found_match();