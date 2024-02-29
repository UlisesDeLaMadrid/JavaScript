/*Crear una Función que recibe un nombre y **devuelve** un saludo por
nombre y si no se provee el nombre saludo simplemente por “amigo”*/
const saludo = function saludo(name) {
   const noName = 'Hola Amigo!, mucho gusto.'
   if (!name) return noName
   const saludoCompleto = `Hola ${name}!, mucho gusto.`
   return saludoCompleto
}

console.log(saludo())
console.log(saludo('Ulises'))

/* Lo siguiente es un Arrow function de la funcion de arriba*/
const saludo2 = (name) => {
   const noName = 'Hola Amigo!, mucho gusto.'
   if (!name) return noName
   const saludoCompleto = `Hola ${name}!, mucho gusto.`
   return saludoCompleto
}

console.log(saludo2())
console.log(saludo2('Ulises'))


/*Crear una Función que altere el valor de una variable global cada
que se ejecuta (no debe retornar nada)*/
let numero = 0
const alterar = function alterar() {
   numero = numero + 1
   console.log(numero)
}
alterar()

/*Crear una Función que reciba un parametro de tipo numero y
**regrese** true si el parametro es un número par o false si es un 
numero inpar*/
const parImpar = function parImpar(numero) {
   if (typeof numero !== 'number') {
      const noEs = `"${numero}" no es numero`
      return noEs
   }

   if (numero % 3 == 0) {
      const impar = `Tu numero es impar, ${false}`
      return impar
   }
   const par = `Tu numero es par, ${true}`
   return par
}

console.log(parImpar('perro'))

const hola = function(){
   return'Hola, Mundo!'
}
console.log(hola())
