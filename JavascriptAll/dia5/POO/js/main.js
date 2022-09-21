/*Ejemplo clase*/
//POO
//CLASES

// class Coche {
//   //Constructor &propiedades
//   //propiedades iniciales al ejecutar el codigo
//   constructor(marca, color, year, combustible, ocupantes) {
//     this.marca = marca;
//     this.color = color;
//     //THIS SOLO VA A AFECTAR DENTRO DE LA CLASE
//     this.ruedas = 5;
//     this.motor = 'combustion';
//     this.retovisores = 3;
//     this.metrosRecorridos = 0;
//     this.velocidad = 0;
//   }
//   //metodos
//   acelerar() {
//     this.velocidad += 10;
//   }
//   frenar() {
//     this.velocidad -= 10;
//   }
//   aparcar() {
//     this.velocidad = 0;
//   }
// }

// // instanciar/crear objeto(coche)
// let coche1 = new Coche('FORD', 'negro', 2022, 'electrico', 5);

/*Ejemplo MIO*/

class Persona {
  constructor(year, altura, color, pelo) {
    this.cabeza = true;
    this.ojos = true;
    this.year = year;
    this.altura = altura;
    this.color = color;
    this.pelo = pelo;
    this.metrosRecorridos = 0;
    this.velocidad = 0;
  }

  //metodos
  frenar() {
    this.velocidad -= 1;
  }
  correr() {
    this.velocidad += 1;
  }
}
let persona1 = new Persona(1998, 1.8, 'mixto', 'negro');
let persona2 = new Persona(1978, 1.7, 'blanc', 'negro');
let persona3 = new Persona(1980, 1.6, 'negre', 'rubio');

console.log(persona1);
console.log(persona2);
console.log(persona3);
persona1.correr(5);
for (let index = 0; index < 100; index++) {
  if (persona1.velocidad > 7 && persona1.velocidad < 10) {
    frenar();
  } else if (persona1.velocidad >= 0 && persona1.velocidad <= 5) {
    persona1.correr();
  }
  console.log(persona1.velocidad);
}
