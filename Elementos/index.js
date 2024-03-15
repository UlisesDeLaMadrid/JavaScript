import datos from './datos.json' assert { type: 'json' } //Importar Json
import buttonCreator from './button.js' //Importar un default

document.addEventListener('DOMContentLoaded', () => {
   const parrafo = document.querySelectorAll('p')
   parrafo.forEach((p, i) => {
      const content = p.innerHTML
      p.innerHTML = content + ' ' + (i + 1)
   })
   // //++Creando elemento en HTML con JavasCript++
   // //Seleccionar contenedor
   const container = document.querySelector('body')
   // //Crear elemento
   const btn = document.createElement('a')
   // //Configurar elemento
   btn.textContent = 'Iniciar Sesión'
   btn.style.background = 'purple'
   btn.style.color = 'white'
   btn.style.border = 'dashed 2px cyan'
   btn.style.borderRadius = '10px'
   btn.setAttribute('href', '/iniciar-sesion.html')
   console.log(btn)
   // //Insertar elemento
   container.append(btn)
   console.log(datos)

   buttonCreator(
      { background: 'blue', text: 'Hola', color: 'white', url: '#' },
      container
   )
})
