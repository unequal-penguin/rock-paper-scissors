const Choices = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors'
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
    return `You win! ${playerChoice} beats ${computerChoice}`;

  else
    return `You lose! ${computerChoice} beats ${playerChoice}`;
}

function getComputerChoice() {
  const choices = [Choices.Rock, Choices.Paper, Choices.Scissors];
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
}

const playerChoice = 'ROCK';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));