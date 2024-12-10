//Ejercicio 1: 1 Ejercicios: Imprimir los números del 1 al 100 de uno en uno como alerta.
//for(let i = 1; i <= 100; i++) {
//    alert(i);
//}

//Ejercicio 2: Imprimir sólo los números pares del 1 al 100 en log de consola.
//for(let i = 1; i <= 100; i++) {
//    if (i % 2 === 0) {
//     console.log(i);   
//    }
//}
//for(let i = 1; i <= 100; i++) {
//    if (i % 2 !== 0) {
//        continue;;   
//    }
//    console.log(i);
//}

//Ejercicio 3: Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla.
//for (let i = 0; i <= 1000; i++) {
//    if (i % 20 === 0) {
//        console.log(i);
//    }
//}

//Ejercicio 4: Dibujar un cuadrado por pantalla.
//function cuadrado(lados) {
//    let result = "";
//    for (let i = 0; i < lados; i++) {  //para la primera línea.
//        result +=  "* ";
//    }
//    result += "\n";
//
//    for (let i = 0; i < lados - 2; i++) {
//        result += "*";
//        for (let j = 0; j < lados + lados - 3; j++) {   //para las del centro. 
//            result += " ";
//    }
//    result += "*\n";
//    }
//
//    for (let i = 0; i < lados; i++) {    //para la última línea.
//        result += "* ";
//    }
//
//    return result;
//}
//console.log(cuadrado(30));

//Ejercicio 5: Dibujar un rombo por pantalla.

//Ejercicio 6: Imprimir por pantalla las tablas de multiplicar del 0 al 9.
//let num = 2;
//for (let i = 0; i <= 10; i++) {
//    let result = num * i;
//    console.log(`${num} * ${i} = ${result}`);
//}

// Ejercicio 7: Página web ejecutada en bucle infinito que pregunta por una multiplicación y te responde con la solución mientras te vuelve a
//preguntar de nuevo.
while(true) {
    let input = prompt("Introduzca una multiplicación");
    if (input === "salir")
        break;
    let partes =  input.split("*");
    alert()


}

//Ejercicio 8: Preguntar un número por input, después, imprimir todos los números impares hasta él.
//let num = prompt("Introduzca un número");
//for (let i = 0; i <= num; i++) {
//    if (i % 2 !== 0) {
//        alert(i)
//    }
//}

//Ejercicio 9: Preguntar un número de números a introducir, después, preguntar por esos números, por último, sacar por pantalla la suma de los mismos.
//let numdenum = prompt("Introduzca  el número de números");
//let suma = 0;
//for (let i = 0; i < numdenum; i++) {
//    let num = prompt("Introduzca un número");
//    suma += parseInt(num);
//    }
//    alert(suma);

//Ejercicio 10: Preguntar por pantalla que se introduzca un número o un texto, si es número se buscan todos los divisores del mismo y si es texto se
//escribe cada uno de los caracteres en un salto de línea.
//let entrada = prompt("Introduzca un número o un texto");
//if (isNaN(entrada)) {
//    let result = "";
//    for (char of entrada) {
//        result += char + "\n"
//    }
//    alert(result);
//} else {
//    let divisores = "";
//    for ( let i = 1; i<=entrada; i++)
//        if (entrada % i === 0) {
//            divisores += i + "\n";
//        }
//    alert(divisores);
//}

//Ejercicio 11: Preguntar por pantalla un número entero y que se imprima por pantalla un triángulo.
//let num = parseInt(prompt("Introduce un número entero")); //necesario parseInt() ya que necesitamos un número y prompt devuelve una cadena. 
//let resultado ="";//para almacenar aquí las filas y que aparezcan en el mismo mensaje emergente.
//for (let i = 1; i <= num; i += 2) {//declara cuantas filas tiene que haber, dice que la ultima va a ser n=3->1,3. Siempre el primero es 1.
//    let fila = "";//declaramos fila vacía.
//    for(let j = i; j > 0; j -= 2) {//va a crear cada fila, empezando por el primer i (que va a ser 1).
//        fila += j + " ";//lo añade a fila.
//    }
//    resultado += fila + "\n";//acumula las filas seguidas de saltos de línea en resultado. 
//}
//alert(resultado);

//Ejercicio 12: Preguntar al usuario que escriba un texto, después que lo muestre de manera invertida (al revés).
//let texto = prompt("Introduzca un texto")
//let textoInvertido = "";
//for (let i = texto.length - 1; i >= 0; i--) {
//    textoInvertido = texto.split("").reverse().join("");
//}
//alert(textoInvertido);

//Ejercicio 13: Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el usuario escriba “salir” que terminará.
//let input = "";
//while(true) {
//    input = prompt("Introduzca lo que quiera");
//    if (input === "salir") {
//        break;
//    }
//    alert(input);
//    
//}