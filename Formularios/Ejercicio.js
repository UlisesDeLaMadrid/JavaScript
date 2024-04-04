document.addEventListener('DOMContentLoaded', () => {
   const cont = document.querySelector('body')
   const solicitarDatos = async () => {
      const response = await fetch(
         'https://jsonplaceholder.typicode.com/posts'
      ).then((res) => res.json())
      response.forEach((posts) => {
         const id = document.createElement('ul')
         const userId = document.createElement('li')
         const title = document.createElement('li')
         const body = document.createElement('li')

         id.textContent = `"id: " ${posts.id}`
         userId.textContent = `"UserID: " ${posts.userId}`
         title.textContent = `"Title: " ${posts.title}`
         body.textContent = `"Body: " ${posts.body}`

         cont.append(id)
         id.append(userId)
         id.append(title)
         id.append(body)
      })
      return response
   }
   solicitarDatos()
})
