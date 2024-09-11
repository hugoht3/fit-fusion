const BMRCalculator = {
    maxHeight: 250, // Maximum height in cm
    maxWeight: 300, // Maximum weight in kg
    maxAge: 100,    // Maximum age in years

    getValues: function() {
        const height = parseInt(document.getElementById("answer-box1").value, 10) || 0;
        const weight = parseInt(document.getElementById("answer-box2").value, 10) || 0;
        const age = parseInt(document.getElementById("answer-box3").value, 10) || 0;

        // Ensure values do not exceed maximum limits
        return {
            height: Math.min(height, this.maxHeight),
            weight: Math.min(weight, this.maxWeight),
            age: Math.min(age, this.maxAge)
        };
    },

    calculate: function(gender) {
        const { height, weight, age } = this.getValues();
        let bmr = gender === 'male' 
            ? (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age))
            : (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
        return Math.floor(bmr);
    },

    displayResult: function(result, gender) {
        let message = `${result} Calories your body burns daily.`;
        if (gender === 'male' || gender === 'female') {
            message += ` Tips for Losing Weight: Calorie Deficit, Balanced Diet, Regular Exercise, Hydration.`;
        }
        document.getElementById("response").innerText = message;
    },

    showGoals: function() {
        document.getElementById('chosen').classList.remove("hidden");
        document.getElementById('lose').classList.remove("hidden");
        document.getElementById('gain').classList.remove("hidden");
    }
};

function calculateBmr() {
    const sex = document.getElementById("sex").value;
    const bmr = BMRCalculator.calculate(sex);
    BMRCalculator.displayResult(bmr, sex);
    BMRCalculator.showGoals();
}
