// setTimeout (()=>{
//     console.log("primero");
// },3500)

const cine = new Promise((resolve, reject) => {
  let pelicula = 'predator';
  if (pelicula == 'predator') {
    resolve('pelicula fav');
  } else {
    reject('error');
  }
});
