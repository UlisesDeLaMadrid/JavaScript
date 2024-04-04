document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#crud')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const users = JSON.parse(localStorage.getItem('users')) ?? [] // si esta vacio, si no existe regresa array vacio
      const formData = new FormData(form)
      const entries = formData.entries()
      const data = Object.fromEntries(entries)
      data.languages = formData.getAll('languages')
      users.push(data) // pasa objeto a array
      const jsonString = JSON.stringify(users)
      localStorage.setItem('users', jsonString)
    })
  })