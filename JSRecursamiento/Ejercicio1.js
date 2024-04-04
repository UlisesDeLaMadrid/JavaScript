/*Carlos es un señor mayor que maneja un restaurante muy antiguo de la ciudad,
y busca poder manejar el número de órdenes que tiene diariamente.

Por ello, te contrató para realizar un pequeño programa que le permita
guardar el número de órdenes, y que el programa determine y le diga si las órdenes
superaron el monto previsto, para así incrementar su capacidad en el siguiente día;
o si por el contrario la cantidad de órdenes fue menor, para así reducir su capacidad
del siguiente día y ahorrar gastos.

Adicionalmente, tiene la sospecha de que la demanda es mayor en los días pares del mes,
pero le cuesta a veces saber con exactitud cuándo es un día par y cuándo es uno impar,
por lo que quiere guardar el día del mes en el programa,
y que este lo ayude con esta tarea tan difícil para él.

Por último, Carlos quiere que el programa le avise aquellas veces en que el día es impar
y la demanda esperada fue mayor a la prevista, ya que con total seguridad
el siguiente día la demanda será mayor.

Bonus
Carlos está interesado en saber la proporción de órdenes cumplidas respecto al total
previsto, para tener una idea clara del rendimiento del día. 
*/

//Monto previsto del dia
const montoPrevisto = 15

//Numero de ordenes de el dia
const ordenesEfectivas = 15
//Dia es par o impar?
const dia = 3

function capacidad (){
//Si las ordenes superaron el monto previsto
if (ordenesEfectivas > montoPrevisto){
    console.log('Tuviste mas ventas de las previstas asi que hay que incrementar la capacidad del dia siguiente')
} else if (ordenesEfectivas < montoPrevisto){
    //Si las ordenes no superaron el monto previsto hay que reducir la capacidad
    console.log('Tus ventas no superaron las previstas debes reducir la capacidad')
} else {
    // En caso que no se cumplan las condiciones anteriores se ejecutara este else
    console.log('Estas parejo en ventas y ventas previstas sigue asi!')
}
}
capacidad()

function diaParOImpar () {
    if (dia % 2 === 0){
        console.log('Hoy es un dia es par, asi que la demanda sera alta, preparate!!')
    } else if (dia % 2 === 1 && ordenesEfectivas > montoPrevisto) {
    console.log("El dia es impar, pero las ventas superaron las previstas, asi que mañana habra alta demanda")
    } else {
        console.log('El dia es impar sera un dia relajado')
    }      
} 
diaParOImpar()

function rendimiento (){
    const rendimientoDia = ordenesEfectivas - montoPrevisto
    console.log('Tuviste un rendimietno de: ', rendimientoDia)
    if (rendimientoDia + montoPrevisto > montoPrevisto) {
        console.log('Felicidades tuviste un buen rendimietno en ventas')
    } else if (rendimientoDia + montoPrevisto < montoPrevisto) {
        console.log('Hoy nu fue un buen dia, animo!!!')
    } else {
        console.log('Vendiste lo justo, animo!!!')
    }
}
rendimiento()