/*
Ejercicio 12:

Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales

PLUS: Si los números no son un número o son menores o iguales a cero,
nos los vuelva a pedir.
*/

let numero_1 = "";
let numero_2 = "";
let mensaje = "";

do{
    numero_1 = prompt("Introduce el primer número:");
}while(isNaN(numero_1) || parseInt(numero_1) <= 0);

numero_1 = parseInt(numero_1);

do{
    numero_2 = prompt("Introduce el segundo número:");
}while(isNaN(numero_2) || parseInt(numero_2) <= 0);

numero_2 = parseInt(numero_2);


if(numero_1 > numero_2){
    mensaje = `El primer número: ${numero_1} es mayor que el segundo número: ${numero_2}`
}else if(numero_2 > numero_1){
    mensaje = `El segundo número: ${numero_2} es mayor que el primer número: ${numero_1}`
}else{
    mensaje = `El primer número: ${numero_1} es igual al segundo número: ${numero_2}`
}

alert(mensaje)
