// //function log () {
//     let userInput = document.getElementById("answer-box1").value;
//     let userInput2 = document.getElementById("answer-box2").value;
//     let userInput3 = document.getElementById("answer-box3").value;
//     alert(console.log(userInput.innerText * userInput2.innerText * userInput3.innerText));
// }

// this will make the calculation based on age height and wheith of a person
// becouse i`m desconsidering a number of days worked out i`m using a moderate activity level multiplier which is a (x1.55)




// THIS IS THE MATH RESULT FOR A MALE
function calculateBmrMale() {
    let height = parseInt(document.getElementById("answer-box1").value);
    let weight = parseInt(document.getElementById("answer-box2").value);
    let age = parseInt(document.getElementById("answer-box3").value);

    let result = (88.8362) + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    result.parseInt;
    console.log(result, "Male");
};



// THIS IS THE MATH RESULT FOR A FEMALE
function calculateBmrFemale() {
    let height = parseInt(document.getElementById("answer-box1").value);
    let weight = parseInt(document.getElementById("answer-box2").value);
    let age = parseInt(document.getElementById("answer-box3").value);

    let result = (447.593) + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    result.parseInt;
    console.log(result, "Female");
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
document.getElementById("sex").addEventListener("change", calculateBmr);