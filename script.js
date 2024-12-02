const rulesButton = document.getElementById('rulesButton');
const rulesContainer = document.getElementById('rulesContainer');
const closeButton = document.getElementById('closeButton');
const choice = document.querySelectorAll(".choice");
const lines = document.querySelectorAll(".line");
// const userChoice = document.getElementById("userChoice");
// const computerChoice = document.getElementById("computerChoice");
const userPicked = document.getElementById("userPicked");
const computerPicked = document.getElementById("computerPicked");
const handleReset = document.getElementById("reset");



// logics for rock, paper, scissors button click
let isChoiceMade = false;

choice.forEach((element) => {
    element.addEventListener("click", () => {
        if (isChoiceMade) return; // Exit if a choice has already been made
        isChoiceMade = true; // Set the flag to true after the first click

        // Hide all choices and lines
        choice.forEach((item) => {
            item.style.display = "none";
        });
        lines.forEach((line) => {
            line.style.display = "none";
        });

        // Show and move the clicked choice to the left (user's side)
        element.style.display = "block";
        element.classList.add("left");
        
        // Set user-picked image and show it
        userPicked.style.opacity = "1";
        userPicked.innerHTML = ""; // Clear any previous content
        userPicked.appendChild(element.cloneNode(true)); // Clone the selected choice

        setTimeout(() => {
            computerPicked.style.opacity = "1";
            setTimeout(() => {
                // Randomly pick another choice for the computer
                let randomIndex = Math.floor(Math.random() * choice.length);
                const randomChoice = choice[randomIndex];

                // Check if the random choice  is the same as the user's choice
                if (randomChoice === element) {
                    // If the same, clone the same element to the right (computer's side)
                    computerPicked.innerHTML = "";
                    computerPicked.appendChild(element.cloneNode(true)); // Clone the user's choice
                } else {
                    // If not the same, clone the random choice to the right
                    computerPicked.innerHTML = "";
                    computerPicked.appendChild(randomChoice.cloneNode(true));
                }

                randomChoice.style.display = "block";
                randomChoice.classList.add("right");
            }, 1000);
        }, 500);
    });
});

handleReset.addEventListener('click', () => {
    isChoiceMade = false; // Reset the choice flag

    // Reset all choices to their initial state
    choice.forEach((item) => {
        item.style.display = "flex";
        item.classList.remove("left", "right"); // Remove position-specific classes
    });

    // Reset all lines to their initial state
    lines.forEach((line) => {
        line.style.display = "block";
    });

    // Reset user and computer picked visibility
    userPicked.style.opacity = "0";
    computerPicked.style.opacity = "0";
});




// logics for rules button click close
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







