
console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')

let Ebuttoncounter = 0
Ebutton.onclick = function() {
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Welcome to Initial D, Enter your username to continue"
    buttonMessage.style["color"] = "white"
    Ebuttoncounter += 1
    
    
    console.log("E b counter: " + Ebuttoncounter)
    console.lOG("background is ", background.style)
    const background = document.querySelector('.background-image')
    if ( Ebuttoncounter >= 2) {
        background.style["background-image"] = "url('insert.gif')"
        console.log("hi")
    }
  
}