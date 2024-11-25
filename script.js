// // DOM Elements
// const choices = document.querySelectorAll('[data-choice]');
// const playerScoreElem = document.getElementById('player-score');
// const computerScoreElem = document.getElementById('computer-score');
// const messageElem = document.getElementById('message');
// const rulesBtn = document.getElementById('rules-btn');
// const closePopup = document.getElementById('close-popup');
// const rulesPopup = document.getElementById('rules-popup');

// // Variables
// let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
// let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

// // Update UI
// function updateScores() {
//   playerScoreElem.textContent = playerScore;
//   computerScoreElem.textContent = computerScore;
//   localStorage.setItem('playerScore', playerScore);
//   localStorage.setItem('computerScore', computerScore);
// }

// // Determine Winner
// function getWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) return 'draw';
//   if (
//     (playerChoice === 'rock' && computerChoice === 'scissors') ||
//     (playerChoice === 'scissors' && computerChoice === 'paper') ||
//     (playerChoice === 'paper' && computerChoice === 'rock')
//   ) {
//     playerScore++;
//     return 'player';
//   }
//   computerScore++;
//   return 'computer';
// }

// // Random Choice for Computer
// function getRandomChoice() {
//   const choices = ['rock', 'paper', 'scissors'];
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// // Game Logic
// choices.forEach(choice => {
//   choice.addEventListener('click', () => {
//     const playerChoice = choice.dataset.choice;
//     const computerChoice = getRandomChoice();
//     const winner = getWinner(playerChoice, computerChoice);

//     let message;
//     if (winner === 'player') {
//       message = '🎉 You win!';
//       showCelebration();
//     } else if (winner === 'computer') {
//       message = '😢 You lose!';
//     } else {
//       message = "🤝 It's a draw!";
//     }
//     messageElem.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${message}`;
//     updateScores();
//   });
// });

// // Show Celebration
// function showCelebration() {
//   const confetti = document.createElement('div');
//   confetti.classList.add('confetti');
//   document.body.appendChild(confetti);
//   setTimeout(() => confetti.remove(), 3000);
// }

// // Rules Modal
// rulesBtn.addEventListener('click', () => rulesPopup.classList.remove('hidden'));
// closePopup.addEventListener('click', () => rulesPopup.classList.add('hidden'));

// // Initialize Scores
// updateScores();



