const users = [
  {
    name: "Alice",
    lastname: "Johnson",
    age: 28,
    gender: "Female",
    country: "USA",
  },
  {
    name: "Bob",
    lastname: "Smith",
    age: 32,
    gender: "Male",
    country: "Canada",
  },
  {
    name: "Carlos",
    lastname: "Gomez",
    age: 24,
    gender: "Male",
    country: "Mexico",
  },
  {
    name: "Daniela",
    lastname: "Martinez",
    age: 30,
    gender: "Female",
    country: "Colombia",
  },
  {
    name: "Erik",
    lastname: "Svensson",
    age: 29,
    gender: "Male",
    country: "Sweden",
  },
  {
    name: "Fiona",
    lastname: "O'Donnell",
    age: 35,
    gender: "Female",
    country: "Ireland",
  },
  {
    name: "Gautam",
    lastname: "Patel",
    age: 27,
    gender: "Male",
    country: "India",
  },
  {
    name: "Hana",
    lastname: "Kim",
    age: 22,
    gender: "Female",
    country: "South Korea",
  },
  {
    name: "Ivan",
    lastname: "Petrov",
    age: 34,
    gender: "Male",
    country: "Russia",
  },
  {
    name: "Julia",
    lastname: "Santos",
    age: 25,
    gender: "Female",
    country: "Brazil",
  },
];

/*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */


//1
/*
Necesitamos obtener el "name" y el "lastname" de cada objeto en nuestro array para comformar el nombre completo
probablemente con ".this" y un ciclo for para ir de uno en uno obteniendo lo que se necesia
*/

const fullName = (nameList) => {
    for (let i = 0;i < nameList.length;i++){
        const firstName = nameList[i].name
        const lastName = nameList[i].lastname
        let newList = []
        newList.push(firstName + " " + lastName)
        console.log(newList)
        
    }
    return
}

fullName(users)


//2
/*
Necesitamos acceder a el valor de "gender"  de cada uno de los objetos dentro de nuestro "array" e imprimir
solo los que son "male"
*/

const ifMale = (nameList) => {
    for (let i = 0;i < nameList.length;i++){
        
        if (nameList[i].gender === 'Male'){
            let maleList = []
            maleList.push(nameList[i])
            console.log(maleList)
        }
    }
    return
}
ifMale(users)


//3
/*
Similar al ejercicio 2 pero esta vez para "Female"
*/
const ifFemale = (nameList) => {
    for (let i = 0;i < nameList.length;i++){
        
        if (nameList[i].gender === 'Female'){
            let femaleList = []
            femaleList.push(nameList[i])
            console.log(femaleList)
        }
    }
    return
}
ifFemale(users)


//4
const averAge = (nameList) => {
  let total = 0
  for (let i = 0;i < nameList.length;i++){
    total += nameList[i].age
  }
  const average = total / nameList.length
  console.log('La edad promedio es de: ', average)
  return
}

averAge(users)

//5
const older = (nameList) => {
  const ages = []
  for (let i = 0;i < nameList.length;i++){
    ages.push(nameList[i].age)
  }
  let sortedAges = ages.sort((a, b) => a - b)
  const ultimo = sortedAges[sortedAges.length - 1]
  console.log('La persona con mas edad tiene', ultimo, 'años')
  return
}
older(users)


//6
const younger = (nameList) => {
  const ages = []
  for (let i = 0;i < nameList.length;i++){
    ages.push(nameList[i].age)
  }
  let sortedAges = ages.sort((a, b) => a - b)
  const primero = sortedAges[0]
  console.log('La persona con menos edad tiene', primero, 'años')
  return
}
younger(users)
