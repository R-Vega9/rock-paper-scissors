// Create a var that will hold the input answer
// Create var that will hold random computer answer
// Create function that will compare both and provide feedback 

const answerArray = ['rock', 'paper', 'scissors']
const randomIndex = Math.floor(Math.random()*3)
const computerAnswer = answerArray[randomIndex]
let userAnswer;
const results = document.querySelector('#result');
const refreshButton = document.querySelector('#refresh')

const comparing = ()=>{
    let message;
    if (userAnswer === computerAnswer) {
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, its a tie!`
    }  else if (userAnswer === "rock" && computerAnswer === "scissors" || userAnswer === "paper" && computerAnswer === "rock" || userAnswer === "scissors" && computerAnswer === "paper"){
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, you won!`
    } else {
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, you lost!`
    }
    results.innerHTML = message
}

const rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', ()=>{
    userAnswer = 'rock';
    comparing()
})

const paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', ()=>{
    userAnswer = 'paper';
    comparing()
})

const scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click', ()=>{
    userAnswer = 'scissors';
    comparing()
})

refreshButton.addEventListener('click', ()=>location.reload())