/*
Los scopes determinan la accesibilidad y visibilidad de variables y funciones dentro de un programa.
Un scope puede ser global o local.

Global Scope: Las variables y funciones definidas fuera de cualquier función tienen un
alcance global, lo que significa que son accesibles desde cualquier parte del programa.

Local Scope: Las variables y funciones definidas dentro de una función tienen un alcance local,
lo que significa que solo son accesibles dentro de esa función.

JavaScript utiliza un mecanismo llamado "lexical scoping", lo que significa que los scopes
se definen en función de la ubicación física de las variables y funciones en el código fuente.
Esto puede causar efectos como el "closure", donde una función interior conserva acceso a las
variables de su ámbito externo incluso después de que la función externa haya terminado de ejecutarse.
*/

//Variable global
let globalVariable = "Soy global";
function miFuncion() {
 	//Variable local
	let localVariable = "Soy local";

	console.log(globalVariable); // Accediendo a la variable global desde el scope local
	console.log(localVariable); // Accediendo a la variable local
	// Función interna
	function funcionInterna() {
		// Puedo acceder a la variable local y global, y a otras funciones del scope externo
		console.log("Función interna:", globalVariable);
		console.log("Función interna:", globalVariable);
	}
	funcionInterna(); // Llamando a la función interna
}
miFuncion(); // Llamando a la función principal
console.log(globalVariable); // Accediendo a la variable global fuera de la función
console.log(localVariable); /* Esto daría un error, ya que localVariable solo está definida
                            dentro de la función miFuncion */

/*
En este ejemplo, globalVariable es una variable global que se puede acceder desde
cualquier parte del código.localVariable es una variable local que solo se puede acceder
dentro de la función miFuncion(). La función interna funcionInterna() puede acceder tanto a
globalVariable como a localVariable, ya que está dentro del scope de miFuncion().
Sin embargo, intentar acceder a localVariable fuera de miFuncion() generaría un error,
ya que no está definida en ese scope.

Otra forma de ver los scopes es como una relacion de contenedores padre y contenedores hijo.

        **¿Para qué sirven los scopes?**

        Los scopes en JavaScript son cruciales por varias razones:

Evitan colisiones de nombres: Los scopes permiten definir variables y funciones con los mismos
nombres en diferentes partes del código sin que interfieran entre sí. Esto ayuda a mantener el
código organizado y reduce la posibilidad de errores.

Control de acceso: Los scopes determinan qué variables y funciones pueden ser accedidas desde 
diferentes partes del código. Esto asegura que las variables sensibles o específicas de ciertas
funciones no sean modificadas o accedidas accidentalmente desde otros lugares.

Previenen fugas de información (information leakage): Al limitar el alcance de las variables y
funciones, los scopes ayudan a prevenir la fuga de información sensible a partes del programa donde
no debería ser accesible.

Mejoran la legibilidad y mantenibilidad: Utilizar scopes de manera efectiva puede hacer que el
código sea más legible y fácil de entender, ya que proporciona contexto sobre dónde se definen y
utilizan las variables y funciones.

En resumen, los scopes en JavaScript son herramientas esenciales para organizar y estructurar
el código, así como para controlar el acceso a variables y funciones, lo que contribuye a un 
desarrollo más eficiente y menos propenso a errores.
*/
