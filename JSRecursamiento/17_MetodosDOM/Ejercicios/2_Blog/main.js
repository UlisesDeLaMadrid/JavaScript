const blogEntries = [
  {
    image: "https://picsum.photos/900",
    title: "Los Secretos de la Cocina Italiana",
    content:
      "Explorar la cocina italiana va más allá de la pizza y la pasta.En este artículo, descubrimos los ingredientes autóctonos, las técnicas de cocción y los platos menos conocidos que definen la verdadera esencia de la cocina italiana.",
    abstract:
      "Explorar la cocina italiana va más allá de la pizza y la pasta...",
    rating: 8.75,
    fechaCreacion: "2024-04-18",
    autor: "Daniel Torres",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    image: "https://picsum.photos/1100",
    title: "Avances en la Energía Solar",
    content:
      "La energía solar ha alcanzado nuevos hitos en la última década, con avances en la eficiencia de los paneles y la reducción de costos. Analizamos cómo estos cambios están configurando el futuro de las energías renovables.",
    abstract:
      "La energía solar ha alcanzado nuevos hitos en la última década...",
    rating: 9.3,
    fechaCreacion: "2024-04-17",
    autor: "Laura Martínez",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    image: "https://picsum.photos/800",
    title: "La Revolución de la Inteligencia Artificial",
    content:
      "La inteligencia artificial está transformando industrias enteras, desde la automotriz hasta la financiera. Este artículo explora los desarrollos más recientes y cómo están influyendo en nuestras vidas cotidianas.",
    abstract:
      "La inteligencia artificial está transformando industrias enteras...",
    rating: 7.9,
    fechaCreacion: "2024-04-16",
    autor: "Sofía Hernández",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    image: "https://picsum.photos/850",
    title: "El Futuro del Trabajo Remoto",
    content:
      "El trabajo remoto se ha convertido en una parte fundamental de muchas industrias. Este artículo analiza las herramientas, técnicas y culturas que están moldeando esta nueva forma de trabajar.",
    abstract: "El trabajo remoto se ha convertido en una parte fundamental...",
    rating: 8.65,
    fechaCreacion: "2024-04-15",
    autor: "Daniel Torres",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    image: "https://picsum.photos/1050",
    title: "Secretos para un Jardín Sostenible",
    content:
      "Crear un jardín sostenible no solo es beneficioso para el medio ambiente, sino también relajante y gratificante. Descubre técnicas y consejos para mantener tu jardín verde y próspero con un impacto mínimo en la naturaleza.",
    abstract:
      "Crear un jardín sostenible no solo es beneficioso para el medio ambiente...",
    rating: 9.5,
    fechaCreacion: "2024-04-14",
    autor: "Sofía Hernández",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    image: "https://picsum.photos/950",
    title: "Explorando la Historia del Jazz",
    content:
      "El jazz es un género musical que ha influido en muchas otras formas de música a lo largo del tiempo. Este artículo explora la historia del jazz, sus figuras clave y su impacto en la música moderna.",
    abstract:
      "El jazz es un género musical que ha influido en muchas otras formas...",
    rating: 8.2,
    fechaCreacion: "2024-04-13",
    autor: "Miguel Ángel García",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];


//Blog
const createBlogCard = (entryObject) => {
    let { image, title, content, avatar, autor, rating, fechaCreacion } = entryObject;
  
    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");
  
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", image);
    cardImage.classList.add('card-img')
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", 'text-start');
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text",'text-start');
    let cardTextContent = document.createTextNode(content);
    cardText.append(cardTextContent);

    //Avatar
    let cardAvatar = document.createElement('div')
    cardAvatar.classList.add('container', 'text-start','mini-avatar-container')

    let avatarRow = document.createElement('div')
    avatarRow.classList.add('row', 'align-items-center', 'mini-avatar-row-container')

    let avatarCol = document.createElement('div')
    avatarCol.classList.add('col', 'align-items-center', 'mini-avatar-col-container')

    let avatarImg = document.createElement('img')
    avatarImg.setAttribute("src", avatar)
    avatarImg.classList.add('float-start', 'mini-avatar')

    let user = document.createElement('p')
    let userText = document.createTextNode(autor)
    user.append(userText)

    avatarCol.append(avatarImg,user)
    avatarRow.append(avatarCol)
    cardAvatar.append(avatarRow)

    //Fin Avatar

    //Rating

    let ratingContainer = document.createElement('div')
    ratingContainer.classList.add('row', 'rating-container')

    let ratingSubCont = document.createElement('div')
    ratingSubCont.classList.add('rating-subcontainer')

    let creationDate = document.createElement('p')
    let creationDateText = document.createTextNode(fechaCreacion)
    creationDate.classList.add('float-end')
    creationDate.append(creationDateText)

    let slash = document.createElement('p')
    let slashText = document.createTextNode('/')
    slash.classList.add('float-end')
    slash.append(slashText)

    let ratingP = document.createElement('p')
    let ratingText = document.createTextNode(rating)
    ratingP.classList.add('float-end')
    ratingP.append(ratingText)

    ratingSubCont.append(ratingP, slash, creationDate)
    ratingContainer.append(ratingSubCont)

    //Fin Rating

    //Button

    let buttonContainer = document.createElement('div')
    buttonContainer.classList.add('card-body', 'row', 'button-container')

    let buttonSubContainer = document.createElement('div')
    buttonSubContainer.classList.add('button-subcontainer')

    let button = document.createElement('a')
    button.classList.add('btn', 'btn-secondary', 'float-end')
    button.setAttribute('href','#')
    let buttonText = document.createTextNode('Ir al post')
    button.append(buttonText)

    buttonContainer.append(buttonSubContainer)
    buttonSubContainer.append(button)

    //Fin Button
    cardBody.append(cardTitle, cardText, cardAvatar, ratingContainer, buttonContainer);
    card.append(cardImage, cardBody);
  
    return card;
  };

  const printBlogCards = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = createBlogCard(entry);
      wrapper.append(blogCard);
    });
  };

  printBlogCards(blogEntries, 'main-posts')


