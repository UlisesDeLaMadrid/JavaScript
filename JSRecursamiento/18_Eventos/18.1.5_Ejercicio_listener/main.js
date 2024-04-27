let checkbox = document.querySelectorAll("input");
console.log(checkbox);

checkbox.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementsByClassName('bg-primary')
    element.classList.add("d-none");
  });
});

//d-none para esconder un elemento con bootstrap
//Para setear un atributo nuevo en un elemento de HTMl se utiliza 'data-nombre-personalizado'
//Y para acceder a el mediante javascript se tiene que escribir en camelCase 'nombrePersonalizado' 
//esto es mediante .dataset