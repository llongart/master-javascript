/*
Ejercicio 29:

Crea una función que reciba una palabra y devuelva cuántas vocales contiene.
*/
const vocales = ["a", "e", "i", "o", "u"];

function contar_vocales(palabra){
    let cont = 0;
    for(let indice in palabra){
        console.log(palabra);
        if(vocales.includes(palabra.charAt(indice).toLowerCase())){
            cont++;
        }
    }
    return cont;
}

let palabra = prompt("Introduce una palabra:");
console.log(`La palabra ${palabra} tiene ${contar_vocales(palabra)} vocales`);