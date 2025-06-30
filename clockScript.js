// Selecting elements for minutes, seconds, and milliseconds
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

// Control buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Timer variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let isRunning = false;

// Function to update the display
function updateDisplay() {
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
}

// Start button event
startButton.addEventListener('click', () => {
    if (!isRunning) {
        intervalId = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
        isRunning = true;
    }
});

// Stop button event
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    isRunning = false;
});

// Reset button event
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();