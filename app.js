holler.onLoad(()=>{

console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')
const startbutton = document.querySelector('.start-button')
const introbutton = document.querySelector('.intro-field')
const sprite = document.querySelector('.sprite')



let Ebuttoncounter = 0
const gamePanel = document.querySelector('.game-panel')
// let userNameArea = gamePanel.querySelector('.user-name')

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
let velocity = 0

// document.onkeydown = (keyEvent)=>{
//     // console.log("Keypressed: " + keyEvent.key)
//     // console.log(leftbuttoncounter)
    
//     // if (keyEvent.key == "1"){
//     //     leftbuttoncounter += 1
//     // }

//     // if ( leftbuttoncounter == 1) {
//     //     const background = document.querySelector('body')
//     //     background.style["background-image"] = "url('apex.webp')"
       
//     // }
//     // console.log("Keypressed: " + keyEvent.key)
//     // console.log(rightbuttoncounter)

//     // if (keyEvent.key == "2") { 
//     //     rightbuttoncounter += 1
//     //  }

//     // if ( rightbuttoncounter == 1) {
//     //     const background = document.querySelector('body')
//     //     background.style["background-image"] = "url('blink.webp')"
       
//     // }
//     // console.log("Keypressed: " + keyEvent.key)
//     // console.log(velocity)

//     // if (keyEvent.key == "ArrowLeft"|| keyEvent.key == "ArrowRight") {
//     //     console.log ("Water")
//     //         velocity = velocity -1
//     // }




// }

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

let position = window.visualViewport.width / 2


// document.onkeydown = (keyEvent)=>{
//     console.log("Keypressed: " + keyEvent.key)
//     switch(keyEvent.key){ 
//         case "ArrowLeft":
//             velocity = velocity -1
//             break;
//         case "ArrowRight":
//             velocity = velocity +1
//             break;
//     }
//     console.log("Current velocity is", velocity)

// }

// function setPosition(player, position){
//     if(player){
//         player.style.left = position + "px"
//     }
// }

let speed = 5;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
sprite.style.top = windowHeight - 170

const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};

const handleMovement = (e) => {
    let left = toNum(sprite.style.left);
    let top = toNum(sprite.style.top);
    
    switch (e.key) {
        case 'ArrowLeft': 
        console.log ("arrowleft")
             if (left <= 0) return (sprite.style.left = 0)
            sprite.style.left = 0
            sprite.style.left = left - speed + 'px';
            break;
        case 'ArrowRight':
            console.log ("arrowright")
            if (left >= windowWidth) return (sprite.style.left = windowWidth);
            sprite.style.left = left + speed + 'px';
            break;
        case 'ArrowUp':
            console.log ("arrowup")
            if (top <= 0) return (sprite.style.top = 0);
            sprite.style.top = 30
            sprite.style.top = top - speed + 'px';
            break;
        case 'ArrowDown':
            console.log ("arrowdown")
            if (top >= windowHeight) return (sprite.style.top = windowHeight);
            sprite.style.top = top + speed + 'px';
            break;
    }
};

window.addEventListener('keydown', handleMovement);
})