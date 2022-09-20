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

let figura = prompt('Que figura desea calcular').toLowerCase();

if (figura == 'circulo') {
  let radio = parseFloat(prompt('Indica el radio'));
  let pi = Math.PI;
  const areaCirculo = (r, pi) => r ** 2 * pi;

  console.log(areaCirculo(radio, pi));
} else if (figura == 'triangulo') {
  let base = parseFloat(prompt('Indica la base'));
  let altura = parseFloat(prompt('Indica la altura'));
  const areaTriangulo = (base, altura) => base * altura * 2;

  console.log(areaTriangulo(base, altura));
} else {
  let lado = parseFloat(prompt('Indica el lado'));
  const areaCuadrado = (lado) => lado * lado;

  console.log(areaCuadrado(lado));
}
