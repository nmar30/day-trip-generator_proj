"use strict"

//Variables
let destination = "";
let resturant = "";
let transportation = "";
let entertainment = "";

//Arrays
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