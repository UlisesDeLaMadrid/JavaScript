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
for (let i = 0;i<=10;i++){
    console.log('cuanto vale i en for: ',i)
}