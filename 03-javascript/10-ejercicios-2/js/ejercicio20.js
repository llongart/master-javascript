/*
Ejercicio 20:

En base al número que nos de el usuario. 

Decirle si es par o impar.
*/

let numero = 0;

do
    numero = parseInt(prompt("Introduce un número mayor a 0"));
while(isNaN(numero) || numero <= 0);

if(numero % 2 == 0)
    alert(`El numero ${numero} es par`);
else
    alert(`El numero ${numero} es impar`);