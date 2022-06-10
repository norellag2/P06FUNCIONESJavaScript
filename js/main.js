// Funciones 

// Declaración

//Sintaxis
// function  identificador (parametros) {
    // código a ejecutar cuando se invoque
// }

function  suma (valor1, valor2) {
  console.log (valor1 + valor2);
}
// las funciones pueden retornar o no valores usando la palabra return
function division (valor1, valor2) {
    let valor3 = valor1 / valor2;
    return valor3;
    console.log('Hola'); //no se ejecuta porque está debajo de return
}

//Invocación

//Sintaxis
//Identificador (argumentos) los argumentosson los valores que se le pasan a los parámetros

suma (10, 5);
suma (4,8);


//las funciones que retornan valor su invocación se asigna a otra variable
 let resultado = division (50,2); 
 console.log (resultado);

 // las funciones pueden estar declaradas por debajo de su invocación 
 setMensaje ('Juan')
 function setMensaje (nombre) {
 console.log ('Hola' + nombre + '!');
 }