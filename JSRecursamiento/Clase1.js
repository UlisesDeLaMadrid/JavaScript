//Recursamiento de JavaScript
function decirHola (nombre){
    const hola = console.log(`Hola, ${nombre}`)
    return hola
}

decirHola('Ulises')

//Sintaxis: 
//Datos primitivos: 
    //Number: Enteros (1,2,3,4,5), negativos(-1,-2,-3) y decimal(1.1, 2.1, 3.1)
    //String: Cadenas de caracteres, son todos aquellos datos con letras
    //Boolean: True or false (Verdadero o falso)
    //Null: Cuando el dato esta vacio.
    //Undefined: Cuando no esta definido.

//Operadores:
    //Asignacion:
        // =
    // Aritmeticos:
        //Suma +
        //Resta -
        //Multiplicacion *
        //Division /
        //Exponente **
        //Modulo %
        //Incremento ++
        //Decremento --
    //Logicos: 
        // && and 
        // || or
        // == Igualdad
        // === Igualdad estricta
        // > Mayor que
        // < Menor que
        // >= Mayor o igual 
        // <= Menor o igual
    //Estructuras de control:
        // if
        // if - else
        // switch

//Variables: Para crear variables se tienen que definir e inicializar, en JavaScript hay 3 maneras de declarar una variable, "var", "let" y "const"
    // Var: Es una forma de delcarar variables que no se recomienda que se use mas, ya que a niveles 
    // de codigo extenso puede llevar a ambiguedades y errores
        var perro = 'cafe'
        var perro = 'blanco'
    
    // Const: Es un tipo de variable que no permite ser cambiada
        const pi = 3.1416
        // Intenta declarar otra variable que se llame pi pero con otro valor y veras como arroja error
        // const pi = 2
    
    // Let: Este tipo de variable si permite cambiar su valor posteriormente, ojo no es lo mismo declarar que inicializar
        let peso = '80kg'
        peso = '81kg'
            // Declarar es definir si una variable es let o const e inicializar es asignarle un valor
    
    // Reglas para declarar nombres de variables y buenas practicas:
        // 1: No usar palabras reservadas
        // 2: No comenzar con un numero
        // 3: Camelcase
        // 4: Sin espacios
        // 5: Descriptivos
        // 6: Case sensitive (Distingue mayusculas de minusculas)
        