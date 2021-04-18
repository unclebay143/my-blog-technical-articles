// Access the dom


// get the increase and decrease button
const incrementButton = document.getElementById("increase-btn");
const decrementButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");

// get the counter board value
const counterBoard = document.getElementById("counter-board");

// Declare a counter
let counterValue = 0;

// function that increases the counter
const increaseCounter = () =>{
    counterBoard.innerHTML = ++counterValue;
}

// function that decreases the counter
const decreaseCounter = () =>{
    counterBoard.innerHTML = --counterValue;
}

const resetCounter = () =>{
    // Update the UI
    counterBoard.innerHTML = 0;
    // Update the variable container
    counterValue = 0;
}

// Add event listener to the buttons
incrementButton.addEventListener('click', increaseCounter);
decrementButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);
