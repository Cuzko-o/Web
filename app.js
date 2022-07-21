
console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')

let Ebuttoncounter = 0
Ebutton.onclick = function() {
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Welcome to Initial D, Enter your username to continue"
    buttonMessage.style["color"] = "white"
    Ebuttoncounter += 1

    const background = document.querySelector('body')
    if ( Ebuttoncounter >= 2) {
        background.style["background-image"] = "url('insert.gif')"
        const buttonMessage = document.querySelector('.start-message')
        buttonMessage.textContent = "Welcome, Press Start!"
        buttonMessage.style["color"] = "white"
    }
  
}

