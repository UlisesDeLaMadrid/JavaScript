/* Lo siguiente es un objeto con sus distintas propiedades, entre ellas un array con el tipo de comida */
// Nota: Los objetos no son iterables!!!!!!!!!
const persona = {
  name: 'Ulises',
  age: 34,
  height: 1.7,
  gender: 'male',
  isAlive: true,
  foodType: ['frutas', 'verduras', 'semillas', 'etc'],
  eyes: {
    color: 'brown',
    shape: 'rounded'
  },
  dormir: function () {
    console.log('estoy durmiendo')
  },
  comer: function () {
    console.log('estoy comiendo...')
  }
}
console.log('Esta persona se llama', persona.name)
console.log(persona.eyes.color)
// En el siguiente caso se asigna a una variable "dynamic" un valor que ya existe dentro de nuestro objeto y la sintaxis para mandarlo llamar es como se muestra abajo en el console.log .
const dynamic = 'height'
console.log(persona[dynamic])
// Ejecuta la funcion "comer" del objeto persona.
persona.comer()
// Ejecuta la funcion "dormir" del objeto persona.
persona.dormir()
