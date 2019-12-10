/* 
Problem: Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

*/
function bmi(weight, height) {
  let sum = (weight / (height**2));
  if(sum <=18.5) {
		return "Underweight";
	} else if(sum <=25.0) {
		return "Normal";
	} else if(sum <=30.0) {
		return"Overweight";
	} else if(sum > 30.0) {
		return "Obese";
	}
}
	// Test Cases: 
	bmi(80, 1.80);
	bmi(57, 1.70);
	bmi(53, 1.62);