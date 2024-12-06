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
const rockCloned = document.getElementById('rock-cloned')
const paperCloned = document.getElementById('paper-cloned')
const scissorsCloned = document.getElementById('scissors-cloned')



// logics for rock, paper, scissors button click
let isChoiceMade = false;
choice.forEach((element) => {
    element.addEventListener("click", () => {
        if (isChoiceMade) return; 
        isChoiceMade = true; 

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

        setTimeout(() => {
            userPicked.style.opacity = "1";
            userPicked.textContent = element.textContent;
            userPicked.style.display = "block";
            setTimeout(() => {
                computerPicked.style.opacity = "1";

                // Randomly pick another choice for the computer
                let randomIndex = Math.floor(Math.random() * choice.length);
                const randomChoice = choice[randomIndex];
                //  console.log(randomChoice.id,'random')
                //  console.log(element.id,'element')
                // Check if the random choice's ID is the same as the user's choice ID
                if (randomChoice.id === element.id) { // If the same, clone the user's choice to the right
                    if(element.id === 'rock'){
                        rockCloned.style.display = 'block'  
                        rockCloned.classList.add("right")
                    }else if(element.id === 'paper'){
                        paperCloned.style.display = 'block'
                        paperCloned.classList.add("right")
                    }else if(element.id === 'scissors'){
                        scissorsCloned.style.display = 'block'  
                        scissorsCloned.classList.add("right")
                    }
                } else {
                   
                    randomChoice.style.display = "block";
                    randomChoice.classList.add("right");
                } 
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
    // clone logic
    rockCloned.style.display = 'none'
    rockCloned.classList.remove("left", "right");
    paperCloned.style.display = 'none'
    paperCloned.classList.remove("left", "right");
    scissorsCloned.style.display = 'none'
    scissorsCloned.classList.remove("left", "right");
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


  
