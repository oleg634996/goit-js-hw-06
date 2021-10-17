const randomColor = document.querySelector(".widget")
randomColor.addEventListener('click',onButton)
const spanColor = document.querySelector('.color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButton(event) {
  spanColor.textContent = getRandomHexColor()

  if (!event.target.classList.contains('change-color')) {
    return
  }
  return(document.body.style.background =getRandomHexColor() )
}