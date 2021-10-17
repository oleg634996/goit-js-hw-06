const textSpan = document.querySelector('#name-output')

const textInput = document.querySelector('#name-input')
textInput.addEventListener('input',onEventInputAndSpan)

function onEventInputAndSpan() {
    if (textInput.value === ''){
        textSpan.textContent = 'Anonymous'
    }
    else {
        textSpan.textContent = textInput.value
    }
}       