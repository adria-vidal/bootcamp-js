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
let radio = parseFloat(prompt('Cual es el radio del circulo?? '));
areaCirculo(radio);

function areaCirculo(radio) {
  let pi = Math.PI;

  let resultado = pi * radio ** 2;
  console.log('El area es ' + resultado);

  return resultado;
}
