'use strict'; // forbid us to do certain things and create visible error that can be fixed
// reserve words that will be used or already in the program

// 1. FUNCTION:
// FUNCTION DECLARATION: to declare a function
/*
function classRoom(girl, boy) { // "GIRL AND BOY HERE ARE CALLED PARAMETER, WHICH IS A PLACEHOLDER FOR LATER ASSIGNED VALUE (CALLED ARGUMENT)"
    const totalStudent = `the class has ${girl} girls and ${boy} boys`;
    return totalStudent;
}

console.log(classRoom(23, 12)); // "23, 12" IN THIS CASE IS CALLED ARGUMENT, WHICH ADD VALUE FOR THE PARAMETERS
console.log(classRoom(7, 82));

//////////////////////////////

function firstName() {
    console.log(`my name is Duc`)
}

firstName()
firstName()
*/
///////////////////////////////
/*
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(2001);

// FUNCTION EXPRESSION: to store a function in a variable

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1);
console.log(age2);
*/
// ARROW FUNCTION: (also a function expression)
/*
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearUntilRetirement = birthyear => {
    const age = 2024 - birthyear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(2001));
*/

// FUNCTIONS CALLING OTHER FUNCTIONS
/*
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(kiwi, lemon) {
    const kiwiPieces = cutFruit(kiwi);
    const lemonPieces = cutFruit(lemon);

    return `You have ${kiwiPieces} kiwi pieces and ${lemonPieces} lemon pieces`;
}

console.log(fruitProcessor(2, 3));
*/

