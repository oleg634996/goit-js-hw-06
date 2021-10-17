const textInput = document.querySelector("#validation-input")

const attribute = Number(textInput.getAttribute("data-length"))


textInput.addEventListener("blur", () => {

    if (attribute === textInput.value.length) {
        return textInput.classList.add("valid"),
               textInput.classList.remove("invalid");
    } 
        return textInput.classList.add("invalid"),
               textInput.classList.remove("valid");
 })     
    







    
