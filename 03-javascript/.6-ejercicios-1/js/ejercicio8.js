/*
Ejercicio 8:

Tengo una heladería y cada bola de helado vale 1.8 euros

¿Cuánto cuestan los cucuruchos(conos) de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta cíncuenta céntimos de euro.
*/

let precio_bola = 1.8;
let precio_barquillo = 0.50;

let cucuruchos_1 = precio_bola + precio_barquillo;
let cucuruchos_2 = (2 * precio_bola) + precio_barquillo;
let cucuruchos_3 = (3 * precio_bola) + precio_barquillo;

let mensaje = `
El precio de 1 bola es ${cucuruchos_1} euros
El precio de 2 bolas es ${cucuruchos_2} euros
El precio de 3 bolas es ${cucuruchos_3} euros
`;
console.log(mensaje);
