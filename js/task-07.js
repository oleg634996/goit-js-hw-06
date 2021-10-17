const inputLevel = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputLevel.addEventListener('input', (event) => {
     spanText.style.fontSize = event.currentTarget.value +'px'

});

 // const spanSize = event.currentTarget.value
  //   spanText.style.fontSize = `${spanSize}px`



// function js_style () {
//   document.getElementById ("table").text.style.fontSize = "14pt";  