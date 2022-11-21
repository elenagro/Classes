// Boolean - can be either true or false
// true
console.log(5 == 5); 
// false
console.log(5 == 6);

// == ja gledaaat samo vrednosta (checks onlu value), === go gledaat i data tipot (checks value and data type).
console.log(5 == "5");
console.log(5 === "5");
// ============================================================================================================
// If statement

if(5 == 5) {
    console.log("Five is equal to five.");
}

if(5 > 2) {
    console.log("Five is larger than two.");
}

// If else if

var today = "Monday";

if(today === "Friday") {
    console.log("Bingo. Today is Friday.");
} else if(today == "Monday") {
    console.log("Yup. Today is Monday.");
} else {
    console.log("Unknown day, try again later.");
};


var _str = "String";
if(_str !== "Test") {
    console.log("Made with ||: I will run this code.")
};
//  ili
if(_str !== "Test" || _str !== "Drug Test") {
    console.log("Made with ||: I will run this code.")
};
// i
if(5 === 5  && 5 > 2) {
    console.log("Made with &&: I will run this code.")
};
if(5 === 5  && 5 < 2) {
    console.log("Made with &&: I will run this code.")
};

// Exercise 1

var height = 1.67;
var limit = 1.40;

if(height >= limit) {
    console.log("You are tall enough to ride the roller coaster.")
} else {
    console.log("You are NOT tall enough to ride the roller coaster.")
};

// Exercise 2
var hotel = {
    na_me: "Hotel Marriot",
    roomNumber: 50,
    hasVacancy: true
};

if(hotel.hasVacancy) {
    console.log("Room number " + hotel.roomNumber + " is free in " + hotel.na_me + ".");
} else {
    console.log("Room number " + hotel.roomNumber + " is NOT free in " + hotel.na_me + ".");
};

// ====================================================================================================

// Switch

var _today = "Monday";

switch(_today) {
    case "Monday" :
        console.log("Today is Monday");
    break;
    case "Tuesday" :
        console.log("Today is Tuesday");
    break;
    default : console.log("Unknown day");
};
// Exercise 3

var a = 15;
var b = 26;

if(a > b) {
    console.log("Number " + a + " is larger than number " + b);
} else if(a < b) {
    console.log("Number " + a + " is smaller than number " + b);
} else {
    console.log("Number " + a + " is equal to number " + b);
};

// Exercise 4

var grade = 94;

if(grade <= 20 && grade > 0) {
    console.log("Yor grade in 1: Nedovolen.");
} else if(grade <= 40 && grade >= 21) {
    console.log("Your grade is 2: Dovolen.");
} else if(grade <= 60 && grade >= 41) {
    console.log("Your grade is 3: Dobar.");
} else if(grade <= 80 && grade >= 61) {
    console.log("Your grade is 4: Mnogu dobar.");
} else if(grade <= 100 && grade >= 81) {
    console.log("Your grade is 5: Odlicen.");
} else {
    console.log("There is no such assignment with that number of points.");
    // console.error("Grade invalid")
};

