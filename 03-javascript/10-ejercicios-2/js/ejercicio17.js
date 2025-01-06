/*
Ejercicio 17:

Mostrar todos los números impares que hay entre dos números que nos de el usuario.
*/

do{
    numero_1 = parseInt(prompt("Introduce el primer número"));
}while(isNaN(numero_1) || numero_1 <= 0);

do{
    numero_2 = parseInt(prompt("Introduce el segundo número"));

    if(numero_2 <= numero_1)
        alert(`El segundo número no puede ser menor que ${numero_1}`)

}while(isNaN(numero_2) || numero_2 <= 0 || numero_2 <= numero_1);

console.log(`Los números impares entre ${numero_1} y ${numero_2} son:`)
for(let i = numero_1 + 1; i < numero_2; i++){
    if(i % 2 != 0)
        console.log(i)
}