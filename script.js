
/* 1. DECLARING VARIABLE AND VALUE
let firstName = "java script is fun!" // *let: can be mutate (change) the variable later, only use for value that potentialy need to be changed
console.log(firstName);

const secondName = "John";  // *const should always use to declare variable that never mutate (change), thus const is immunate
console.log(secondName);

var lastName = "Trinh"; // *var can mutate the value just like let*, however, it's and old version of declaring a varible so should be avoid at all cost since it has potential error.
console.log(lastName);

lastName = 20;
console.log(lastName);

*/

////////////////////////////////////////

// 2. TYPES OF VALUE:
/*
let maGic = 12;
let nuTor = true;
let counTer = 'katarina';

console.log(maGic);
console.log(nuTor);
console.log(counTer);

maGic = false
console.log(maGic);
console.log(typeof maGic);
*/

///////////////////////////////////////

// 3. Operators:
// - Mathematic operator:
/*
const present = 2024;
const ageDuc = present - 2001;
const ageTuan = present - 1993;

console.log(ageDuc, ageTuan);
*/

/*
const ducFirstName = 'Duc';
const ducLastName = 'Trinh';

console.log(ducFirstName + ' ' + ducLastName);
*/

// - Assignment operator:
/*
let x = 20 + 9;

x += 20; // x = x + 10
x -= 10; // x = x - 10
x *= 2; // x = x * 2
x **= 3; // x = x * x * x

console.log(x);
*/

// - Comparison operator:
/*
const pens = 200
const ducPens = pens - 20
const duyPens = pens - 90

console.log(ducPens > duyPens);
*/
/*
const present = 2024;
const ageDuc = present - 2001;
const ageTuan = present - 1993;

console.log(present - 2001 > present - 1993);
*/

///////////////////////////////////
// 3. Template Literal:
// - Old way:
/*
const birthYear = 2001;
const present = 2024;
const job = 'coder';
const ducTrinh = ("I'm") + ' ' + (present - birthYear) + ' ' + ("years old") + ' ' + job;
console.log(ducTrinh);

// - New way:
console.log(`I'm ${present - birthYear} years old ${job}`); // ("``" is tempalte literal in which can be stored mu;tiple value)
console.log(`I'm just
a ${present - birthYear}
 years old
 ${job}`);
*/

////////////////////////////////////
// 4. Control Structure: (if else control structure or  if else statement)
/*
const age = 17;

if (age <= 18) {
    console.log(`The person is not eligible for the course`);
} else {
    console.log(`Congratulation! You are eligible to enrol the course!`)
};
*/

////////////////////////////////////
// 5. Type conversion:
/*
const ducAge = '19';
const tuanAge = 29;
console.log(Number(ducAge) + tuanAge);

console.log(Boolean(ducAge));
*/

////////////////////////////////////
// 6. 5 Falsy value: 0, NaN, undefined, ' ', null (it's not a false value, it's false when trying to convert it to boolean value)
/*
let money; // - this case: money has undefined value
if (money) {
    console.log(`you have so much money`)
} else {
    console.log(`you don't have any money`)
}

// or:

const penalty = 0;
if (penalty) {
    console.log(`no penalty!`)
} else {
    console.log(`penalty!`)
}
*/
////////////////////////////////////
// 7. strict equality operator vs loose equality operator (additional)
/*
const age = '19';
if (age === 19) console.log(`you can get a free meal (strict)`); // should be implement for clean code

if (age == 19) console.log(`you can get a free gift (loose)`); // should be avoided since it has potential of risk
*/
/*
const shirtNumber = Number(prompt(`What is your favorite shirt number in football?`));

if (shirtNumber === 7) {
    console.log(`I guess your favorite player is Ronaldo, is it correct?`)
} else if (shirtNumber === 10) {
    console.log(`Your favorite footballer is Messi!`)
} else if (shirtNumber !== 7, 10) {
    console.log(`So what is your favorite footballer?`)
}
*/
/////////////////////////////////////
// 8. Switch statements:
/*
const day = 'friday';

switch (day) {
    case 'monday':
        console.log(`Go to work`)
        break;
    case 'tuesday':
        console.log(`Playing game`)
        break;
    case 'wednesday':
        console.log(`go running`);
        break;
    case 'thursday':
        console.log(`eating`);
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log(`ff`)
        break;
    default:
        console.log(`None of above`);
}

if (day === 'monday') {
    console.log(`Go to play`);
} else if (day === 'tuesday') {
    console.log(`Playing game`);
} else if (day === 'wednesday') {
    console.log(`go running`);
} else if (day === 'thursday') {
    console.log(`eating`);
} else if (day === 'friday' || day === 'saturday' || day === 'sunday') { // || mean "or"
    console.log(`ff`);
} else {
    console.log(`None of above`);
}
*/

