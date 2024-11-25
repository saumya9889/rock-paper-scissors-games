const rulesButton = document.getElementById('rulesButton');
const rulesContainer = document.getElementById('rulesContainer');
const closeButton = document.getElementById('closeButton');

rulesButton.addEventListener('click', () => {
    if (rulesContainer.style.display === 'none' || rulesContainer.style.display === '') {
        rulesContainer.style.display = 'block';
    } else {
        rulesContainer.style.display = 'none';
    }
});

closeButton.addEventListener('click', () => {
    rulesContainer.style.display = 'none';
});


    
// Select all the choices
// // Grab all the choices
// const choices = document.querySelectorAll('.choice');

// // Iterate through each choice and add click event
// choices.forEach(choice => {
//   choice.addEventListener('click', (e) => {
//     const selectedChoice = e.target.closest('.choice'); // Get the closest choice div
//     const choiceData = selectedChoice.getAttribute('data-choice'); // Get the choice name (rock, paper, or scissors)

//     // Hide all other choices except the selected one
//     hideOtherChoices(choiceData);

//     // Perform any other logic for selecting the choice (e.g., play the game)
//     console.log(`You selected: ${choiceData}`);
//   });
// });

// function hideOtherChoices(selectedChoice) {
//   choices.forEach(choice => {
//     const choiceData = choice.getAttribute('data-choice');
//     if (choiceData !== selectedChoice) {
//       choice.classList.add('hidden');  // Hide choices that are not selected
//     }
//   });
// }

// // Show all choices again (for example, after game completion or restart)
// function showAllChoices() {
//   choices.forEach(choice => {
//     choice.classList.remove('hidden');  // Remove the hidden class to show choices
//   });
// }



