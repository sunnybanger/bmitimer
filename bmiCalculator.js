// BMI Calculator Elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBMIButton = document.getElementById('calculateBMI');
const bmiValueDisplay = document.getElementById('bmiValue');

// Sum Calculator Elements
const numberOne = document.getElementById('numberone');
const numberTwo = document.getElementById('numbertwo');
const sumValueDisplay = document.getElementById('sumValue');

// Function to calculate and display BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        bmiValueDisplay.value = `Your BMI: ${bmi.toFixed(2)}`; // Display BMI result
    } else {
        bmiValueDisplay.value = 'Please enter valid values'; // Display error message
    }
}

// Function to calculate and display sum
function calculateSum() {
    const sum = Number(numberOne.value) + Number(numberTwo.value);
    sumValueDisplay.value = `Sum: ${sum}`; // Display sum result
}

// Event Listener for the Calculate BMI button
calculateBMIButton.addEventListener('click', calculateBMI);
