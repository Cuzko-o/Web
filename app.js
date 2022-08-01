
console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')
const startbutton = document.querySelector('.start-button')
const dbutton = document.querySelector('.retrogame-start-wrapper')
const introbutton = doument.querySelector('.intro-field')



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
    background.style["background-image"] = "url('solar.jpg')"
    gamePanel.style.display = "block"
    introbutton.style.display = "none"
}

let velocity = 0

document.onkeydown = (keyEvent)=>{
    console.log("Keypressed: " + keyEvent.key)
    switch(keyEvent.key){
        case "a": 
        case "ArrowLeft":
            velocity = velocity -1
            break;
        case "d": 
        case "ArrowRight":
            velocity = velocity +1
            break;
    }
    console.log("Current velocity is", velocity)

}

function setPosition(player, position){
    if(player){
        player.style.left = position + "px"
    }
}