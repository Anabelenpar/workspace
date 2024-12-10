
//Ejercicio 1
//Declaracion switch como bloque de if
//let dia = "lunes";
//switch (dia) {
//    case "lunes": 
//    console.log("Es lunes");
//    break;
//   
//    default: 
//    console.log("No es lunes");
//    break;
//}
//
//if (dia === "miercoles") {
//    console.log("Es lunes");
//} else {
//    console.log("No es lunes");
//}

/*
*Desventajas switch:
    - Limitado a comparaciones de igualdad.
    - Propenso a errores tras olvidar break.
    - No es tan flexible como if.
    - No admite expresiones complejas como intervalos.
*Mejores usos de switch:
    - Condiciones simples de igualdad.
    - Mejor legibilidad para gran número de casos.
    - Para múltiples comparaciones directas de igualdad es más
    eficiente que if.


*Desventajas de if-else:
    - Complejidad en múltiples condiciones, se vuelve más dificil 
    de leer y mantener.
    - Todas las condiciones en una cadena se evaluan incluso si la
    la anterior es verdadera, evaluación innecesaria.
    - Menor legibilidad en comparaciones directas.
*Mejores usos de if-else:
    - Condiciones complejas que requieran operadores lógicos, ...
    - Comparaciones variadas, cuando las condiciones no son 
    comparaciones de igualdad directa.
    - Estructuras simples, para una o dos condiciones es más 
    intuitivo y fácil de implementar.
*/

//Ejercicio 2
//let data = prompt("¿En qué año estamos?");
//let country = prompt("¿En qué país estamos?");
//
//if (data == 2024 && country == "españa") {
//    alert("Correcto");
//} else {
//    alert("Incorrecto");
//}

//Ejercicio 3
//let precio = prompt("¿De qué quieres saber el precio?").toLowerCase();
//switch (precio) {
//    case "manzana": 
//        alert("El precio es 1.50€/kg");
//        break;
//
//    case "platano":
//        alert("El precio es 0.50€/kg");
//        break;
//    
//    case  "naranja":
//        alert("El precio es 1.00€/kg");
//        break;
//
//    default: 
//        alert("Fruta no disponible")
//        break;
//}