const myButton = document.getElementById("my-button")
const h1 = document.getElementById("big-h")
const addDataButton = document.getElementById("add-data")
const myList = document.getElementById("my-list")
const textAdded = document.getElementById("added-text")


myButton.addEventListener("click", myButtonClicked)
addDataButton.addEventListener("click", addData)

function myButtonClicked(){
    console.log("hello world")
    h1.innerText = "Moi maailma"
}

function addData() {
    let newItem = document.createElement("li")
    
    newItem.innerText = textAdded.value
    myList.appendChild(newItem)
}