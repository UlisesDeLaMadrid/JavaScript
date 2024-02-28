function imprimir(name, lastName /*Parametros el orden importa*/) {
   /*Cuerpo de la funcion*/
   console.log(name, lastName);
}
imprimir("Ulises", "De la Madrid Lázaro");

function imprimir2({ name, lastName }) {
   //En los parametros se declararon objetos por eso las llaves
   console.log(name, lastName);
}
imprimir2({ lastName: "De la Madrid", name: "Ulises" });
//En la linea anterior no importa en que orden introducimos los paramatros al mandar llamar la funcion, ya que al declararla dentro de ella se especifica que primero se imprimira el nombre y despues el apellido

function imprimir3(props) {
   const { age, ...menos } = props; //Esto hace que se imprima todo menos la edad despues de los ... se declara una palabra que sera lo que se asignara en el console log
   console.log(menos);
}
imprimir3({
   name: "ulises",
   lastName: "De la Madrid",
   age: "34",
   gender: "Masculino",
   height: "1.70",
   weight: "80kg"
});
const perro = "amigo";

function suma(a, b) {
   let resultado = a + b;
   console.log(resultado);
}
suma(34, 6);

let num = 0;
function counter() {
   if (num >= 10) {
      return;
   }
   num = num + 1;
   console.log(num);
   counter();
}

counter();

const saludo = function saludo(name) {
   if (!name) return "El campo esta vacio";
   const saludoCompleto = `Hola ${name}!, mucho gusto.`;
   return saludoCompleto;
};

console.log(saludo());
console.log(saludo("Ulises"));
