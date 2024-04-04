document.addEventListener ('DOMContentLoaded',() => {
    const solicitarDatos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/post').then((respuesta) => respuesta.json())
        console.log(response)
        return response
    }
    solicitarDatos()
})
