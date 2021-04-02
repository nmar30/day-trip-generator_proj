"use strict"

//Set Initial Variables
let destination;
let resturant;
let transportation;
let entertainment;
let ranOnce = false;
let confirmTrip = false;
let confirmTripBoolean = false;

//Initial Arrays
let destinationArray = ["New York","Boston","Miami","Los Angeles","Seattle"];
let resturantArray = ["Mexican","Italian","American","Seafood","Thai"];
let transportationArray = ["Car","Plane","Train","Bus"];
let entertainmentArray = ["Movies","Plays","Sports","Landmarks"];

//Functions
function randomSelector(array){
    let randomNumber = Math.floor(Math.random() * array.length);
    let arrayChoice = array[randomNumber];
    return arrayChoice;
}
function rerunRandomSelector (name, variable, array){
    let answer = prompt("Your current destination is " + variable + "! Would you like to rerun (Yes|No)");
    answer = answer.toLowerCase();
    while (answer === "yes") {
        variable = randomSelector(array);
        answer = prompt("Your current destination is " + variable + "! Would you like to rerun (Yes|No)");
        answer = answer.toLowerCase();
    }
    return variable;
}

//Logic
while (confirmTripBoolean === false){
    if (ranOnce===false){
        destination = randomSelector(destinationArray);
        resturant = randomSelector(resturantArray);
        transportation = randomSelector(transportationArray);
        entertainment = randomSelector(entertainmentArray);
        ranOnce=true;
    } else {
        destination = rerunRandomSelector("destination, destinationArray);
        resturant = rerunRandomSelector(resturant, resturantArray);
        transportation = rerunRandomSelector(transportation, transportationArray);
        entertainment = rerunRandomSelector(entertainment, entertainmentArray);
        confirmTripBoolean = true;
    }
}

//Console Results
console.log("Your Confirmed Trip Itenary:");
console.log("Destination: " + destination);
console.log("Resturant: " + resturant);
console.log("Transportation: " + transportation);
console.log("Entertainment: " +  entertainment);