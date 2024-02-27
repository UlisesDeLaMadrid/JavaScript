const str = 'Hola Mundo!'
console.log(str.split(' '))
console.log(str.replace(' ', '$'))
console.log(str.replace(' ', '').split())
console.log(str.replace(' ', '').split(''))
console.log(str.replace(' ', '').toUpperCase().split())
const word = ' Esto '
console.log(word.trim())
console.log(word.trimEnd())

function Sueter (color, material, gorrito, estampado) {
  this.color = color
  this.material = material
  this.gorrito = gorrito
  this.estampado = estampado
}

Sueter.prototype.cubrirDelFrio = function () {
  console.log('Te Cubro de frío!')
}

const sueterAzul = new Sueter('Azul', 'Algodon', false, true)

sueterAzul.cubrirDelFrio()
console.log(sueterAzul)

const sueterRojo = new Sueter('Rojo', 'Lana', true, false)
console.log(sueterRojo)
