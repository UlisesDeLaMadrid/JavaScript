const numeros = [1, 2, 3, 4, 5]
const colores = ['blanco', 'azul', 'verde', 'amarillo']

console.log(numeros)
numeros.push(6)
console.log(numeros)
numeros.pop()
console.log(numeros)

colores.pop()
console.log(colores)
colores.shift()
console.log(colores)

console.log('hola'.split(' ')) //Para convertir un String en un Array

//Convierte un Array en un solo String y en los parentesis se indica el caracter que queremos agregar en medio de cada elemento, pero si no le indicamos nada por defecto nos los separa por coma ',', y si ponemos '' sin espacios los va a unir sin espacios.
console.log(colores.join())
console.log(colores.join(''))
console.log(colores.join('*'))

//Slice Devuelve la copia de una parte del Array dentro de un nuevo Array indicando en el parentesis el indice desde donde a donde copiar, pero no devuelve el ultimo valor, esto no modifica el Array original.
console.log('--------------------------------------------------------------------------------') 
const colores2 = ['blanco', 'azul', 'verde', 'amarillo']
console.log(colores2.slice(1,3))
console.log(colores2)

//Splice cambia el contenido de un Array eliminando elementos existentes y/o agregando elementos nuevos
console.log('--------------------------------------------------------------------------------')
const meses = ['enero', 'marzo','abril','mayo','junio','agosto']
meses.splice(1,0,'febrero')
console.log(meses)
meses.splice(6,1,'julio')
console.log(meses)