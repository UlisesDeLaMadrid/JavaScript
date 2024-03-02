const numeros = [1, 2, 3, 4, 5]
const colores = ['blanco', 'azul', 'verde', 'amarillo']

//Para acceder al array
console.log(colores[3])
console.log(numeros[3])
console.log(colores.indexOf('azul')) //Para saber el indice de de un objeto en el array, indexOf es un metodo que pertenece a arrays

let i = 0
console.log(i)
i++
console.log(i)

//Ciclo while, se ejecutara el ciclo mientras la condicion arroje un "True", en el momento que la condicion arroje "False" el ciclo ya no se ejecutara.
let o = 0
while(o <= 10){
    console.log('cuanto vale o: ',o)
    o++
}

//Esto es un ciclo "For" donde recibe 3 parametros para poder ejecutar las acciones, e igual que "While" se ejecutara mientras los parametro arrojen "True". 
for (let i = 0;i<4;i++){
    console.log(colores[i])
}
for (let i = 0;i<colores.length;i++){
    console.log(colores[i])
}
//En este caso colores.length define que es el largo del arreglo de colores por lo tanto el for se va a ejecutar el numero de veces que tenga el indice de colores, y abajo se va a imprimir los colores con colores[].
let j = 0
while (j < colores.length){
    console.log('Otros colores: ',colores[j])
    if (colores[j]==='azul') break
    j++
}

//El continue hjace que caundo se cumpla la condicion se la salte y cnobtinue con el ciclo

let k = 0

while (k < colores.length){
    if (colores[k]==='verde'){
        k++
        continue
    }
    console.log('Continue de ',colores[k])
    k++
}

//Lo mismo que en el anterior ejemplo pero con un 'For'

for (let k=0;k<colores.length;k++){
    if(colores[k] === 'verde')continue
    console.log('Continue del for ',colores[k])
}