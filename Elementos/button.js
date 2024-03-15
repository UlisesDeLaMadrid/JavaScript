//Creador de botones
export default ({background = 'purple', text = 'Inicio', color = 'white', url = '#'}, cont) => {
    const btn = document.createElement('a')
    btn.style.color = color
    btn.style.background = background
    btn.style.border = 'dashed 2px cyan'
    btn.style.borderRadius = '5px'
    btn.textContent = text
    btn.setAttribute('href', url)
    cont.append(btn)
}