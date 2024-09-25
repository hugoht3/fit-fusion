const BMRCalculator = {
    maxHeight: 250,
    maxWeight: 300,
    maxAge: 100,

    getValues: function() {
        const height = parseInt(document.getElementById("answer-box1").value, 10) || 0;
        const weight = parseInt(document.getElementById("answer-box2").value, 10) || 0;
        const age = parseInt(document.getElementById("answer-box3").value, 10) || 0;

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
        let message = `<p>Your Basal Metabolic Rate (BMR) is <strong>${result}</strong> calories per day.</p>`;

        message += '<p><strong>Weight Loss Tips:</strong></p>';
        message += '<ul>';
        message += '<li><strong>Calorie Deficit:</strong> Consume fewer calories than you burn to lose weight.</li>';
        message += '<li><strong>Balanced Diet:</strong> Eat a variety of foods to ensure you get all necessary nutrients.</li>';
        message += '<li><strong>Regular Exercise:</strong> Incorporate both cardio and strength training into your routine.</li>';
        message += '<li><strong>Hydration:</strong> Drink plenty of water throughout the day.</li>';
        message += '</ul>';

        message += '<p><strong>Pros of Losing Weight:</strong></p>';
        message += '<ul>';
        message += '<li>Improved overall health and reduced risk of chronic diseases.</li>';
        message += '<li>Enhanced physical fitness and energy levels.</li>';
        message += '<li>Improved self-esteem and confidence.</li>';
        message += '</ul>';

        message += '<p><strong>Cons of Losing Weight:</strong></p>';
        message += '<ul>';
        message += '<li>Possible nutritional deficiencies if not done correctly.</li>';
        message += '<li>Risk of losing muscle mass along with fat.</li>';
        message += '<li>Emotional challenges and potential stress during the process.</li>';
        message += '</ul>';

        message += '<p><strong>Curiosities:</strong></p>';
        message += '<ul>';
        message += '<li>Weight loss can be different for everyone due to factors like metabolism, genetics, and lifestyle.</li>';
        message += '<li>Tracking your progress and making adjustments as needed can lead to more sustainable results.</li>';
        message += '<li>Small, consistent changes are often more effective than drastic, short-term measures.</li>';
        message += '</ul>';

        document.getElementById("response").innerHTML = message;
        console.log(message);
    },

};

function calculateBmr() {
    document.getElementById('sex-error').style.display = 'none';
    document.getElementById('height-error').style.display = 'none';
    document.getElementById('weight-error').style.display = 'none';
    document.getElementById('age-error').style.display = 'none';

    const sex = document.getElementById("sex").value;
    const height = parseInt(document.getElementById("answer-box1").value, 10) || 0;
    const weight = parseInt(document.getElementById("answer-box2").value, 10) || 0;
    const age = parseInt(document.getElementById("answer-box3").value, 10) || 0;

    let isValid = true;

    if (!sex) {
        document.getElementById('sex-error').style.display = 'block';
        isValid = false;
    }
    if (height <= 0 || isNaN(height) || height > BMRCalculator.maxHeight) {
        document.getElementById('height-error').style.display = 'block';
        isValid = false;
    }
    if (weight <= 0 || isNaN(weight) || weight > BMRCalculator.maxWeight) {
        document.getElementById('weight-error').style.display = 'block';
        isValid = false;
    }
    if (age <= 0 || isNaN(age) || age > BMRCalculator.maxAge) {
        document.getElementById('age-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const bmr = BMRCalculator.calculate(sex);
        BMRCalculator.displayResult(bmr, sex);
        BMRCalculator.showGoals();
    } else {
        document.getElementById('response').innerText = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateBmr);
});
