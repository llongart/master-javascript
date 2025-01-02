/*
Ejercicio 30:

Crea una función que reciba un número y devuelva su factorial.
*/

function factorial(numero){
    if(numero <= 1)
        return 1;

    return numero * factorial(numero - 1); 
}

let numero = 0;
do{
    numero = parseInt(prompt("Introduce un número:"))
    if(isNaN(numero)){
        alert("Debe introducir un número válido.")
    }else{
        break;
    }
}while(true);
alert(`El factorial de ${numero} es: ${factorial(numero)}`);


