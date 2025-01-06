/* 
    Bucle for

        for(inicialización; condicion; incremento/decremento){
            ...
        }

*/

let limite = 177;

for(let numero = 1; numero <= limite; numero++){
    console.log("Bucle for:", numero);
}

/*
    Bucle while

        while(condicion){
            ...
        }
*/

let contador = 1;
while(contador < limite){    
    contador++;    
}
console.log("Bucle while:", contador);


/* 
    Bucle do while

        do{
            ...
        }while(condicion)

*/

let numero = 47;

do{
    console.log("Bucle do while:", numero);
    numero--
}while(numero >= 0);

