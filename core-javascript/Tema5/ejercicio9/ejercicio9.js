function titulo () {

      //Solicitar la entrada al usuario y eliminar espacios en blanco.
      let input_string = prompt("Por favor, Introduzca una frase.").trim();

      //Convertir la primera letra de cada palabra a mayúsculas.
      function uppercase (word) {
         if (word.length === 0) return ""; //Manejar palabras vacías.
         let first_letter = word.charAt(0); //Primera letra.
         let rest = word.slice(1).toLowerCase(); //Resto de la palabra en minúsculas.
         return first_letter.toUpperCase() + rest; //Combinar y devolver.
      }

      // Separar la cadena en palabras y convertirlas.
      let words = input_string.split(" ");
      let words_uppercase = words.map(word => uppercase(word));
      
      //Devolver las palabras unidas en una sola cadena.
      return words_uppercase.join(" ");
 }

alert(titulo());
