// Condicional if
let esta_lloviendo = true;

if(esta_lloviendo)
    console.log("Me llevo mi paraguas, para que no me llueva encima!");
else
    console.log("No esta lloviendo");

let quiero_cebolla = true;

if (quiero_cebolla)
    console.log("No quiero cebolla");
else if(!quiero_cebolla)
    console.log("Si quiero cebolla");


// Condicional switch
let mi_desayuno = 2;

switch(mi_desayuno){
    case 1:
        console.log("Cafe con galletas");
        break;
    case 2:
        console.log("Pan con queso");
        break;
    case 3:
        console.log("Arepa con huevo");
        break;
    default:
        console.log("No tengo hambre");
}

// Condicional ternario
let nombre = "Juan Alberto";
let edad = 38;

let condicion = (edad>=18) ? "Es mayor de edad" : "Es menor de edad";

console.log(condicion);

// Diferencias entre var y let  Scope(Alcance/bloques)
var curso = "Máster en JavaScript";

if(true == true){
    curso = "Máster en Python";
}

console.log(curso) // -> El console.log tiene acceso a la variable curso

if(true == true){
    let auto = "Aston Martin"
}

console.log(auto) // -> El console.log NO tiene acceso a la variable curso porque let solo tiene alcance dentro del mismo bloque donde fue creada

