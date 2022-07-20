
console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')

Ebutton.onclick = function() {
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Welcome to Initial D, Enter your username to continue"
    buttonMessage.style["color"] = "white"
}
