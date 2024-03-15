function separador() {
   console.log(
      '--------------------------------------------------------------------------'
   )
}
function index(index) {
   return console.log(`${'                  "<<<<<_ '}${index}${' _>>>>>"'}`)
}
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
console.log(
   '--------------------------------------------------------------------------------'
)
const colores2 = ['blanco', 'azul', 'verde', 'amarillo']
console.log(colores2.slice(1, 3))
console.log(colores2)

//Splice cambia el contenido de un Array eliminando elementos existentes y/o agregando elementos nuevos
console.log(
   '--------------------------------------------------------------------------------'
)
const meses = ['enero', 'marzo', 'abril', 'mayo', 'junio', 'agosto']
meses.splice(1, 0, 'febrero')
console.log(meses)
meses.splice(6, 1, 'julio')
console.log(meses)
separador()
//Callbacks es una funcion que recibe funciones
//Crea un nuevo array con todos los elementos que cumplan la condicion implantada por la funcion dada

const buscar = 'perico'
const mascotas = [
   'perro',
   'gato',
   'perico',
   'hamster',
   'perro',
   'gato',
   'iguana',
   'hueron'
]
const found = mascotas.filter((mascota, index) => {
   if (mascota === buscar) return true
})
console.log(
   `El objeto ${buscar} se encuentra ${found.length} ${found.length > 1 ? 'veces' : 'vez'}`
)
//El console.log anterior arroja un mensaje formateado con el objeto que se busca y las veces que este objeto esta dentro del array, con un ternario en caso de tener mas de una vez el objeto cambien entre vez y veces

//La funcion anterior utiliza un callback .filter para revisar cuantas veces hay exite el elemento dado en la variable buscar dentro del array mascotas
separador()
index('.forEach')
//.forEach Ejecuta la funcion indicada por cada elemento del array
const colores3 = ['blanco', 'azul', 'verde', 'amarillo']
colores3.forEach((element) => {
   const result = element.split('').reverse().join(' ')
   return console.log(result)
})
separador()

index('.sort')
//.sort ordena los elementos de un arreglo y lo devuelve, pero por si solo no es muy estable ya que los ordena de acuerdo a su unicode, para que tenga un funcionamiento mas apropiado hay que pasarle unos parametros que se muestran a continuacion
const numeros2 = [
   1, 13, 14, 15, 16, 2, 17, 3, 18, 4, 19, 5, 20, 6, 21, 7, 22, 8, 23, 9, 24,
   10, 11, 12
]
console.log(`Comportamiento normal del ${'.sort'}`, numeros2.sort())
console.log(
   'Ordenados de menor a mayor: ',
   numeros2.sort((a, b) => a - b)
)
console.log(
   'Ordenados de mayor a menor: ',
   numeros2.sort((a, b) => b - a)
)
separador()

//Lo siguiente utilizara filter para buscar numeros pares e impares
const par = numeros2.filter((numero) => numero % 2 == 0)
const imp = numeros2.filter((numero) => numero % 2 != 0)

console.log(`Numeros pares ${par}`)
console.log(`Numeros pares ${imp}`)
separador()
//Crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos, en este caso multiplica por dos cada elemento del array y devuelve uno nuevo con el resultado.
index('.map')
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const resultado = numeros3.map((numero) => numero * 2)
console.log(resultado)
separador()
index('Date')
const nameMonthS = birthday.toLocaleString('en-US', {month: 'short'});
console.log(nameMonthS)
