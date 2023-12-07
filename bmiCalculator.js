// BMI Calculator Elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBMIButton = document.getElementById('calculateBMI');
const bmiValueDisplay = document.querySelector('#bmiValue span');

// Sum Calculator Elements
const numberOne = document.getElementById('numberone');
const numberTwo = document.getElementById('numbertwo');
const calculateSumButton = document.getElementById('sumbtn');
const sumValueDisplay = document.querySelector('#sumValue span');

// Function to calculate and display BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        bmiValueDisplay.textContent = bmi.toFixed(2); // Display BMI result
    } else {
        bmiValueDisplay.textContent = 'Please enter valid values'; // Display error message
    }
}

// Function to calculate and display sum
function calculateSum() {
    const sum = Number(numberOne.value) + Number(numberTwo.value);
    sumValueDisplay.textContent = sum; // Display sum result
}

// Event Listeners
calculateBMIButton.addEventListener('click', calculateBMI);
calculateSumButton.addEventListener('click', calculateSum);
