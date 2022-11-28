// if(5 === 5) {
//     console.log("I enter here");
// };
// if(true) {
//     console.log("I enter here");
// };

// if(5 === 5) {
//     var MyName = "Elena";    
// };

// console.log(MyName);

// if(6 === 6) {
//     let MyLastName = "Grozdanoska";
//     const e_mail = "ele.vasevska@gmail.com";
//     console.log(e_mail);
// }

// console.log(MyLastName);
// funkcija mora da ima ime

// prv nacin
// function SayHello() {
//     return "Hello World!";
// }

// console.log(SayHello());

// // vtor nacin
// var CalculateNumbers = function() {
//     return 10 + 10;
// }

// console.log(CalculateNumbers());

// function PuppyCalculator() {
//     return `My dog is ${6 * 7} in human years.`;
// }

// console.log(PuppyCalculator());

// function Proba() {
//     return parseInt(prompt("How old is your dog?")) * 7;
// }
// console.log(Proba());

// function Proba() {
//     var god = parseInt(prompt("How old is your dog?"))
//     return `My dog is ${god * 7} in human years.`;
// }
// console.log(Proba());

// function SayHello(name) {
//     return `Hello World, my name is ${name}`;
// }

// console.log(SayHello("Elena."));
// console.log(SayHello("Ognen."));

// function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
//     return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
// }
// console.log(tellFortune(3, "Ognen", "Skopje", "JavaScript Developer"));

// anonimna funkcija (5000 mili sekundi)

// setTimeout(function() {
//     console.log("I will execute in two seconds");
// }, 2000);
// setTimeout(() => {
//     console.log("I will execute in five seconds");
// }, 5000);

// var SayHello = () => {
//     return "Hello World";
// }

// console.log(SayHello());

// nizi
// var movies = [
//     {title: "Mildred Pierce", year: 1945},
//     {title: "Odd Man Out", year: 1957},
//     {title: "Kiss Me Deadly", year: 1960},
//     {title: "Psycho", year: 1958}
// ];
// console.log(movies);

// movies.filter(movie => {
//     return movie.year === 1960;
// });

function LargestNumber(numString) {
    var largest = numString[0];
    for (let i = 0; i < numString.length; i++) {
        if (largest < numString[i]) {
            largest = numString[i];
        }
    }
    return `Number ${largest} is the largest number in this string: ${numString}`;
}

console.log(LargestNumber([26, 89, 105, 10, 690, 45, 2]));

