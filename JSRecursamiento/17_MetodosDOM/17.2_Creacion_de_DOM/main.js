//Creando elementos en el DOM
const koders = ["Jair", "Daniel", "Maria", "Natalia", "Isra"];

/*
CreateElement:
    Para crear un elemento en el DOM tenemos el metodo .createElement('tagname') que recibe
    como argumento el tag del elemento que queremos crear, este ultimo tiene que ir entre comillas
*/

let paragraph = document.createElement('P')
console.log(paragraph)

/*
CreateTextNode:
    Este metodo nos sirve para crear un texto .createTextNode('texto') y nos devuelve un nodo de 
    texto
*/

let koderName = document.createTextNode('Ulises')
console.log(koderName)

/*
SetAttribute:
    Este metodo nos sirve para insertar un atributo en un elemeto indicado
    element.setAttribute('nombre', 'valor'), el elemento al que especificaremos el atributo ya debe 
    de estar creado y si este ya tiene un atributo con un nombre similar el valor se actualiza
    de no existir ese atributo uno nuevo es creado.
*/

let checkbox = document.createElement('input')
//Creamos un elemento de tipo input
checkbox.setAttribute('type', 'checkbox')
/*Le agregamos un atributo de nombre 'type' con un valor de 'checkbox' esto hara que nuestro imput 
sea un checkbox*/
console.log(checkbox)

/*
Append:
    Este metodo srive para insertar un elemento dentro de otro elmento, este metodo funciona en
    cualquier elemetno de DOM parentElement.append(childElement) recibe como argumento el o los 
    elementos a insertar
*/

paragraph.append(koderName)
/*
En este caso insertaremos el texto creado 'koderName' (Nuestro elemento hijo) dentro de nuestro
tag 'p' que es paragraph (Nuestro elemento padre) puedes comentar y descomentar el codigo
anterior para que aprecies el cambio dentro de la etiqueta 'p'
*/

/*
Hasta el momento solo hemos estado creando elementos dentro de nuestro DOM que solo se muestran
en la consola, pero el metodo append tambien sirve para mostrar estos elementos dentro de nuestro
navegador, siempre y cuando los incertemos en un contenedor previamente creado en nuestro archivo
HTML, asi sea el mismo <body>
*/

/*
Primero seleccionamos nuestro contenedor en este caso es un div con un id 'card-wrapper' y lo
asignamos a una variable 'container'
*/
let container = document.getElementById('card-wrapper')
console.log(container)
/*
insertamos nuestro elemento paragraph dentro de nuestro contenedor con el metodo append, de este modo
sera visible en nuestro navegador
*/
container.append(paragraph)

/*
Con lo aprendido anteriormente vamos a crear una funcion que haga tarjetas en nuestro navegador
estas contendran un titulo, un parrafo y un boton
*/

const createCard = (title) => {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card", "mb-3");
    /*classlist es la lista de clases del elemento, y el método add() permite agregar una clase adicional*/
  
    let contentElement = document.createElement("div");
    contentElement.classList.add("card-body");
  
    let cardTitle = document.createElement("h3");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardParagraph = document.createElement("p");
    let cardParagraphText = document.createTextNode("Card text");
    cardParagraph.append(cardParagraphText);
  
    let cardButton = document.createElement("button");
    let cardButtonText = document.createTextNode("Click me!");
    cardButton.classList.add("btn", "btn-dark");
    cardButton.append(cardButtonText);
  
    contentElement.append(cardTitle, cardParagraph, cardButton);
    cardBody.append(contentElement);
  
    return cardBody;
  };
  
  //Seleccionamos nuestro contenedor donde insertaremos nuestros elementos
  let cardWrapper = document.getElementById("card-wrapper");
  
  /*
  Ahora con el array que tenemos de koders al principio del archivo vamos a crear una tarjeta
  por cada elemento dentro del array con sus respectivos nombres con el metodo .forEach()
  */
  koders.forEach((koder) => {
    let newCard = createCard(koder);
    cardWrapper.append(newCard);
  });