/*
Ejercicio 15:

Muestra la suma y la media de los números introducidos hasta introducir un número negativo
y ahí mostrar el resultado.
*/

let numero = 0;
let acumulador = 0;
let contador = 0;
let promedio = 0;

while(true){
    numero = parseInt(prompt("Introduce un número:"));

    if(isNaN(numero))
        numero = 0;
    
    if(numero < 0)
        break;

    acumulador += numero;
    contador++;
}

promedio = acumulador / contador;

let mensaje = `La suma de los todos los números es ${acumulador} y el promedio es ${promedio}`;

alert(mensaje);