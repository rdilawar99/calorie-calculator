function calculateCalories() {
    // Get user inputs
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const activityLevel = document.getElementById("activity-level").value;

    // Validate inputs
    if (!age || !weight || !height) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate BMR based on gender
    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate total daily energy expenditure (TDEE)
    const tdee = bmr * activityLevel;

    // Display the result
    document.getElementById("result").textContent = `Your maintenance calories: ${Math.round(tdee)} kcal/day`;
}
