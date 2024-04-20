const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  
    //1.- Necesito conocer la edad promedio de todos los perros

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

    //2.- Necesito obtener una lista de perros basados en el país al que pertenecen

    const dogCountry = (dogList) => {
        const dogbyCountry = {}; 
        dogList.forEach(dog => {
            const country = dog.pais; 
            if (!dogbyCountry[country]) {
                dogbyCountry[country] = []; 
            }
            dogbyCountry[country].push(dog); 
        });
        return dogbyCountry;
    }
    
    console.log(dogCountry(canes));

    //3.- Necesito una lista de los códigos postales de los perros
    
    const dogPC = (dogList) => {
        return dogList.map((item) => {
            return {
                nombre:item.nombre,
                codigoPostal:`${item.direccion.codigoPostal}`
            };
        });
    }

    console.log(dogPC(canes))

    //4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
