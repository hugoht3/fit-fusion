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
    document.getElementById("response").innerText = result;
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
    document.getElementById("response").innerText = result;
    goalMessage(result);
};


function calculateBmr() {
    let sex = document.getElementById("sex");
    let sexSelected = sex.options[sex.selectedIndex].value;

    if (sexSelected === "male") {
        calculateBmrMale();
    } else if (sexSelected === "female") {
        calculateBmrFemale();
    }

};

function goalMessage(result) {

    let message;

    let messageWalking = `X hours of ${result / 5} played Walking`;

    let messageWorkout = `X hours of ${result / 10} played Working Out`;

    if(result<500){
        message = messageWalking
    }else{
        message = messageWorkout;
    }


    // console.log("funcionou o valor das calorias sao: ",result);
    // let horasDeCaminhada = result/10;
    // console.log(result ,' este valor e equivalente a ', horasDeCaminhada, ' horas de caminhada.')
    document.getElementById("goal-message").innerText = message;
};