/* 
Ejercicio 10:

El otro día fuí con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comí 2, Pepe se comió 3 y Manolo, como es culturista, se comió 6.

¿Cuántas hamburguesas nos comímos en total?

Y... ¿Es cierto que yo comí menos que Pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador
*/

let yo = 2;
let pepe = 3;
let manolo = 6;

let total_comido = yo + pepe + manolo;
let es_cierto = yo < pepe;
let mensaje = `
Lo que comímos en total fueron ${total_comido} smash burgers.
¿Yo comí menos que Pepe?: ${es_cierto}
`

console.log(mensaje)
