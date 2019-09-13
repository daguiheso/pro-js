function Hero(name) {
  const hero = Object.create(Hero.prototype)
  hero.name = name

  return hero
}

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`)
}

const goku = Hero('Goku')
goku.saludar()

const vegeta = Hero('Vegeta')
vegeta.saludar()

const nubita = Hero('Nubita')
nubita.saludar()