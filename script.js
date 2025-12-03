function calcutlateBMI(){
    let weightInput = prompt("Enter your weight in kg : ");
    let heightInput = prompt("Enter your height in cm :  ");

    let weight = parseFloat(weightInput);
    let heightCm = parseFloat(heightInput);

    let height = heightCm/100;

    let bmi = weight/(height*height);

    document.getElementById("result").innerHTML = `Your BMI is : ${bmi.toFixed(2)}`;
}
