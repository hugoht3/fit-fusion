const BMRCalculator = {
    maxHeight: 250, // Maximum height in cm
    maxWeight: 300, // Maximum weight in kg
    maxAge: 100,    // Maximum age in years

    getValues: function() {
        const height = parseInt(document.getElementById("answer-box1").value);
        const weight = parseInt(document.getElementById("answer-box2").value);
        const age = parseInt(document.getElementById("answer-box3").value);

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

    displayResult: function(result) {
        document.getElementById("response").innerText = `${result} Calories your body burns daily`;
    },

    showGoals: function() {
        document.getElementById('chosen').classList.remove("hidden");
        document.getElementById('lose').classList.remove("hidden");
        document.getElementById('gain').classList.remove("hidden");
    }
};

function calculateBmr() {
    if (!requiredInput()) return;
    const sex = document.getElementById("sex").value;
    const bmr = BMRCalculator.calculate(sex);
    BMRCalculator.displayResult(bmr);
    BMRCalculator.showGoals();
}