/* 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido
pedirá los valores necesarios para calcular el área. Para ello has de crear un método
por cada figura para calcular cada área, este devolverá un número real. Muestra el
resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado
*/

// let figura = prompt('Que figura desea calcular').toLowerCase();

// if (figura == 'circulo') {
//   let radio = parseFloat(prompt('Indica el radio'));
//   let pi = Math.PI;
//   const areaCirculo = (r, pi) => r ** 2 * pi;

//   console.log(areaCirculo(radio, pi));
// } else if (figura == 'triangulo') {
//   let base = parseFloat(prompt('Indica la base'));
//   let altura = parseFloat(prompt('Indica la altura'));
//   const areaTriangulo = (base, altura) => base * altura * 2;

//   console.log(areaTriangulo(base, altura));
// } else {
//   let lado = parseFloat(prompt('Indica el lado'));
//   const areaCuadrado = (lado) => lado * lado;

//   console.log(areaCuadrado(lado));
// }

// //2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.

// let numeros = parseInt(prompt("Cuantos numeros aleatorios quieres"));
// let rangoMin = parseInt(prompt("Numero aleatorio minimo "));
// let rangoMax = parseInt(prompt("Mumero aleatorio maximo"));

// const aleatorio = (numeros,rangoMin,rangoMax) => {
//   let numero;
//   numero = Math.floor(Math.random() * (rangoMax - rangoMin) + 1) + 1;

// }

/* Crea una aplicación que nos pida un número por prompt y con un método se lo
pasamos por parámetro para que nos indique si es o no un número primo, debe
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
embargo, 17 si es primo.
PD:los numeros primos solo se pueden dividir entre ellos y 1
*/

let numero = parseInt(prompt('Dime numero para saber si es primo'));

const primo = (numero) => {
  for (let x = 2; x <= numero; x++) {
    //
    for (let i = 2; i < numero; i++) {
      if (x % i === 0) {
        console.log(x, 'no es primo');

        return false;
      }
    }
  }
  return true;

};
primo(numero);

// if (!primo(numero)) {
//   console.log('No es primo');
// } else {
//   console.log('es primo');
// }

/*
4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizara mediante un método al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.
*/

// let numero = parseInt(prompt('Dime numero para carcular factorial'));

// const factorial = (numero) => {
//   let resultado = 1;
//   for (let i = numero; i >= 1; i--) {
//     resultado *= i;
//     console.log();
//   }
//   console.log(resultado);
// };
// factorial(numero);
