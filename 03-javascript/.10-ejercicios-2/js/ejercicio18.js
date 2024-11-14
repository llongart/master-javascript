/*
Ejercicio 18:

Tenemos una coleccion de números desde el 1 al 17. Y el usuario tiene que
adivinar cuál es el elegido. Haz un programa para que pueda adivinar el
número.
*/

let numero_secreto = 14;
let respuesta = "";
let intentos = 0;

while(true){
    respuesta = parseInt(prompt("Introduce el número a adivinar"));
    
    if(isNaN(respuesta))
        continue;

    if(respuesta <= 0 || respuesta > 17){
        alert("Debes introducir un número entre 1 y 17");
        continue;
    }

    if(respuesta === numero_secreto)
        break;

    console.log(`${respuesta} no es el número secreto`);
    intentos++;
}

console.log(`
Correcto!! El número secreto era el ${numero_secreto}.
Intentos requeridos: ${intentos}
`);