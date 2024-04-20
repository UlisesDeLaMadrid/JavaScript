let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  /*
      1. Necesitamos una lista con los nombres completos de las personas que
        se encuentran en la data
      2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
      3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
  */

/*1. Necesitamos una lista con los nombres completos de las personas 
que se encuentran en la data*/

const fullName = (array) => {
    return array.map ((item) => {
        return {
            NombreCompleto: `${item[0]} ${item[1]}`
        }
    })
}

console.log(fullName(data))

//2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista

const olderAndYounger = (array) => {
    let comparison = array.map(element => element[2]) 
        let min = Math.min(...comparison)
        let max = Math.max(...comparison)
        console.log(`La edad minima es: ${min}`)
        console.log(`La edad maxima es: ${max}`)
        return
    };



olderAndYounger(data)

//3.- Necesitamos reestructurar la data para que quede de la siguiente forma:

const reestructured = (array) => {
    return array.map ((item) => {
        return {
            Name: item[0],
            LastName: item[1],
            Age:item[2]
        }
    })
}

console.log(reestructured(data))