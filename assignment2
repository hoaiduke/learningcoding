// CODING CHALLENGE #5:
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
