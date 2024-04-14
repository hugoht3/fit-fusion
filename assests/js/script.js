// this will make the calculation based on age height and wheith of a person
// becouse i`m desconsidering a number of days worked out i`m using a moderate activity level multiplier which is a (x1.55)




// THIS IS THE MATH RESULT FOR A MALE
function calculateBmrMale() {
    let height = parseInt(document.getElementById("answer-box1").value);
    let weight = parseInt(document.getElementById("answer-box2").value);
    let age = parseInt(document.getElementById("answer-box3").value);

    let result = (88.8362) + (13.397 * weight) + (4.799 * height) - (5.677 * age);

    // math.floor(result);
    result = parseInt(result);

    // have it log for functionality porpuse.
    console.log(result);
    document.getElementById("response").innerText = (`${result}  \nCalories you burn just by existing`);
    goalMessage(result);
};



// THIS IS THE MATH RESULT FOR A FEMALE
function calculateBmrFemale() {
    let height = parseInt(document.getElementById("answer-box1").value);
    let weight = parseInt(document.getElementById("answer-box2").value);
    let age = parseInt(document.getElementById("answer-box3").value);

    let result = (447.593) + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    result = parseInt(result);

    // have it log for functionality porpuse.
    console.log(result);
    document.getElementById("response").innerText = (`${result}  \nCalories you burn just by existing`);
    goalMessage(result);
};

// FUNCTION THAT    CHANGE WHICH OF THE TWO OPERATION WILL BE EXECUTED 
function calculateBmr() {
    let sex = document.getElementById("sex");
    let sexSelected = sex.options[sex.selectedIndex].value;

    if (sexSelected === "male") {
        calculateBmrMale();
    } else if (sexSelected === "female") {
        calculateBmrFemale();
    }
   requiredInput();
};
// MESAGE OF RESULT CALORIES 
function goalMessage(result) {
    // result of calories devided by number of calories that you burn by the hour of set specific exercise in this case Running ;
    let hoursOfRunning = result / 600;
    let hoursOfBasketball = result / 700;
    let hoursOfVolleyball = result / 400;
    let hoursOfFootball = result / 700;
    let hoursOfCycling = result / 600;

    let message = (`${result + ":Calories"} is equal to ${Math.floor(hoursOfRunning).toFixed(2)} hours of Running
     \n${result + ": Calories"} is equal to ${Math.floor(hoursOfBasketball).toFixed(2)} of Basketball Played
     \n${result + ": Calories"} is equal to ${Math.floor(hoursOfVolleyball).toFixed(2)} of Volleyball Played
     \n${result + ": Calories"} is equal to ${Math.floor(hoursOfFootball).toFixed(2)} of Football Played
     \n${result + ": Caloreis"} is equal to ${Math.floor(hoursOfCycling).toFixed(2)} of Cycling`);
    document.getElementById("goal-message").innerText = message;


};


// NEW FUNCTION THAT MAKES THE INPUTS HAVE REQUIREMENTS

function requiredInput() {
    var height = document.getElementById("answer-box1").value
    var weight = document.getAnimations("answer-box2").value
    var age = document.getElementById("answer-box3").value



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
