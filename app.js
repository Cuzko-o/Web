console.log("Hello world")

console.log("document is ", document)
const Ebutton = document.querySelector('.enter-button')
const startbutton = document.querySelector('.start-button')
const introbutton = document.querySelector('.intro-field')

// Game Panels
let gamePanel = document.querySelector(".game-panel")
let gamePanel2 = document.querySelector(".game-panel2")
let gamePanel3 = document.querySelector(".game-panel3")
let gamePanel4 = document.querySelector(".game-panel4")
let gamePanel5 = document.querySelector(".game-panel5")
let gamePanel6 = document.querySelector(".game-panel6")

let introPanel = document.querySelector(".intro-panel")
// let userNameArea = gamePanel.querySelector(".user-name-area")

// Cars
const car1 = document.querySelector('.sprite')
const car2 = document.querySelector('.sprite2')
const car3 = document.querySelector('.sprite3')
const car4 = document.querySelector('.sprite4')
const car5 = document.querySelector('.sprite5')
const car6 = document.querySelector('.sprite6')

let availableImages = [
    "toyota.png",
      "bmw.jpg" ,
      "350.jpg" ,
      "camaro.jpg",
    "charger.jpg",
    "future.jpg"

]

let popcorn = 0

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

    // gamePanel.appendChild(imageTag)
    // characters.push(character)

    return character
}

availableImages.forEach(
    function(currentimg){
        makeCharacter(currentimg)
    }
)


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

    gamePanel.style.display="none"
    gamePanel2.style.display="none"
    gamePanel3.style.display="none"
    gamePanel4.style.display="none"
    gamePanel5.style.display="none"
    gamePanel6.style.display="none"
    holler.me((user)=>{

        startbutton.onclick = ()=>{
            console.log("TODO: make the player options show")
            const background = document.querySelector('body')
            background.style["background-image"] = "none"
            const buttonMessage = document.querySelector('.start-message')
            introPanel.style.display = "block"
            introbutton.style.display = "none"
            startbutton.style.display = "none"
            Ebutton.style.display = "none"
            buttonMessage.style.display = "none"
        }
        car1.onclick = ()=>{
            popcorn = 1
            console.log("character"+ popcorn)
            gamePanel.style.display = "block"
            introPanel.style.display = "none"
            makeCharacter
        }

        car2.onclick = ()=>{
            popcorn = 2
            console.log("character"+ popcorn)
            gamePanel2.style.display="block"
            introPanel.style.display = "none"
            makeCharacter
        }

        car3.onclick = ()=>{
            popcorn = 3
            console.log("character"+ popcorn)
            gamePanel3.style.display="block"
            introPanel.style.display = "none"
            makeCharacter
        }

        car4.onclick = ()=>{
            popcorn = 4
            console.log("character"+ popcorn)
            gamePanel4.style.display="block"
            introPanel.style.display = "none"
            makeCharacter
        }

        car5.onclick = ()=>{
            popcorn = 5
            console.log("character"+ popcorn)
            gamePanel5.style.display="block"
            introPanel.style.display = "none"
            makeCharacter
        }

        car6.onclick = ()=>{
            popcorn = 6
            console.log("character"+ popcorn)
            gamePanel6.style.display="block"
            introPanel.style.display = "none"
            makeCharacter
        }

        //     //     introPanel.appendChild(button)
        //     // })

        //     // console.log("user stuff is", user)
        //     // userNameArea.textContent = user.name
        //     // myName = user.name
        // })

    })


    let position = window.visualViewport.width / 2

    if (popcorn >= 0){
        let speed = 5;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
car1.style.top = windowHeight - 170

const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};

const handleMovement = (e) => {
    let left = toNum(car1.style.left);
    let top = toNum(car1.style.top);
    
    switch (e.key) {
        case 'ArrowLeft': 
        console.log ("arrowleft")
             if (left <= 0) return (car1.style.left = 0)
            car1.style.left = 0
            car1.style.left = left - speed + 'px';
            break;
        case 'ArrowRight':
            console.log ("arrowright")
            if (left >= windowWidth) return (car1.style.left = windowWidth);
            car1.style.left = left + speed + 'px';
            break;
        case 'ArrowUp':
            console.log ("arrowup")
            if (top <= 0) return (sprite.style.top = 0);
            car1.style.top = 30
            car1.style.top = top - speed + 'px';
            break;
        case 'ArrowDown':
            console.log ("arrowdown")
            if (top >= windowHeight) return (car1.style.top = windowHeight);
            car1.style.top = top + speed + 'px';
            break;
    }
};


    }



}) 