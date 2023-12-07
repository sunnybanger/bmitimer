// Meditation Timer Elements
const durationInput = document.getElementById('duration');
const startMeditationButton = document.getElementById('startMeditation');
const timeDisplay = document.getElementById('timeDisplay');

// BMI Calculator Elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBMIButton = document.getElementById('calculateBMI');
const bmiValueDisplay = document.getElementById('bmiValue');

let meditationIntervalId;

// Function to start the meditation timer
function startMeditation() {
    let duration = parseInt(durationInput.value, 10) * 60; // Convert minutes to seconds
    updateTimerDisplay(duration);

    meditationIntervalId = setInterval(function () {
        duration--;
        updateTimerDisplay(duration);

        if (duration <= 0) {
            clearInterval(meditationIntervalId);
            durationInput.disabled = false;
            startMeditationButton.disabled = false;
        }
    }, 1000);

    durationInput.disabled = true;
    startMeditationButton.disabled = true;
}

// Function to update timer display
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timeDisplay.innerText = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        bmiValueDisplay.innerText = bmi.toFixed(2);
    } else {
        bmiValueDisplay.innerText = 'Invalid input';
    }
}

// Event Listeners
startMeditationButton.addEventListener('click', startMeditation);
calculateBMIButton.addEventListener('click', calculateBMI);
