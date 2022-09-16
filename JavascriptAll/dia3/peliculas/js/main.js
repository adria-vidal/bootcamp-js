let edad = parseInt(prompt("Introduce la edad: "))

let pelicula1 = {
    nombre: "Rey Leon",
    edad: 3
}
let pelicula2 = {
    nombre: "Soy Leyenda",
    edad: 13
}
let pelicula3 = {
    nombre: "La marca del demonio",
    edad: 18
}
let pelicula4 = {
    nombre: "A todo gas",
    edad: 8
}

let peliculas = [pelicula1,pelicula2,pelicula3,pelicula4];

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].edad <= edad) {
        console.log("Puedes ver: " + peliculas[i].nombre); 
    }
    
}