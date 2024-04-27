let personButton = document.getElementById('submit')

personButton.addEventListener('click', (event)=> {
    event.preventDefault()
    console.log('click')

    let inputForm = document.querySelectorAll('#form-person input')
    console.log(inputForm)
    
    let userObject = {}
    inputForm.forEach((input)=>{
        let key = input.name
        let value = input.value
        userObject[key] = value
    })

    let createUserList = (userObject) => {
    
        let unorderedList = document.createElement('ul');
        unorderedList.classList.add('list-group', 'mt-3');
    
       
        Object.values(userObject).forEach((value, index) => {
            let listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            let listText = document.createTextNode(`${value}`);
            listItem.append(listText);
            unorderedList.append(listItem);
        });
        let listContainer = document.getElementById('list-container')
        listContainer.append(unorderedList)
        return listContainer
    };
      
    
    createUserList(userObject)
    console.log(userObject)
})