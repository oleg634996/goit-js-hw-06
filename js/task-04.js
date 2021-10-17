let counterValue = 0

const valueNumber = document.querySelector('#value')

const btnPlus = document.querySelector('button[data-action="increment"]')
btnPlus.addEventListener('click', () => {
    counterValue += 1
    valueNumber.textContent = counterValue
})

const btnMinus = document.querySelector('button[data-action="decrement"]')
btnMinus.addEventListener('click', () => {
    counterValue -= 1
    valueNumber.textContent = counterValue
})


    
    




