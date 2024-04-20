/*
Una arrow function es una forma de definir una funcion de una manera mas simple o abreviada 
y la caracteristica principal de una arrow function es que se definen por los signos "=>"
*/

/* 
    Sintaxis: Se declara con la palabra reservada const ya que se supone esa funcion siempre realizara
    la misma operacion, seguida del nombre de la funcion, a continuacion se inicializa con el operador
    de asigancion "=", siguiente son los parentesis con los argumentos que recibira nuestra funcion es caso
    de requerirlos, despues se incluye los signos "=>" que se llama fat arrow, segido de la operacion
    que realizara nuestra funcion (el cuerpo de la funcion) ejemplo:
*/

                        const resta = (a,b) => {
                            let resultado = a - b
                            return resultado
                        }

/* 
    Cuando la funcion se puede resolver con una sola una condicion (expresion)
    en el arrow function no es necesario poner llaves y el return viene implicito, ejemplo:
*/                        
                        const suma = (a, b) => a + b 
