"use strict"

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

//Set Initial Variables
let destination = randomSelector(destinationArray);
let resturant = randomSelector(resturantArray);
let transportation = randomSelector(transportationArray);
let entertainment = randomSelector(entertainmentArray);

//Console Initial Results
console.log("Your Current Trip:");
console.log("Destination: " + destination);
console.log("Resturant: " + resturant);
console.log("Transportation: " + transportation);
console.log("Entertainment :" +  entertainment);