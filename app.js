console.log("Hello world")

console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')
const startbutton = document.querySelector('.start-button')
let gamePanel = document.querySelector(".game-panel")
let introPanel = document.querySelector(".intro-panel")
let userNameArea = gamePanel.querySelector(".user-name-area")
const introbutton = document.querySelector('.intro-field')

let availableImages = [
    "toyota.png",
      "bmw.jpg" ,
]

function makeCharacter(id, image){
    let imageTag = document.createElement("img")
    imageTag.src = image
    imageTag.setAttribute("class", "person")

    let character = {
        id:id,
        imageName:image,
        image:imageTag,
        velocity:0,
        position:(window.visualViewport.width / 2)
    }

    gamePanel.appendChild(imageTag)
    characters.push(character)

    return character
}

let player;
let characters = [];
let myName = "??"

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
        const button = document.querySelector('.start-button')
        button.style.display = "inline"
    }
}
  
holler.onLoad(()=>{

    holler.me((user)=>{
        gamePanel.style.display="none"

        availableImages.forEach(image=>{
            let button = document.createElement("img")
            button.classList = "character-option"
            button.src = image

            startbutton.onclick = ()=>{
                startGame(image)
            }

            introPanel.appendChild(button)
        })

        console.log("user stuff is", user)
        userNameArea.textContent = user.name
        myName = user.name
    })

    holler.onClientEvent(message=>{
        console.log(`Client event received: ${message}`)
        let playerUpdate = JSON.parse(message)

        if(playerUpdate.id != player?.id){

            let otherPlayer = characters.find(o=>o.id == playerUpdate.id)
            if(!otherPlayer){
                otherPlayer = makeCharacter(playerUpdate.id, playerUpdate.imageName)
            }

            otherPlayer.position = playerUpdate.position
            otherPlayer.velocity = playerUpdate.velocity
            movePlayerImage(otherPlayer)
        }
    })
    
    function startGame(imageName){
        player = makeCharacter(myName + "-" + imageName, imageName)
        const background = document.querySelector('body')
        background.style["background-image"] = "none"
        const buttonMessage = document.querySelector('.start-message')
        gamePanel.style.display = "block"
        introbutton.style.display = "none"
        startbutton.style.display = "none"
        Ebutton.style.display = "none"
        buttonMessage.style.display = "none"
        console.log("player is", player)
    }

    function movePlayerImage(player){
        if(player){
            player.image.style.left = player.position + "px"
        }
    }

    const doNextFrame = ()=>{
        
        characters.forEach(character=>{
            character.position = character.position + character.velocity
            movePlayerImage(character)
        })

        setTimeout(doNextFrame)
    }

    doNextFrame()



    const sendPosition = ()=>{
        if(player){
            holler.appInstance.notifyClients(JSON.stringify({
                id:player.id,
                position:player.position,
                velocity:player.velocity,
                imageName:player.imageName
            }))
        }
        setTimeout(sendPosition, 100)
    }
    sendPosition()

    let position = window.visualViewport.width / 2

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

})