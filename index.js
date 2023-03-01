const Choices = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors'
}

const gameHeader = document.querySelector('.game-result');
const scoreHeader = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

function game() {
  const computerChoice = getComputerChoice();
  const playerChoice = this.id;

  gameHeader.textContent = playRound(playerChoice, computerChoice);
  scoreHeader.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  const playerWinCondition = (playerChoice === Choices.Rock && computerChoice === Choices.Scissors) ||
    (playerChoice === Choices.Paper && computerChoice === Choices.Rock) ||
    (playerChoice === Choices.Scissors && computerChoice === Choices.Paper)

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  else if (playerWinCondition) {
    playerScore++;
    return `You win! ${capitalize(playerChoice)} beats ${computerChoice}`;
  }

  else {
    computerScore++;
    return `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
  }
}

function getGameResultMessage() {
  if (playerScore === computerScore)
    return "It's a tie! 👔";

  else if (playerScore > computerScore)
    return 'You win!!! 😳'

  else
    return 'You lose! 😵'
}

function getComputerChoice() {
  const choicesList = [Choices.Rock, Choices.Paper, Choices.Scissors];
  const randomChoiceIndex = Math.floor(Math.random() * choicesList.length);

  return choicesList[randomChoiceIndex];
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function printRoundResult(playerChoice, computerChoice, roundResult) {
  console.log("**************************************************");
  console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}`);
  console.log(roundResult);
}

function printFinalResults() {
  console.log("\n***************** Final Score ********************");
  console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  console.log(getGameResultMessage());
  console.log("**************************************************");
}

const choiceButtons = document.querySelectorAll('button');

choiceButtons.forEach(item => item.addEventListener('click', game));
