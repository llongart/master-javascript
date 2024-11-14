/*
Ejercicio 21:

Calculadora:
-   Pida dos números por pantalla
-   Si tenemos uno mal que nos lo vuelva a pedir
-   En una alerta y por la consola el resultado de 
    sumar, restar, multiplicar y dividir esas dos cifras
*/

do{
    numero_1 = parseInt(prompt("Introduce el primer número:"));
}while(isNaN(numero_1));

do{
    numero_2 = parseInt(prompt("Introduce el segundo número:"));
}while(isNaN(numero_2));

let mensaje = `
Resultado de la suma: ${numero_1 + numero_2}
Resultado de la resta: ${numero_1 - numero_2}
Resultado de la multiplicación: ${numero_1 * numero_2}
Resultado de la división: ${numero_1 / numero_2}
`;
console.log(mensaje);
alert(mensaje);