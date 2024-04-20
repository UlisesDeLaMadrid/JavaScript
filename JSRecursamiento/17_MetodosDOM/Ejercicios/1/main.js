//Crear una lista de koders, usando el siguiente array:

let koders = [
    {
        name:"Israel",
        lastname:"Salinas Martínez"
    },
    {
        name:"Ulises",
        lastname:"De la Madrid Lazaro"
    },
    {
        name:"Pedro",
        lastname:"Morales"
    },
    {
        name:"Jose",
        lastname:"Sabino"
    },
    {
        name:"Paul",
        lastname:"McCartney"
    },
    {
        name:"John",
        lastname:"Lennon"
    },
    {
        name:"Ringo",
        lastname:"Star"
    },
    {
        name:"George",
        lastname:"Harrison"
    },
    {
        name:"David",
        lastname:"Bowie"
    }
]

let unorderedList = document.createElement('ul')
unorderedList.classList.add('list-group')

let createList = (koder) => {
    let listContent = document.createElement('li')
    listContent.classList.add('list-group-item')
    let listText = document.createTextNode(`${koder.name} ${koder.lastname}`)
    listContent.append(listText)
    return listContent
}

koders.forEach((koder) => {
    let fullName = createList(koder)
    unorderedList.append(fullName)
})

let cardWrapper = document.getElementById("card-wrapper");
cardWrapper.append(unorderedList);


