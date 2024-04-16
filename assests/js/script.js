// this will make the calculation based on age height and wheith of a person
// becouse i`m desconsidering a number of days worked out i`m using a moderate activity level multiplier which is a (x1.55)



// THIS IS THE MATH RESULT FOR A MALE
function calculateBmrMale() {
    const height = parseInt(document.getElementById("answer-box1").value);
    const weight = parseInt(document.getElementById("answer-box2").value);
    const age = parseInt(document.getElementById("answer-box3").value);

     result = (88.8362) + (13.397 * weight) + (4.799 * height) - (5.677 * age);

    result = Math.floor(result);
    document.getElementById("response").innerText = (`${result}  \nCalories your body burns daily`);
    goalMessage(result);
    return result;
};
// THIS IS THE MATH RESULT FOR A FEMALE
function calculateBmrFemale() {
    const height = parseInt(document.getElementById("answer-box1").value);
    const weight = parseInt(document.getElementById("answer-box2").value);
    const age = parseInt(document.getElementById("answer-box3").value);

    let result = (447.593) + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    result = Math.floor(result);

    document.getElementById("response").innerText = (`${result}  \nCalories your body burns daily`);
    goalMessage(result);
    return result;
};

// MESAGE OF RESULT CALORIES 
function goalMessage(result) {
    // result of calories devided by number of calories that you burn by the hour of set specific exercise in this case Running ;
    let hoursOfRunning = result / 600;
    let hoursOfBasketball = result / 700;
    let hoursOfVolleyball = result / 400;
    let hoursOfFootball = result / 700;
    let hoursOfCycling = result / 600;

    let message = (` ${result + "  Calories"}
    Is in Avarage equals to
    ${Math.floor(hoursOfRunning).toFixed(2)} hours of Running
    ${Math.floor(hoursOfBasketball).toFixed(2)} hours of Basketball Played
    ${Math.floor(hoursOfVolleyball).toFixed(2)} hours of Volleyball Played
    ${Math.floor(hoursOfFootball).toFixed(2)} hours of Football Played
    ${Math.floor(hoursOfCycling).toFixed(2)} hours of Cycling`);
    document.getElementById("goal-message").innerText = message;
};


// NEW FUNCTION THAT MAKES THE INPUTS HAVE REQUIREMENTS

function requiredInput() {
    const height = document.getElementById("answer-box1").value
    const weight = document.getAnimations("answer-box2").value
    const age = document.getElementById("answer-box3").value

   if (height < 100) {
        alert("consider height in centimeters.! ")
        return false;
    } else if (weight < 100) {
        alert("consider weight in Kilos.! ")
        return false;
    } else if (age < 15) {
        alert("age can't be less then 15 different calculation.!")
        return false;
    } else {
        return true;
    }
};


// FUNCTION THAT CHANGE WHICH OF THE TWO OPERATION WILL BE EXECUTED 
function calculateBmr() {
    let sex = document.getElementById("sex");
    let sexSelected = sex.options[sex.selectedIndex].value;
    const loseWeight = document.getElementById('lose');
    const gainWeight = document.getElementById('gain');
    const optionChosen = document.getElementById('chosen')

    if (sexSelected === "male") {
        calculateBmrMale();
    } else if (sexSelected === "female") {
        calculateBmrFemale();
    }
    optionChosen.classList.remove("hidden");
    loseWeight.classList.remove("hidden");
    gainWeight.classList.remove("hidden");

    return (sexSelected);
};


function loseWeight () {
    let sex = document.getElementById("sex");
    let sexSelected = sex.options[sex.selectedIndex].value;
    if (sexSelected === "male"){
    let message = `Tips for Losing Weight
    Calorie Deficit: Consume fewer calories than your body burns ` + calculateBmrMale() + `
    Balanced Diet: Focus on whole foods, fruits, vegetables, lean proteins, and whole grains.
    Regular Exercise: Incorporate both cardiovascular exercises (like running, cycling) and strength training.
    Hydration: Drink plenty of water throughout the day to stay hydrated and aid in weight loss.`
    
    document.getElementById("goal-message").innerText = message;
    } else {
        let message = `Tips for Losing Weight
    Calorie Deficit: Consume fewer calories than your body burns ` + calculateBmrFemale() + `
    Balanced Diet: Focus on whole foods, fruits, vegetables, lean proteins, and whole grains.
    Regular Exercise: Incorporate both cardiovascular exercises (like running, cycling) and strength training.
    Hydration: Drink plenty of water throughout the day to stay hydrated and aid in weight loss.`
    
    document.getElementById("goal-message").innerText = message;
    };
}

function gainWeight () {
    
    let sex = document.getElementById("sex");
    let sexSelected = sex.options[sex.selectedIndex].value;
    if (sexSelected === "male"){
    let message = `Tips for Gaining Weight
    Increase Caloric Intake: Consume more calories than your body burns ` + calculateBmrMale() + `
    Focus on Protein: Include plenty of protein-rich foods in your diet to support muscle growth.
    Strength Training: Incorporate resistance training exercises to build muscle mass.
    Healthy Fats: Include healthy fats in your diet such as avocados, nuts, and olive oil.` 
    
    document.getElementById("goal-message").innerText = message;
    } else {   let message = `Tips for Gaining Weight
    Increase Caloric Intake: Consume more calories than your body burns ` + calculateBmrFemale() + `
    Focus on Protein: Include plenty of protein-rich foods in your diet to support muscle growth.
    Strength Training: Incorporate resistance training exercises to build muscle mass.
    Healthy Fats: Include healthy fats in your diet such as avocados, nuts, and olive oil.`
    document.getElementById("goal-message").innerText = message; 
    };
}
