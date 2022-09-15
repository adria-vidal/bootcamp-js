console.log('Hola mundo cruel');

let nombre = 'Adrià';
nombre = 'Cristian';
console.log(nombre);

// restar
console.log('Resta');

/**
 * The function restar takes two numbers as arguments, subtracts the second number from the first, and
 * returns the result
 * @param n1 - number
 * @param n2 - number
 * @returns The result of the subtraction of n1 and n2.
 */
function restar(n1, n2) {
  let resultado = n1 - n2;
  return resultado;
}
console.log(restar(5, 2));
console.log(restar(5, 8));

// multiplicar
console.log('Multiplicacion');

/**
 * It multiplies two numbers.
 * @param n1 - number
 * @param n2 - number
 * @returns The result of the multiplication of the two numbers.
 */
function multiplicar(n1, n2) {
  let resultado = n1 * n2;
  return resultado;
}
console.log(multiplicar(5, 2));
console.log(multiplicar(5, 8));

// dividir
console.log('División');
/**
 * It divides two numbers.
 * @param n1 - number
 * @param n2 - The number to divide by.
 * @returns The result of the division of n1 and n2.
 */
function dividir(n1, n2) {
  let resultado = n1 / n2;
  return resultado;
}
console.log(dividir(5, 2))
console.log(dividir(5, 8));

