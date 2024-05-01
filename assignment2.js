// CODING CHALLENGE #5:
'use strict';
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// TEST DATA #1:
let scoreDolphins = calcAverage(85, 54, 41); // #1(44, 23, 71) #2(85, 54, 41) 
let scoreKoalas = calcAverage(23, 34, 27); // #1(65, 54, 49) #2(23, 34 , 27)

console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log(`No team win...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA #2:
scoreDolphins = calcAverage(44, 23, 71); // #1(44, 23, 71) #2(85, 54, 41) 
scoreKoalas = calcAverage(65, 54, 49); // #1(65, 54, 49) #2(23, 34 , 27)
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// CODING CHALLENGE 2: 
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44
*/

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2
    }
};

function total(bills, tips) {
    return bills + tips
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totalValue = [total(bills[0], tips[0]), total(bills[1], tips[1]), total(bills[2], tips[2])];

console.log(totalValue);

// CODING CHALLENGE 3:
//Let's go back to Mark and John comparing their BMIs!
/*
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    //markSum: function () {
    //    if (this.bmi() > john.bmi()) {
    //        return `${this.fullName} 's BMI (${this.bmi()} is higher than ${john.fullName}'s(${john.bmi()})!`
    //    } else {
    //        return `${this.fullName} 's BMI (${this.bmi()} is higher than ${john.fullName}'s(${john.bmi()})!`
    //    }
    //},

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },


    markSum: function () {

        return this.bmi() > john.bmi() ? `${this.fullName} 's BMI (${this.bmi()}) is higher than ${john.fullName}'s(${john.bmi()})!` : `${this.fullName} 's BMI (${this.bmi()} is lower than ${john.fullName}'s (${john.bmi()})!`
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    //johnSum: function () {
    //    if (this.bmi() > mark.bmi()) {
    //        return `${this.fullName} 's BMI (${this.bmi()} is higher than ${mark.fullName}'s(${mark.bmi()})!`
    //    } else {
    //        return `${this.fullName} 's BMI (${this.bmi()} is higher than ${mark.fullName}'s(${mark.bmi()})!`
    //    }

    //},

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },

    johnSum: function () {
        return this.bmi() > mark.bmi() ? `${this.fullName} 's BMI (${this.bmi()}) is higher than ${mark.fullName}'s(${mark.bmi()})!)` : `${this.fullName} 's BMI (${this.bmi()} is lower than ${mark.fullName}'s (${mark.bmi()})!`
    }
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {

    console.log(`${john.fullName} 's BMI (${john.bmi}) is higher than ${mark.fullName}'s(${mark.bmi})!)`)
} else {
    console.log(`${mark.fullName} 's BMI (${mark.bmi} is higer than ${john.fullName}'s (${john.bmi})!`)
};

console.log(mark.bmi);
console.log(john.bmi);
//console.log(mark.markSum());
//console.log(john.johnSum());

// CODING CHALLENGE 4:
/* Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52

    // calcTip = function (bill) {
    //     return this.bills >= 50 && this.bills <= 300 ? this.bills * 0.15 : this.bills * 0.2;
    // },

]


const tips = []
const totals = []

for (let i = 0; i <= bills.length - 1; i++) {
    // console.log(bills[i], calcTip(bills[i]));

    tips.push(calcTip(bills[i]));

    totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);
*/

// BONUS:
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum = sum + array[i]
        console.log(sum);
    }
    return sum / arr.length
}

console.log(calcAverage([2, 3, 7]));
