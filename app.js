console.log("Hello world")

const para = document.createElement("img");
para.style.position = "absolute"
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
const car1 = document.querySelector('.jdm')
const car2 = document.querySelector('.beamer')
const car3 = document.querySelector('.nissan')
const car4 = document.querySelector('.chevorlet')
const car5 = document.querySelector('.srt')
const car6 = document.querySelector('.marty')

// sprites
const sprite = document.querySelector('.sprite')
const sprite2 = document.querySelector('.sprite2')
const sprite3 = document.querySelector('.sprite3')
const sprite4 = document.querySelector('.sprite4')
const sprite5 = document.querySelector('.sprite5')
const sprite6 = document.querySelector('.sprite6')

let availableImages = [
    "toyota.png",
      "bmw.jpg" ,
      "350.jpg" ,
      "camaro.jpg",
    "charger.jpg",
    "future.jpg"

]

let carNumber = 0

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

// controls
 
function startgame (selectedCar) {
    carNumber = selectedCar
    console.log("ED SHEEERAN")
    let mommy = ""
    let speed = 5;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    car1.style.top = windowHeight - 170

    console.log("+rawr xd"+ carNumber)
    const toNum = (pxVal) => {
        return parseInt(pxVal, 10);
    };

    const handleMovement = (e) => {
        if (carNumber == 1) {
            console.log("RAHHH")
            mommy = document.querySelector(".jdm")
        } else if (carNumber == 2){
            mommy = document.querySelector(".beamer")
        } else if (carNumber == 3){
            mommy = document.querySelector(".nissan")
        } else if (carNumber == 4){
            mommy = document.querySelector(".chevorlet")
        } else if (carNumber == 5){
            mommy = document.querySelector(".srt")
        } else if (carNumber == 6){
            mommy = document.querySelector(".marty")
        }
        
        let car1 = mommy
        let left = toNum(car1.style.left);
        let top = toNum(car1.style.top);
        console.log("James is eating a bagel" + car1)
        console.log(carNumber)


        let playerUpdate = {
            carNumber:carNumber,
            left:left,
            top:top,
        }

        holler.appInstance.notifyClients(JSON.stringify(playerUpdate))


        switch (e.key) {
            case 'ArrowLeft': 
                console.log ("arrowleft")
                 if (left <= 0) return (car1.style.left = 0)
                car1.style.left = 21
                console.log(car1)
                 car1.style.left = left - speed + 'px';
                break;
            case 'ArrowRight':
                console.log ("arrowright")
                if (left >= windowWidth) return (car1.style.left = windowWidth);
                car1.style.left = left + speed + 'px';
                break;
            case 'ArrowUp':
                console.log ("arrowup")
                if (top <= 0) return (car1.style.top = 0);
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

    document.onkeydown=handleMovement

    document.body.appendChild(para);
    
    para.src = "toyota.png";
    para.style.left = 100

}

// starting the Game

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
        sprite.onclick = ()=>{
            console.log("car clicked")
            console.log("character"+ carNumber)
            gamePanel.style.display = "block"
            introPanel.style.display = "none"
            startgame(1)
            makeCharacter()
        }

        sprite2.onclick = ()=>{
            console.log("character"+ carNumber)
            gamePanel2.style.display="block"
            introPanel.style.display = "none"
            startgame(2)
            makeCharacter()
        }

        sprite3.onclick = ()=>{
            console.log("character"+ carNumber)
            gamePanel3.style.display="block"
            introPanel.style.display = "none"
            startgame(3)
            makeCharacter()
        }

        sprite4.onclick = ()=>{
            console.log("character"+ carNumber)
            gamePanel4.style.display="block"
            introPanel.style.display = "none"
            startgame(4)
            makeCharacter()
        }

        sprite5.onclick = ()=>{
            console.log("character"+ carNumber)
            gamePanel5.style.display="block"
            introPanel.style.display = "none"
            startgame(5)
            makeCharacter()
        }

        sprite6.onclick = ()=>{
            console.log("character"+ carNumber)
            gamePanel6.style.display="block"
            introPanel.style.display = "none"
            startgame(6)
            makeCharacter()
        }
    })

    let position = window.visualViewport.width / 2


    holler.me(()=>{
        holler.onClientEvent(stringFromOthers=>{
            let incomingObject = JSON.parse(stringFromOthers)
            console.log("me (car # " + carNumber + ") got new info", incomingObject)

            // if this is not our car
            if(incomingObject.carNumber != carNumber){
                console.log("Got somebody elses position", incomingObject.left, incomingObject.top)
                // TODO: show car if not already showing
                // TODO: move car to new position
                para.style.left = incomingObject.left
                para.style.top = incomingObject.top
            // }
             }
   
        })
   
    }) 
   

})
