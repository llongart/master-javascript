/*
Ejercicio 19:

Muestra todos los números divisores de un número que se introduce en un prompt.
*/

do{
    numero = parseInt(prompt("Introduce un número mayor a 0"));
}while(isNaN(numero) || numero <= 0);

for(let i = 1; i <= numero; i++){
    if(numero % i == 0)
        console.log(`${numero} es divisible entre ${i}`)
}