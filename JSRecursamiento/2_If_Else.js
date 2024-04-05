//Estructuras de control: if else
    // Esto se utiliza para jecutar una decicion en cuatno se cumpla una condicion o no
const dia = 2

function diaParImpar (){
    const moduloDelDia = dia % 2
    const diaEsPar = moduloDelDia === 0
    //Si el dia es par entonces imprimir "El dia es par"
    if (diaEsPar){ //Dentro del parentesis se coloca la condicion del if, si se cumple la condicion va a ejecuar lo que esta dentro de las llaves, en este caso es un console.log()
        console.log('El dia es: Par')  
    } else { //De lo contrario imprimir "El dia es impar", en caso que no se cumpla la condicion anterior se ejecutara lo que esta dentro de las llaves de este else
        console.log('El dias es: Impar')
    }
}
diaParImpar()