const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
    direccion: {
      calle: "Calle del Parque",
      numero: 23,
      colonia: "San José",
      codigoPostal: 78900,
    },
  },
  {
    nombre: "Bella",
    tipo: "Perro",
    edad: 6,
    vacunado: true,
    direccion: {
      calle: "Avenida Libertad",
      numero: 56,
      colonia: "El Bosque",
      codigoPostal: 78500,
    },
  },
  {
    nombre: "Max",
    tipo: "Perro",
    edad: 3,
    vacunado: false,
    direccion: {
      calle: "Callejón del Puente",
      numero: 12,
      colonia: "Villa Hermosa",
      codigoPostal: 78850,
    },
  },
  {
    nombre: "Rocky",
    tipo: "Perro",
    edad: 2,
    vacunado: false,
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];

/*
      1.- Necesitamos obtener una lista con los objetos de todos los canes,
        pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
      2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
      3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro,
        en el siguiente formato:
          "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
      4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
      5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el
        valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si",
        si el valor viene en false, cambiarlo a "No")
      6.- Necesitamos una nueva lista con únicamente el nombre de cada can
  */


//1
const toDogAge = (dogList) => {
    return dogList.map((item) => {
        return {
            ...item,
            edad: `${item.edad * 7} Años perrunos`
        };
    });
}

console.log(toDogAge(canes));

//2
const vaccDog = (dogList) => {
    let vacunados = 0
    dogList.forEach(item => {
        if (item.vacunado === true) {
            vacunados++
        }
    });
    console.log(`La cantidad de perros vacunados es: ${vacunados}`)
}

vaccDog(canes)

//3
const dogAddress = (dogList) => {
    let dogTag = dogList.map((item,index,array) => {
        let address = {}
        address = `${item.nombre} : ${item.direccion.calle} #${item.direccion.numero},
        ${item.direccion.colonia}, ${item.direccion.codigoPostal}`
        return address
    })
    return dogTag
}

console.log(dogAddress(canes))


//4
const averageDogAge = (dogList) => {
    let edades = 0
    dogList.forEach (item => {
        edades += item.edad
    })
    edades = edades / dogList.length
    console.log(`La edad promedio de los perritos es: ${edades}`)
    return
}

averageDogAge(canes)


//5
const vaccYesNo = (dogList) => {
    let newList = dogList.map (item => {
        let newDog = {}
        if (item.vacunado === true){
            newDog = {...item,
            vacunado: 'si'}
        } else {
            newDog = {...item,
                vacunado: 'no'}
        }
        return newDog
    })
    return newList
}

console.log(vaccYesNo(canes))


//6
const nameList = (dogList) => {
    let names = dogList.map ((items) => {
        let nameList = {}
        nameList = items.nombre
        return nameList
    })
    return names
}
console.log(nameList(canes))