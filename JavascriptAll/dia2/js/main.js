// let operacion = prompt(
//   'Que operacion quieres (sumar,restar,multiplicar,dividir):'
// );

// let n1 = parseInt(prompt('Indica el primer numero:'));
// let n2 = parseInt(prompt('Indica el segundo numero:'));

// if (operacion == 'sumar') {
//   console.log(sumar(n1, n2));
// } else if(operacion == 'restar') {
//   console.log(restar(n1, n2));
// } else if (operacion == 'multiplicar') {
//   console.log(multiplicar(n1, n2));
// } else {
//   console.log(dividir(n1, n2));
// }

// function sumar(n1, n2) {
//   let resultado = n1 + n2;
//   return resultado;
// }

// function restar(n1, n2) {
//   let resultado = n1 - n2;
//   return resultado;
// }
// function multiplicar(n1, n2) {
//   let resultado = n1 * n2;
//   return resultado;
// }
// function dividir(n1, n2) {
//   let resultado = n1 / n2;
//   return resultado;
// }

// let nota = parseInt(prompt('Que nota has sacado?'));

// if (nota >= 0 && nota <= 5) {
//   console.log('Tienes un: Insuficiente');
// } else if (nota >= 5 && nota <= 6) {
//   console.log('Tienes un: Suficiente');
// } else if (nota >= 7 && nota <= 8) {
//   console.log('Tienes un: Notable');
// } else if (nota >= 9 && nota <= 10) {
//   console.log('Tienes un: Excelente');
// }

// let tabla = parseInt(prompt('Que tabla de multiplicar quieres? '));
// let i = 0;
// while (i <= 10) {
//   resultado = tabla * i;
//   console.log(tabla + ' * ' + i + ' = ' + resultado);
//   i++;
// }

// Retos I
//EJERCICIO 1
// let n1 = 5;
// let n2 = 5;
// function mayor(n1, n2) {
//   if (n1 > n2) {
//     console.log('El mayor es ' + n1);
//   } else if (n1 < n2) {
//     console.log('El mayor es ' + n2);
//   } else {
//     console.log(n1 + ' es igual a ' + n2);
//   }
// }
// mayor(n1, n2);

// //EJERCICIO 2
// let nombre = "Adria"
// console.log("Bienvenido " + nombre);

// //EJERCICIO 3
// let nom = prompt('Cual es tu nombre? ');
// console.log("Bienvenido " + nom);

//EJERCICIO 4
// let radio = parseFloat(prompt('Cual es el radio del circulo?? '));
// areaCirculo(radio);

// function areaCirculo(r) {
//   const pi = Math.PI;

//   let resultado = pi * (r ** 2);
//   console.log('El area es ' + resultado);

//   return resultado;
// }

//EJERCICIO 5

// let num = parseFloat(prompt('Dime un numero?? '));

// if (num % 2 == 0) {
//   console.log(num + ' es divisible entre 2');
// } else {
//   console.log(num + ' No es divisible entre 2');
// }

//EJERCICIO 6
//  let num = parseFloat(prompt('Dime precio del producto?? '));
//  console.log("el precio + IVA es: "+ num * 1.21);

//EJERCICIO 9
// let i = 1;
// while(i < 101){
//   if(i % 2 == 0 && i % 3 == 0){
//     console.log(i);
//   }
// }

//EJERCICIO 10
/* 
Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no.*/

// let numVentas = parseInt(prompt('Introduce el numero de ventas: '));
// let ventasTotal = 0;
// for (let index = 1; index <= numVentas; index++) {
//   ventasTotal += parseInt(prompt('Introduce el precio de ventas: '));
//   console.log(ventasTotal);
// }

//EJERCICIO 11
// let day = prompt('Introduce dia de la semana: ').toLowerCase();

// switch (day) {
//   case 'lunes':
//     console.log('Es laboral');
//     break;
//   case 'martes':
//     console.log('Es laboral');

//     break;
//   case 'miercoles':
//     console.log('Es laboral');

//     break;
//   case 'jueves':
//     console.log('Es laboral');

//     break;
//   case 'viernes':
//     console.log('Es laboral');

//     break;
//   case 'sabado':
//     console.log('No es laboral');
//     break;

//   case 'domingo':
//     console.log('No es laboral');
//     break;
//   default:
//     console.log('Te has equivocado');

// code block
//}

//EJERCICIO 12
// let password = 'hola';
// let intentos = 1;

// while (intentos < 3) {
//   let userPassword = prompt('introduce contraseña');

//   if (userPassword == password) {
//     prompt('Enhorabuena');
//   } else {
//     let userPassword = prompt('introduce contraseña');
//     intentos++;
//   }
// }
// if ((intentos = 3)) {
//   prompt('Te has quedado sin intentos');
// }

//EJERCICIO 13

let n1 = parseInt(prompt('Introduce el primer numero: '));
let n2 = parseInt(prompt('Introduce el primer numero: '));
let operador = parseInt(prompt('Introduce el operador: ( + , - , * , / , %) '));

calculadora(n1, n2, operador);
function calculadora(n1, n2, operador) {
  switch (operador) {
    case '+':
      console.log(n1 + n2);
      console.log(n1 + ' + ' + n2 + ' es: ' + n1 + n2);
      break;

    default:
      break;
  }
}
