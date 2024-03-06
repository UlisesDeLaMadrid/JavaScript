const print = (message) => console.log(message)
const formato = (str,callback) => {
    const formatted = str.split('').reverse().join(' ')
    return formatted
}
print(formato('Hola, Mundo!'))

const colores = ['blanco', 'azul', 'verde', 'amarillo']

colores.forEach((element)=>{
    const result = element.split('').reverse().join(' ')
    return console.log(result)})
