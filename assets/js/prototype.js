function Hero(name) {
  this.name = name
}

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`)
}

const goku = new Hero('Goku')
goku.saludar()

const vegeta = new Hero('Vegeta')
vegeta.saludar()

const nubita = new Hero('Nubita')
nubita.saludar()