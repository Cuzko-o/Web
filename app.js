holler.onLoad(()=>{

console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')
const startbutton = document.querySelector('.start-button')
const introbutton = document.querySelector('.intro-field')



let Ebuttoncounter = 0
const gamePanel = document.querySelector('.game-panel')
let userNameArea = gamePanel.querySelector('.user-name')

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
        const button = document.querySelector('.start-button')
        button.style.display = "inline"
    }
  
}
let leftbuttoncounter = 0
let rightbuttoncounter = 0

document.onkeydown = (keyEvent)=>{
    console.log("Keypressed: " + keyEvent.key)
    console.log(leftbuttoncounter)
    
    if (keyEvent.key == "1"){
        leftbuttoncounter += 1
    }

    if ( leftbuttoncounter == 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('apex.webp')"
       
    }
    console.log("Keypressed: " + keyEvent.key)
    console.log(rightbuttoncounter)

    if (keyEvent.key == "2") { 
        rightbuttoncounter += 1
     }

    if ( rightbuttoncounter == 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('blink.webp')"
       
    }

}

startbutton.onclick = function() {
    const background = document.querySelector('body')
    background.style["background-image"] = "none"
    const buttonMessage = document.querySelector('.start-message')
    gamePanel.style.display = "block"
    introbutton.style.display = "none"
    startbutton.style.display = "none"
    Ebutton.style.display = "none"
    buttonMessage.style.display = "none"
    
}

})