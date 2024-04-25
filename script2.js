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

// 2. ARRAY: TO STORE MULTIPLE VALUE IN ONE VARIABLE
/*
const age = birthyear => 2024 - birthyear;
const friends = ['Hoang', 'Thang', 'Long'];
const years = [2001, 2004, 2008, 1993, 1982];
// or
const me = ['Hoai Duc', 'Trinh', age(2001), friends.length]; // can store multiple value in an array

console.log(friends);
console.log(years[3]);
console.log(me);

friends[0] = 'Tuan'; // CHANGE DATA WITHIN ARRAY
console.log(friends);

function calcAge(age) {
    return age / 2;
}
console.log(calcAge(20));
console.log(calcAge(years[0]));
console.log(calcAge(years[years.length - 1]));

// add and remove value to the end of an array

friends.push('Ngoc'); // add value to the end of an array 
console.log(friends);

friends.unshift('Trinh'); // add value to the begin of an array
console.log(friends);

// remove value from array

friends.pop(); // remove value from the end of an array 
console.log(friends);

friends.shift(); // remove value from the beginning of an array
console.log(friends);
*/

// OBJECT METHOD:

const duc = {
    firstName: 'Duc',
    lastName: 'Trinh',
    birthYear: 2001,
    money: 20000,
    friends: ['Nam', 'Hminh', 'Tuan', 'Duy'],
    hasDriverLicense: false,
    job: 'coder',

    //calcAge: function (birthYear) {
    //    return 2024 - birthYear
    //},

    //calcAge: function () {
    //    console.log(this);
    //    return 2024 - this.birthYear;
    //},

    calcAge: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },

    drivingLicense: function () {
        if (this.hasDriverLicense) {
            return "a driver's license!";
        } else {
            return "no driver's license!";
        }
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(duc.calcAge());
console.log(duc['calcAge']());
console.log(duc.age);

// CHALLENGE:
// " Duc is a 23-year old coder, and he has a driver's license"
console.log(`${duc.firstName} is a ${duc.calcAge()}-year old ${duc.job}, and he has ${duc.drivingLicense()}`);

console.log(duc.getSummary());




