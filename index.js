const Choices = {
  Rock: 'Rock',
  Paper: 'Paper',
  Scissors: 'Scissors'
}

function getComputerChoice() {
  const choices = [Choices.Rock, Choices.Paper, Choices.Scissors];
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
}

console.log(getComputerChoice());