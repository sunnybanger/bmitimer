// Elements
const durationInput = document.getElementById('duration');
const startMeditationButton = document.getElementById('startMeditation');
const timeDisplay = document.getElementById('timeDisplay');
const timerDiv = document.getElementById('timer');
let meditationIntervalId;

// Function to start the meditation timer
function startMeditation() {
    let duration = parseInt(durationInput.value, 10) * 60;
    updateTimerDisplay(duration);
    timerDiv.style.display = 'block';

    meditationIntervalId = setInterval(function () {
        duration--;
        updateTimerDisplay(duration);

        if (duration <= 0) {
            clearInterval(meditationIntervalId);
            timerDiv.style.display = 'none';
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

// Event Listener
startMeditationButton.addEventListener('click', startMeditation);
