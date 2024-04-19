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