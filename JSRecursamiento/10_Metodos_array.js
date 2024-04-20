/*
1: Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra
se debe seleccionar por su posicion.( quiero saber la longitud de la segunda palabra)
si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error

2: De la frase, necesitamos eliminar una palabra con base en su posicion, y
recibir una nueva frase sin la palabra borrada

3: Se requiere eliminar todas las palabras cortas de la frase, considerando que una
palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva
frase sin palabras cortas

4: Se requiere obtener la frase, pero escrita en orden invertido
*/

const phrase = "La mejor forma de predecir el futuro es creándolo"

//1
/*
Primero hay que convertir el string en un array con .split y para hacer la comprobacion tenemos
que saber la longitud del arreglo con .length, ahora comparamos el valor introducido con la longitud
para asegurarnos que no exceda la cantidad de valores en nuestro arreglo, en caso de que no se exceda
procedemos a hacer los paso que se piden, en caso que se excesan mostramos un mensaje de error 
*/
const word = (str, index) => {
    const toArray = str.split(" ")
    const arrayLength = toArray.length
    if (index <= arrayLength){
        const wordIndex = toArray.at(index)
        const wordToString = wordIndex.toString()
        const wordLenght = wordToString.length
        console.log(`La cantida de caracteres de la palabra en el indice ${index} es de: ${wordLenght}`)
    } else {
        console.log('No existe palabra en ese indice')
    }
    return 
}

word(phrase, 6)


//2
const eraseWord = (str, index) => {
    const toArray = str.split(" ")
    const arrayLength = toArray.length
    if (index <= arrayLength){
        toArray.splice(index,1)
        const arrayToString = toArray.join(" ")
        console.log(arrayToString)
    } else {
        console.log('No existe palabra en ese indice')
    }
    return 
}

eraseWord(phrase, 2)


//3
const shortWord = (str) => {
    const toArray = str.split(" ")
    const filterShort = toArray.filter((toArray) => toArray.length > 3)
    const arrayToString = filterShort.join(" ")
    console.log(arrayToString)
    return
}

shortWord(phrase)


//4
const invert = (str) => {
    const toArray = str.split(" ")
    const reversed = toArray.reverse()
    const arrayToString = reversed.join(" ")
    console.log(arrayToString)
    return
}

invert(phrase)