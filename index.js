const Choices = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors'
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let index = 0; index < 5; index++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    printRoundResult(playerChoice, computerChoice, roundResult);
  }

  printFinalResults();
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

function getPlayerChoice() {
  let validPlayerChoice = false;
  let playerChoice = '';

  while (!validPlayerChoice) {
    playerChoice = prompt('Choose rock, paper, or scissors:');
    validPlayerChoice = validatePlayerChoice(playerChoice);
  }

  return playerChoice;
}

function validatePlayerChoice(playerChoice) {
  const choicesList = [Choices.Rock, Choices.Paper, Choices.Scissors];

  return choicesList.includes(playerChoice.toLowerCase());
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

game();