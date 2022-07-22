
console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')



let Ebuttoncounter = 0

Ebutton.onclick = function() {
    const background = document.querySelector('body')
    background.style["background-image"] = "url('kinotabi.gif')"
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Welcome to Initial D, Enter your username to continue"
    buttonMessage.style["color"] = "white"
    Ebuttoncounter += 1

    
    if ( Ebuttoncounter >= 2) {
        background.style["background-image"] = "url('insert.gif')"
        const buttonMessage = document.querySelector('.start-message')
        buttonMessage.textContent = "Welcome, Press Start!"
        buttonMessage.style["color"] = "white"
        const button = document.createElement('button')
        button.style.display = "inline"
    }
  
}
let leftbuttoncounter = 0
let rightbuttoncounter = 0

document.onkeydown = (keyEvent)=>{
    console.log("Keypressed: " + keyEvent.key)
    console.log(leftbuttoncounter)
    
    if (keyEvent.key == "a"|| keyEvent.key == "ArrowLeft"){
        leftbuttoncounter += 1
    }

    if ( leftbuttoncounter == 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('apex.webp')"
       
    }
    console.log("Keypressed: " + keyEvent.key)
    console.log(rightbuttoncounter)

    if (keyEvent.key == "d"|| keyEvent.key == "ArrowRight") { 
        rightbuttoncounter += 1
     }

    if ( rightbuttoncounter == 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('blink.webp')"
       
    }

}

const menu = ["main.gif", "kinotabi.gif", "insert.gif", "apex.webp", "blink.webp"]


