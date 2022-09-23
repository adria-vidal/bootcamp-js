//declaramos el objeto
let objetos = [
  { id: 'libro1', precio: 15 },
  { id: 'libro2', precio: 8000 },
  { id: 'libro3', precio: 650000 },
];
let totalCarrito = document.getElementById('totalCarrito');
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal}`;

//ev.target.id -> asi sabemos cual es el div que arrastramos a traves del id
const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
};
const allowDrop = (ev) => {
  //cancelamos el evento
  ev.preventDefault();
};

const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.setData('text');
  let precio = objetos.find((objeto) => {
    return objeto.id == data;
  });
  precio += precio.precio;
  totalCarrito.innerHTML = `{$precioTotal}`;
  //   console.log('he soltado..', data);
};
