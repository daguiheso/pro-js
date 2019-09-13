const heroMethods = {
	saludar: function() {
		console.log(`Hola soy ${this.nombre}`)
	}
}

const goku = {
	nombre: 'Goku',
	saludar: heroMethods.saludar
}

goku.saludar()

const vegeta = {
	nombre: 'Vegeta',
	saludar: heroMethods.saludar
}

vegeta.saludar()

const nubita = {
	nombre: 'Nubita',
	saludar: heroMethods.saludar
}

nubita.saludar()