/*
Las funciones en JavaScript son bloques de código diseñados para realizar
una tarea específica. Se pueden considerar como una manera de agrupar instrucciones
que desempeñan una operación particular, permitiendo que este conjunto de instrucciones
se pueda ejecutar cada vez que se llama a la función. Esto ayuda a reducir
la repetición de código y a organizar el programa de manera más eficiente.
Desde el punto de vista de la sintaxis, una función en JavaScript se puede definir de varias maneras,
pero la forma más básica es la siguiente:

        function nombreDeLaFuncion (parametro1, parametro2, ...parametroN) {
            **Bloque de código a ejecutar**
        }

Una función en JavaScript se compone de varios elementos clave, incluyendo:

Palabra clave "function": Indica el inicio de la declaración de la función.

Nombre de la función: Identifica la función y permite su llamada.

Parámetros: Variables listadas entre paréntesis que la función
            puede aceptar para trabajar con ellas, estas pueden ser cualquier cosa que decidamos.

Bloque de código: Delimitado por llaves, contiene las instrucciones que se
                  ejecutan al llamar a la función.

Valor de retorno (return): La función puede devolver un valor al punto del programa
                           donde fue llamada, utilizando la palabra clave return.

Argumentos: Los argumentos de una función son los valores que se pasan a la función cuando se invoca,
            y pueden ser accedidos dentro del cuerpo de la función a través de los argumentos.

Veamos un ejemplo de cómo se ve una función con todos estos componentes, incluido el valor de retorno:
*/

                function suma(a, b) {
                    return a + b; // Retorna la suma de a y b
                }

/*
Este ejemplo muestra una función llamada suma, que toma dos parámetros a y b,
y retorna su suma. El valor retornado puede ser utilizado en el punto del programa
donde se llama a la función, acontinuacion llamamos la funcion con los parametro requeridos (a, b)
*/

                console.log(suma(10, 20)) /* En este caso la funcion se manda llamar dentro de un 
                console.log() por que dentro de la funcion no especificamos que se imprima en 
                consola */

/* 
    La sintaxis para llamar una funcion es la siguiente:
    
            nombreDeLaFuncion(Parametros en caso que se hayan delarado)
*/

/* 
    Return: Por buenas practicas en una funcion siempre deneria haber un retur que devuleva el resultado
    de esta, y de preferencia el return tiene que ser una variable, tomemos como ejemplo la primer 
    funcion que hicimos:

                    function suma(a, b) {
                    return a + b;
                    }
    
    Esta funcion retorna la operacion a + b pero quedaria mejor de la siguiente manera:
*/

                    function sumaConVariable(a, b) {
                        const resultado = a + b
                        console.log(resultado)
                        return resultado;
                    }

                    sumaConVariable(30, 50)

/*
    Por otra parte el retur marca la finalizacion de la funcion y todo lo que este despues de este
    es como si no fuera parte de la funcion ejemplo:
*/

                    function sumaReturn(a, b) {
                        const resultado = a + b
                        return resultado;
                        console.log(resultado)
                    }

                    sumaReturn(20, 50)
        
/*
                    Si te das cuenta la esta funcion es similar a el ejemplo anterior pero como
                    el console.log()  esta despues del return, este no se ejecuta y por consecuencia
                    el dato se guarda pero no se imprime en la consola.
*/

/*
Salida temprana: Las salidas tempranas en funciones son una técnica útil para mejorar la legibilidad,
eficiencia y robustez del código al devolver un valor y salir de la función temprano basándose en
condiciones específicas. Esto ayuda a evitar cálculos innecesarios y manejar casos especiales
de manera clara y efectiva.

Una variable puede guardar una funcion: en JavaScript, una variable puede almacenar una función.
Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser tratadas
como cualquier otro tipo de datos, como números, cadenas o arrays.
*/