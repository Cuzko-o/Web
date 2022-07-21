
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
let leftbuttoncounter = 0
let rightbuttoncounter = 0

document.onkeydown = (keyEvent)=>{
    console.log("Keypressed: " + keyEvent.key)
    console.log(leftbuttoncounter)
    switch(keyEvent.key){
        case "a": 
        leftbuttoncounter += 1
        break;
        case "ArrowLeft":
            leftbuttoncounter += 1
            break;
    }

    if ( leftbuttoncounter = 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('apex.webp')"
       
    }
document.onkeydown = (keyEvent2)=>{
    console.log("Keypressed: " + keyEvent2.key)
    console.log(rightbuttoncounter)
    switch(keyEvent2.key){
        case "d": 
        rightbuttoncounter += 1
        break;
        case "ArrowRight":
            rightbuttoncounter += 1
            break;
    }

    if ( rightbuttoncounter = 1) {
        const background = document.querySelector('body')
        background.style["background-image"] = "url('blink.webp')"
       
    }


}


}

