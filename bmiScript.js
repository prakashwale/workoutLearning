function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const units = document.getElementById('units').value;

    let bmi;
    if (units === 'metric') {
        bmi = weight / ((height / 100) ** 2);
    } else if (units === 'imperial') {
        bmi = (weight / (height ** 2)) * 703;
    }

    bmi = bmi.toFixed(1);
    document.getElementById('bmiValue').textContent = bmi;

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
        document.getElementById('bmiCategory').className = 'bmi-category underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        document.getElementById('bmiCategory').className = 'bmi-category normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        document.getElementById('bmiCategory').className = 'bmi-category overweight';
    } else {
        category = 'Obese';
        document.getElementById('bmiCategory').className = 'bmi-category obese';
    }

    document.getElementById('bmiCategory').textContent = category;
}