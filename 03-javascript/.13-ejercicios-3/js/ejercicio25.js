/*
Ejercicio 25:

Crea un array de ingredientes para una receta absurda
(Como una pizza con chocolate y piña).

Muestra la receta completa en una frase divertida.
*/

const ingredientes = ["chocolate", "piña", "banana", "cerveza", "refresco", "malteada"];

let frase = `Los ingredientes para la pizza son: ${ingredientes.join(", ")} y ajonjolí`;

document.write(`<h1>${frase}<h1/>`)

