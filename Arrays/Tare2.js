export function separador() {
   console.log(
      '--------------------------------------------------------------------------'
   )
}
//Funcion que recibe un arreglo y lo imprime del ultimo al primero
const musica = [
   'TheBeatles',
   'Queen',
   'TheDoors',
   'DeepPurple',
   'Journey',
   'TheCure',
   'RedHotChiliPeppers',
   'JoyDivision',
   'Interpol',
   'LinkinPark',
   'Nirvana',
   'PearlJam',
   'FooFighters',
   'TheVines'
]

function invert(arreglo) {
   let i = arreglo.length - 1
   while (i <= arreglo.length) {
      console.log('Arreglo al reves: ', arreglo[i])
      if (arreglo[i] === arreglo[0]) break
      i--
   }
}
invert(musica)
separador()

//Funcion que recibe un arreglo de numeros y regresa el numero mayor del arreglo
const numeros = [1, 60, 10, 22, 34, 7, 13, 5, 77, 3]

function encontrarMayor(arreglo) {
   if (arreglo.length === 0) {
      return 'El arreglo está vacío.'
   }

   let mayor = arreglo[0]

   for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > mayor) {
         mayor = arreglo[i]
      }
   }

   return `El número mayor es: ${mayor}`
}
console.log(encontrarMayor(numeros))
separador()

//Funcion que suma dos numero
function suma(a, b) {
   let resultado = a + b
   console.log(resultado)
}
suma(1, 4)
separador()

/*Una funcion que recibe un arreglo y un string y devuelve false or true si el string esta 
en el arreglo*/
function estaEn(arreglo, cadena) {
   return arreglo.includes(cadena)
}
console.log(estaEn(musica, 'TheBeatles'))
separador()