//Users

  let usersCard = (entry) => {

    let {avatar, autor} = entry

    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");

    let cardAvatar = document.createElement('div')
    cardAvatar.classList.add('container', 'text-start','mini-avatar-container')

    let avatarRow = document.createElement('div')
    avatarRow.classList.add('row', 'align-items-center', 'mini-avatar-row-container')

    let avatarCol = document.createElement('div')
    avatarCol.classList.add('col', 'align-items-center', 'mini-avatar-col-container')

    let avatarImg = document.createElement('img')
    avatarImg.setAttribute("src", avatar)
    avatarImg.classList.add('float-start', 'mini-avatar')

    let user = document.createElement('p')
    let userText = document.createTextNode(autor)
    user.append(userText)

    avatarCol.append(avatarImg,user)
    avatarRow.append(avatarCol)
    cardAvatar.append(avatarRow)
    card.append(cardAvatar)

    return card
}

const printUsers = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = usersCard(entry);
      wrapper.append(blogCard);
    });
  };

printUsers(blogEntries, 'autores')

//Popular

let createPopular = (entry) => {
    let {title, abstract} = entry

    let card = document.createElement("div");
    card.classList.add("card", "mb-3");

    let cardContainer = document.createElement('div')
    cardContainer.classList.add('card-body')

    let cardTittle = document.createElement('h5')
    cardTittle.classList.add('card-title')
    let tittleText = document.createTextNode(title)
    cardTittle.append(tittleText)

    let cardPharagrph = document.createElement('p')
    cardPharagrph.classList.add('card-text')
    let pharagraphText = document.createTextNode(abstract)
    cardPharagrph.append(pharagraphText)

    let button = document.createElement('a')
    button.classList.add('btn', 'btn-secondary')
    button.setAttribute('href','#')
    let buttonText = document.createTextNode('Ir al post')
    button.append(buttonText)

    cardContainer.append(cardTittle, cardPharagrph, button)
    card.append(cardContainer)

    return card
}

const printPopularEntries = (popularArray, wrapperId) => {
    console.log(popularArray);
    let wrapper = document.getElementById(wrapperId);
    popularArray.forEach((entry) => {
      let popularEntry = createPopular(entry);
      wrapper.append(popularEntry);
    });
  };

printPopularEntries(
    blogEntries.filter((entry) => entry.rating > 9),
    "popular"
  );