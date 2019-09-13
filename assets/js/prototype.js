const heroMethods = {
  saludar: function() {
    console.log(`Hola soy ${this.name}`)
  }
}

function Hero(name) {
  const hero = Object.create(heroMethods)
  hero.name = name

  return hero
}

const goku = Hero('Goku')
goku.saludar()

const vegeta = Hero('Vegeta')
vegeta.saludar()

const nubita = Hero('Nubita')
nubita.saludar()