/*
Ejercicio 26:

Dado un array de palabras, cuenta cuántas letras tiene cada palabra
y crea un nuevo array que contenga solo esos números.
*/

const palabras = ["Amanecer", "Luis", "Teléfono", "PC", "Videojuego", "Reloj", "Control"];

function cuentaLetras(datos){
    return datos.map(palabra => palabra.length);
}

console.log(cuentaLetras(palabras));