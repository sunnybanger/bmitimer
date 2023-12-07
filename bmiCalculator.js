// BMI Calculator Elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBMIButton = document.getElementById('calculateBMI');
const bmiValueDisplay = document.getElementById('bmiValue');

// Function to calculate and display BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        bmiValueDisplay.textContent = bmi.toFixed(2); // Display BMI result as text
    } else {
        bmiValueDisplay.textContent = 'Please enter valid values'; // Display error message
    }
}

// Event Listener for the Calculate BMI button
calculateBMIButton.addEventListener('click', calculateBMI);
