/*
Son metodos que esperan a que ocurra una accion (escuchar) para ejecutar una reaccion

Quien?: Quien va a escuchar el evento
Cuando?: Cuando se va a ejecutar el evento
Que?: Que va a ejecutar el evento

sintaxis:

    elemento.addEventListener('tipo de evento', funcion que ejecutara la accion)
*/

//Primero necesitamos obtener el elemento ene sta caso un button
let testButton = document.getElementById("test-button");

//Creamos nuestra funcion de evento el cual sera en este caso 'click'
testButton.addEventListener("click", () => {
//Al hacer click en el boton 'test-button' ejecutara un 'alert' 
    alert("hola koders!");
});


//Ahora seleccionamos un elemento de un input de tipo text que sera 'quien' escuchara el evento
let titleInput = document.getElementById("title-input");

/*
Creamos la funcion que sera el 'cuando' se va a ejecutar la accion, en este caso es un evento de tipo
keyup
*/
titleInput.addEventListener("keyup", (event) => {
/*
Dentro de la funcion sera el 'que' va a ejecutar nuestro evento, que sera recibir lo que escribimos
dentro de nuestro input 'title-input' y mostrarlo en el h1 con el id 'titulo'
*/
    let text = event.target.value;
    document.getElementById("title").innerText = text;
  });