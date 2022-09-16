let letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];
let numeroUsuario = prompt('Dime el numero del DNI: ');
let letraUsuario = prompt('dime la letra del DNI: ');

let resto = numeroUsuario % 23;


if(letraUsuario == letras[resto]){
    console.log("el dni es correcto");
}else{
    console.log("Es incorrecto");
}