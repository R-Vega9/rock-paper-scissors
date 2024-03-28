// Create a var that will hold the input answer
// Create var that will hold random computer answer
// Create function that will compare both and provide feedback 

const answerArray = ['rock', 'paper', 'scissors']
const randomIndex = Math.floor(Math.random()*3)
const computerAnswer = answerArray[randomIndex]
const results = document.querySelector('#result');
const refreshButton = document.querySelector('#refresh')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const rockButton = document.querySelector('#rock')


const handleButtonClick = (event) => {
    userAnswer = event.target.id;
    comparing(userAnswer);
    console.log(event)
};

const comparing = (userAnswer)=>{
    let message;
    if (userAnswer === computerAnswer) {
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, its a tie!`
    }  else if (userAnswer === "rock" && computerAnswer === "scissors" || userAnswer === "paper" && computerAnswer === "rock" || userAnswer === "scissors" && computerAnswer === "paper"){
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, you won!`
    } else {
        message = `You chose ${userAnswer} and the computer chose ${computerAnswer}, you lost!`
    }
    results.innerHTML = message
    scissorsButton.removeEventListener('click', handleButtonClick);
    paperButton.removeEventListener('click', handleButtonClick);
    rockButton.removeEventListener('click', handleButtonClick);
}

rockButton.addEventListener('click', handleButtonClick);
paperButton.addEventListener('click', handleButtonClick);
scissorsButton.addEventListener('click', handleButtonClick);
refreshButton.addEventListener('click', ()=>location.reload())