function calcutlateBMI() {
    let heightInput = prompt("Enter your height in centimeters (example: 175)");
    let weightInput = prompt("Enter your weight in kilograms (example: 70)");

    // Validate inputs
    if (!heightInput || !weightInput || isNaN(heightInput) || isNaN(weightInput)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
        return;
    }

    let heightCm = parseFloat(heightInput);
    let weight = parseFloat(weightInput);

    let height = heightCm / 100; // convert to meters

    let bmi = weight / (height * height);
    let resultBox = document.getElementById("result");

    let status = "";
    let emoji = "";

    // Remove old classes
    resultBox.classList.remove("healthy", "overweight", "obese", "showResult");

    // BMI conditions
    if (bmi < 18.5) {
        status = "Underweight";
        emoji = "⚠️";
        resultBox.classList.add("overweight");
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Healthy";
        emoji = "💚";
        resultBox.classList.add("healthy");
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
        emoji = "🟡";
        resultBox.classList.add("overweight");
    } else {
        status = "Obese";
        emoji = "🔴";
        resultBox.classList.add("obese");
    }

    // Updating result
    resultBox.innerHTML = `Your BMI is: ${bmi.toFixed(2)} — <b>${status}</b> ${emoji}`;

    // Trigger fade-in animation
    setTimeout(() => {
        resultBox.classList.add("showResult");
    }, 50);
}
