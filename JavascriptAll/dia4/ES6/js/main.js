// Funciones clasicas vs funciones arrow
// function multiplicar(p1, p2) {
//   return p1 * p2;
// }

// const Multiplicar = (p1, p2) => {
//   return p1 * p2;
// };

// const Multiplicar = (p1,p2) => p1 * p2;

// const Multiplicar = p1 => p1 ** 2;

//MAPEO

/* map itera todo el array, lo desempaqueta
 y por cada elemento recorrido del array, ejecuta la función flecha.
al ser solo una linea, no hace falta el return en ' elemento + "s" '
map lo pushea automaticamente al nuevo array frutas */

// let arrayFruta = ["manzana","pera","banana"]
// let frutas = arrayFruta.map(elemento => elemento + "s")
// console.log(frutas);

//PARAMETROS CON VALOR POR DEFECTO

// const Iva = (precio, impuesto = 0.07) => {
//   return precio + precio * impuesto;
// };
// console.log(Iva(1000, 0.1));

// const nombreRobot = (pre = 'RX') => {
//   let numero = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
//   return pre + numero;
// };
// console.log(nombreRobot());

/*Spread lo usaremos para arrays

recibimos todos los parametros y los metemos en un objeto
*/
// const spreadPropiedades = (nombre, edad, altura, ciudad, poder) => {
//   return({
//     nombre: nombre,
//     edad: edad,
//     altura: altura,
//     ciudad: ciudad,
//     poder: poder,
//   });
// };
// let Matias = ['Matias', 20, 1.85, 'Gandia', 'Programar'];
// console.log(spreadPropiedades(...Matias));

//REST
/* lo usaremos cuando  queremos que los parametros de una funcion 
sean flexibles
*/
// const Galardona = (...copas) => {
//   for (let index = 0; index < copas.length; index++) {}
// };
// let Adria = ['Bachillerato', 'Futbol', 'NY Trip'];
// let Martin = ['Ski', 'Skate'];
// let Carles = ['Musica', 'Profesor', 'estudios', 'Bootcamp'];
// console.log(Galardona(Adria));

const spreadPropiedades = (nombre, edad, altura, ciudad, poder) => {
    /*
    Extension literal...
    nos permite ahorrarnos el escribir el nombre
    del argumento venido en la funcion cuando asignamos el valor
    */
  return {
    nombre,
    edad,
    altura,
    ciudad,
    poder,
  };
};
let Matias = ['Matias', 20, 1.85, 'Gandia', 'Programar'];
console.log(spreadPropiedades(...Matias));
