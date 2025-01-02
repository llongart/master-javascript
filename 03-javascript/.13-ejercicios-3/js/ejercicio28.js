/*
Ejercicio 28:

1. Pide 6 números por pantalla y mételos en un array
2. Muestra el array entero (Todos sus elementos en el cuerpo de la página y en la consola)
3. Ordenalo y muestralo
4. Invierte su orden y muéstralo
5. Muestra cuantos elementos tiene el array
6. Busca uno de los valores que ha metido el usuario,
   que nos diga si lo encuentra y su indice
7. Refactoriza todo lo posible usando funciones
*/

let numeros = [];
let i = 1;

function mostrar_numeros(coleccion){
    document.write(`<h1>[${coleccion}]<h1/>`);
    console.log(coleccion);      
}

function ordenar_numeros(){
    return numeros.sort();
}

function invertir_numeros(){
    return numeros.reverse();
}

function buscar_valor(valor, coleccion){
    let indice = coleccion.indexOf(valor)
    if (indice < 0){
        return `El número ${valor} no se encuentra en el arreglo`;
    }else{
        return `El número ${valor} se encuentra en el índice: ${indice}`
    }
}

function llenar_array(){
    let numero;
    do{
        numero = parseInt(prompt(`Introduce el número ${i}:`))
        if(isNaN(numero)){
            alert("Debe introducir un número válido.")
        }else{
            i++;
            numeros.push(numero);
        }
    }while(i<=6);
}

function mostrar_indice(){
    numero = 0;
    do{
        numero = parseInt(prompt("Introduce un número:"))
        if(isNaN(numero)){
            alert("Debe introducir un número válido.")
        }else{
            break;
        }
    }while(true);
    console.log(buscar_valor(numero, numeros));    
}

llenar_array();
mostrar_numeros(numeros);
// ordenar_numeros();
numeros.sort();
mostrar_numeros(numeros);
// invertir_numeros();
numeros.reverse();
mostrar_numeros(numeros);
console.log(`length: ${numeros.length}`)
mostrar_indice();





