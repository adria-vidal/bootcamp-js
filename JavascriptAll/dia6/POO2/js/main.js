class Fighters {
  constructor(nombre, peso, velocidad, fuerza, suerte) {
    this.nombre = nombre;
    this.peso = peso;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
    this.suerte = suerte;
    this.life = 100;
    this.adrenaline = false;
    this.stamina = 100;
  }
  ataque_basico(enemigo) {
    enemigo.life -=
      this.fuerza / this.suerte - enemigo.velocidad / enemigo.peso;
  }
  ataque_fuerte(enemigo) {
    enemigo.life -=
      this.fuerza + this.suerte - enemigo.velocidad / enemigo.peso;
  }
  defensa() {}
}
let fighter1 = new Fighters('Martin', 90, 12, 10, Math.random() * (10 - 1) + 1);
let fighter2 = new Fighters('Pedro', 90, 15, 8, 7);

fighter1.ataque_basico(fighter2);
console.log(fighter1.nombre, fighter1.life);
console.log(fighter2.nombre, fighter2.life);
