const form = document.querySelector('.login-form')
form.addEventListener('submit',onForm)

function onForm(event) {
    event.preventDefault()

    const formElement = event.currentTarget.elements
    const mail = formElement.email.value
    const password = formElement.password.value

    const formData = {
        mail,
        password,
    }
       if (formData.mail === '') {
        alert("Bсе поля должны быть заполнены.")
    }
       if (formData.password === '') {
        alert("Bсе поля должны быть заполнены.")
    }
    console.log(formData)
    form.reset()
}

  

//    event.preventDefault()
    
//     const formData = new FormData(event.currentTarget)
//     console.log(formData)
//     formData.forEach((value, name) => {
//         console.log(value)
//         console.log(name)
//     })