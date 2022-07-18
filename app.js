console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message = "I'm walking on the Sunshine" 
    console.log(message)
    document.write(message)
}


