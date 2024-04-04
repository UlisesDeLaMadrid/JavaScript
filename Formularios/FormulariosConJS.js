document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#crud')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form)
      const entries = formData.entries()
      /* let obj = {}
      for (item of entries) {
        obj[item[0]] = item[1]
      } */
      const data = Object.fromEntries(entries)
      data.languages = formData.getAll('languages')
      console.log("🚀 ~ data:", data)
    })
  })
  