console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message = "Im walking on the sunshine"
    console.log(message)
    document.write(message)
}