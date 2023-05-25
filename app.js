const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let computer 
const possibleChoices = document.querySelectorAll('button')
let user
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    user=e.target.id
    userChoice.innerHTML = user
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    // console.log(randomNumber)
    if(randomNumber === 0)
    computer ='rock'
    if(randomNumber === 1)
    computer ='paper'
    if(randomNumber === 2)
    computer ='scissors'

    computerChoice.innerHTML = computer;
    getResults()
}

function getResults(){
    if(computer === user)
    result = "it's a draw!"

    if(computer === 'rock' && user === 'scissors')
    result = 'you lost!'
    if(computer === 'paper' && user === 'rock')
    result = 'you lost!'
    if(computer === 'scissors' && user === 'paper')
    result = 'you lost!'
    
    if(user=== 'rock' && computer === 'scissors')
    result = 'you won!'
    if(user=== 'paper' && computer === 'rock')
    result = 'you won!'
    if(user=== 'scissors' && computer === 'paper')
    result = 'you won!'

    resultDisplay.innerHTML = result
}