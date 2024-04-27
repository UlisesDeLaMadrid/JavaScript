/*
¿Cómo se declara un objeto?

En JavaScript, puedes declarar un objeto de varias formas. Aquí tienes algunas de las
formas más comunes de declarar un objeto:

Notación de Objeto Literal: La forma más común y sencilla de declarar un objeto es utilizando
la notación de objeto literal, donde defines las propiedades y sus valores dentro de llaves "{}".
*/

// Declaracion de objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
}
console.log('Objeto persona:', persona)

/*
Constructor de Objeto: También puedes crear un objeto utilizando el constructor Object() y
luego asignar propiedades al objeto utilizando la notación de punto (".") o corchetes ("[]").
*/

// Declaracion de objeto
const persona2 = new Object()
persona2.nombre = 'Juan';
persona2.edad = 30;
persona2.ciudad = 'Madrid';

console.log('Objeto persona2: ', persona2)

/*
Función Constructora: Las funciones de flecha no tienen sus propios objetos this, arguments,
super, o new.target, lo que significa que no pueden ser utilizadas como constructores y
no tienen acceso a estas propiedades internas.
*/

// Declaracion de function
function persona3 (nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad
  }
  // Incializar objeto
  const juan = new persona3('Juan', 30, 'Madrid');


/*
Clases (ES6+): En ECMAScript 6 (ES6) y versiones posteriores, puedes utilizar la sintaxis de
clase para definir un objeto.
*/

// Declaracion de function
class persona4 {
    constructor (nombre, edad, ciudad) {
     this.nombre= nombre;
     this.edad = edad;
     this.ciudad = ciudad
    }
   }
   // Incializar objeto
   const pedro = new persona4('Pedro', 30, 'Madrid');


/*
Estas son algunas de las formas más comunes de declarar un objeto en JavaScript. La notación
de objeto literal es la más utilizada debido a su simplicidad y claridad. Sin embargo, las otras
formas también son útiles en diferentes contextos, como la creación de objetos dinámicamente o
la creación de clases para la programación orientada a objetos.
*/

//Nota:Las funciones que estan dentro de objetos se llaman metodos

/*
Sintaxis

En JavaScript, la sintaxis de los objetos se basa en la notación de objeto literal,
que es una colección de pares de clave-valor encerrados entre llaves "{}".
Aquí tienes una descripción de la sintaxis de los objetos en JavaScript:

Sintaxis Básica:
*/

/* Declaracion de objeto
const objeto = {
    clave1: valor1,
    clave2: valor2,
    clave3: valor3,
   // ...pares de clave-valor adicionales
  }
*/

/*
Claves 
Las claves son cadenas de texto (strings) que actúan como identificadores para acceder a
los valores del objeto. Las claves pueden ser cualquier cadena de texto válida, incluidos
nombres de propiedades y números, pero se recomienda que sean descriptivas y legibles.

Valores 
Los valores pueden ser de cualquier tipo de datos válido en JavaScript, incluyendo
números, cadenas, booleanos, arrays, objetos y funciones.
*/