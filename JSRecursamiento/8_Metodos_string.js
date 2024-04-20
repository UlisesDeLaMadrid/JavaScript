//metodos de string:

//Ejercicio en clase
const phrase = "La mejor forma de predecir el futuro es creándolo"
/*
se requiere:
    1.- Saber cuántos caracteres tiene la frase
    2.- Saber cuántas letras tiene la frase
    3.- Saber cuántas palabras tiene la frase
    4.- Obtener la misma frase pero en mayúsculas
    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
*/

//1:
function charLenght (str) {
    /*
    Utilizamos .lenght por que solo se requiere saber cuantos caracteres tiene la frase
    y como los espacios cuentan como caracteres no hace falta hacer nada mas
    */
    const word = str.length
    console.log('Tu frase tiene', word, 'caracteres')
    return word
} 

charLenght(phrase)

//2:
function letterLenght (str) {
    /*
    En este caso como solo pide el numero de letras y los espacios no son letras vamos a utilizar
    primero el metodo .replaceAll para reemplazar los espacios " " por no espacios "" xD
    */
    const word = str.replaceAll(" ","")
    /*
    Como la documentacion dice que .replaceAll regresa un nuevo string modificado, entonces ahora
    solo necesitaremos contar las letras con .lengh ya que no hay espacios.
    */
    console.log('Tu frase tiene', word.length, 'letras')
    return word
} 

letterLenght(phrase)

//3
function wordNumber (str) {
    /*
    Primero que nada necesitamos encontrar la forma de separar el string en palabras para poder contarlas
    y el metodo que puede servir para esto es .split ya que convierte el string en un array separando
    su contenido en el caracter que indiquemos en (" ") y como indicamos que lo separe donde existan
    espacios, nos va a devolver un array con cada una de las palabras.
    */
    let word = str.split(" ")
    /*
    Ya que obtenemos el array con cada una de las palabras ahora solo toca utilizar .lenght para saber
    cuantas son
    */
    console.log('Tu frase tiene', word.length, 'palabras')
    return word
}

wordNumber(phrase)

//4
function wordToUpper  (str) {
    /*
    En este caso solo necesitamos transformar las letras minusculas a mayusculas y el metodo
    mas adecuado para esto es .toUpperCase
    */
    const word = str.toUpperCase()
    console.log(word)
    return word
}

wordToUpper(phrase)

//5
function letterATo4 (str) {
    /*
    Igual que en el ejercicio 2 donde reemplazamos espacios " " por no espacios "" en este caso
    necesitamos encontrar la manera de identificar toas las "a" para poderlas cambiar por "4"
    utilizando .replace y pasandole por parametro una expresion regular
    */
    const word = str.replace(/[aáAÁ]/g,"4")
    // Se utilizo una expresion regular para indicar que caracteres reemplazar /[aáAÁ]/g
    console.log(word)
    return word
}

letterATo4(phrase)