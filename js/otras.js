// Otros tipos de funciones

// Funciones de expresión (anónimas)

const cuadrado = function (valor) {
    return valor * valor;
}

//En la invocaión se añaden los parentesis y argumentos a la constante
let resultado = cuadrado(3);
console.log (resultado);

//Funciones flecha

// const cubo = function (valor) {
//     return valor * valor * valor;
// }

//se pueden convertir a flecha con la siguiente sintaxis
// const cubo = (valor) => {
//     return valor * valor * valor;
// }


//Alivios de la función flecha 
// -si solo tiene un parametro podemos eliminar los parentesis
// const cubo = valor => {
//     return valor * valor * valor
// }

//- si solo tiene una linea de codigo en su cuerpo podemos eliminar las llaves y además el return será implícito
const cubo = valor => valor * valor * valor
resultado = cubo(5);
console.log (resultado);