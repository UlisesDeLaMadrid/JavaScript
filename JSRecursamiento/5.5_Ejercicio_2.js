/*
Calculadora de IMC (Índice de Masa Corporal)
El Índice de Masa Corporal (IMC) es una medida que se utiliza para determinar si una persona
tiene un peso saludable para su altura. Ayuda a evaluar si una persona está en riesgo de sufrir
problemas de salud relacionados con el peso, como enfermedades cardiovasculares, diabetes tipo 2,
presión arterial alta, etc. Se calcula dividiendo el peso (en kilogramos) por el cuadrado de la
altura (en metros).

Desarrolla un programa simple que permita a los usuarios calcular su IMC a partir de las 
ariables peso (en kilogramos) y altura (en metros). El programa realizar el cálculo del IMC y
proporcionar en consola uno de estos resultados basándose en la siguiente tabla:

IMC < 18.5        	 Bajo peso
18.5 ≤ IMC < 24.9 	 Peso saludable
25 ≤ IMC < 29.9   	 Sobrepeso
30 ≤ IMC          	 Obesidad

Bonus
Evalua el caso cuando el valor IMC calculado no sea válido (NaN), y muestra en consola un
mensaje de error alertando que los valores iniciales no son válidos.
*/

/* 
Vamos a definir la primera funcion la cual calculara el Indice de Masa Corporal (IMC)
*/
function imc (peso, altura) {
    //En la siguiente variable guardamos la operacion neceasria para calcular el IMC
    const calculoIMC = peso / (altura * altura)
    
    /*
    Haremos una comprobacion con if ya que en caso de que se instrodusca la altura en CMS
    el resultado de la operacion sera 0 o 0.0000000 
    */
    if (calculoIMC < 1){
        console.log('Datos incorrectos:')
    }
    /*
    En caso de que los datos se introduscan de manera correcta (altura en metros) se imprime
    el resultado del IMC
    */ 
    else if (calculoIMC > 1) {
        console.log('Tu indice de masa corporal es de: ', calculoIMC)
    }
    
    return calculoIMC
}

function comparativaIMC (imc) {
    /*
    En la siguiente comprobacion se complementa la de la funcion anterior y se le indica al usuario
    que introdusca su altura en metros
    */
    if ( imc < 1){
        console.log('Por favor intruduce tu altura en metros')
    } 
    /*
    En caso de que los valores sean correctos se procede a hacer mas comprobaciones para indicarle
    al usuario su proporcion de peso
    */
    else if (imc > 1 && imc < 18.5  ){
        console.log('Tienes bajo peso')
    } else if (imc >= 18.6 && imc < 24.9){
        console.log('Tienes un peso saludable')
    } else if (imc >= 25.0 && imc < 29.9){
        console.log('Tienes sobrepeso')
    } else if (imc >= 30){
        console.log('Tienes Obesidad')
    } 
    /*
    En la siguiente comprobacion se arroja un error en caso de que la operacion de imc 
    de como resultado un NaN
    */
    else if (imc === NaN) {
        console.log('Los valores no son validos')
    } 
    /*
    Esta ultima comprobacion se ejecutara en caso de que el usuario introdusca algo que no sea
    un numero
    */
    else {
        console.log('Ese no es un numero')
    }
}

/*
Se manda llamar nuestra funcion de comparativa pasando como argumento nuestra funcion de operacion
de imc
*/
comparativaIMC(imc(80, 1.70))