const Choices = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors'
}

function game() {
  for (let index = 0; index < 5; index++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    console.log("**************************************************");
    console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}`);
    console.log(roundResult);
  }
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  const playerWinCondition = (playerChoice === Choices.Rock && computerChoice === Choices.Scissors) ||
    (playerChoice === Choices.Paper && computerChoice === Choices.Rock) ||
    (playerChoice === Choices.Scissors && computerChoice === Choices.Paper)

  if (playerChoice === computerChoice)
    return "It's a tie!";

  else if (playerWinCondition)
    return `You win! ${capitalize(playerChoice)} beats ${computerChoice}`;

  else
    return `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
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

game();