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
    if (formData.mail===''||formData.password === '') {
        alert("Bсе поля должны быть заполнены.")
    }
    if (formData.mail && formData.password  !== '') {
        console.log(formData)
    }
  
    form.reset()
}

  

