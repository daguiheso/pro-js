const heroMethods = {
  saludar: function() {
    console.log(`Hola soy ${this.name}`)
  }
}

function Hero(name) {
  const hero = {
    name: name,
    saludar: heroMethods.saludar
  }

  return hero
}

const goku = Hero('Goku')
goku.saludar()

const vegeta = Hero('Vegeta')
vegeta.saludar()

const nubita = Hero('Nubita')
nubita.saludar()