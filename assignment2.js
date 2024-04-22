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
