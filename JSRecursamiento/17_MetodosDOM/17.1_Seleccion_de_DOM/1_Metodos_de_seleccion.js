//DOM: Document object model
console.log('Js Conectado')
/*
A partir de ahora trabajaremos con la consola que esta dentro del navegador ya que estos metodos 
solo estan presentes en el navegador
*/

//Metodos de seleccion de DOM

/*
Seleccion por ID:
    El metodo .getElementById, recibe como argumento el ID de el elemento que queremos seleccionar
    y decvuelve un elemento del DOM que representa al elemento sellecionado
*/

let kodersList = document.getElementById('koders-list')
console.log(kodersList)

/*
Seleccion por clase:
    El metodo .getElementsByClassName, recibe como argumento el nombre de una clase y devuelve todos
    los elementos del DOM que contengan esa clase dentro de su classlist, el valor de retorno 
    es un HTMLCollection.
*/

let listGroupItems = document.getElementsByClassName('list-group-item')
console.log(listGroupItems)

/*
Seleccion por tagname:
    El metodo .getElementsByTagName, recibe como argumento el nombre de una etiqueta y devuelve una lista
    de elementos con el nombre de esea etiqueta, este metodo tambien devuelve un HTMLCollection.
*/

let listItems = document.getElementsByTagName('li')
console.log(listItems)

/*
QuerySelector:
    Devuelve el primer elemento dentro del DOM que coincida con el grupo de selectores especificado
    como argumento
*/

let firstKoderItem = document.querySelector('#koders-list .list-group-item')
/*
En este caso se solicita seleccionar el elento con la clase 'list-group-item'
dentro de el elemento con el ID 'koders-list', el cual seria un elemento li que contiene un
checkbox
*/
console.log(firstKoderItem)

/*
QuerySelectorAll:
    Devuelve todos los elemento dentro del DOM y que coincida con los selectores especificados
    como argumento, este nos devuelve un 'NodeList'
*/

let koderItemsElements = document.querySelectorAll("#koders-list > .list-group-item")
/*
En este caso seleccionamos todos los lementos con la clase 'list-group-item' que se encuentren
dentro de el elemento con el ID 'koders-list'
*/
console.log(koderItemsElements)