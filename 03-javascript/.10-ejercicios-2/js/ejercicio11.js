/*
Ejercicio 11:

Nuestros usuarios tienen perros. Y quieren saber que edad de perro tienen sus mascotas.

Un año de humano equivale a siete de perro. Pregunta a los usuarios que edad tiene su perro
y dile la edad canina.
*/

let respuesta = prompt("¿Que edad tiene tu perro?");
let edad_canina = parseInt(respuesta) * 7;
console.log(`${respuesta} años en edad canina equivale a ${edad_canina} años humanos`);