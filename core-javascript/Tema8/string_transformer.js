
class string_transformer {

    constructor(inicial_string) {
        this.inicial_string = inicial_string;
    }
    
    //Convertir el string a array de caracteres
    transform_array() {
        return this.inicial_string.split("");
    }
    //Ordenar los caracteres de manera aleatoria
    order_aleatory() {
        let array = this.transform_array();
        for(let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join("");
    }
    //Invertir el orden de los caracteres
    invert_order() {
        return this.transform_array().reverse().join("");       
    }
    //Quitar las vocales
    remove_vowels() {
        return  this.inicial_string.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, '');
    }
    //Quitar las consonantes
    remove_consonants() { 
        return this.inicial_string.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '');
    }
    //Array de palabras
    array_words() {
        return this.inicial_string.split(' '); 
    }
    //Inversión del orden de las palabras del string
    reverse_words() {
        return this.array_words().reverse().join(' ');
    }
}

module.exports = string_transformer;


//Comprobaciones
//const transformer = new string_transformer("Hola Mundo");
//
//console.log("Cadena original:", transformer.inicial_string);
//console.log("Array de caracteres:", transformer.transform_array());
//console.log("Cadena aleatoria:", transformer.order_aleatory());
//console.log("Cadena invertida:", transformer.invert_order());
//console.log("Cadena sin vocales:", transformer.remove_vowels());
//console.log("Cadena sin consonantes:", transformer.remove_consonants());
//console.log("Array de palabras:", transformer.array_words());
//console.log("Cadena con palabras invertidas:", transformer.reverse_words());