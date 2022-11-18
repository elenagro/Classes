/*
// Objects
// NACIN ZA KREIRANJE NA OBJEKTI
var car = new Object();

car.model = "Fiat Lancia";
car.year = 1994;
car.color = "Grey";

//  aCCESSING OBJECT PROPERTIES
console.log(car.model);
console.log(car.year);
console.log(car);

// console.log(car['model']);
// console.log (car[model])
// model moze da bide varijabla


// 2 NACIN- KJE GO KORISTIME OVOJ ZA KREIRANJE NA OBJEKTI
var user = {
    fisrtName: "Mario",
    lastName: "Petkovski",
    favouriteNumber: 4
};

console.log(user);
// console.log(user.lastName);

// Exercise

var course = {
    courseName: "JavaScript Academy",
    courseSpan: 8 + ' months',
}

var courseTeacher = {
    teacherName: "Mario Petkovski",
    teacherMail: "mario@gmail.com"
}


console.log("I'm studying " + course.courseName + " for " + course.courseSpan + ", and my teacher is " + courseTeacher.teacherName + ". You can reach him at " + courseTeacher.teacherMail + ".");

// var movie = {
//     title: "His Girl Friday",
//     releaseDate: 1940,
//     genre: "Comedy"
// };

// var {title: movieTitle, genre } = movie;
// console.log(movieTitle);
// console.log(genre);

var actor = {
    actorFirstName: "Will",
    actorLastName: "Smith",
    oscarWins: 50
};
var movie = {
    movieName:"'King Richard'",
    releaseDate: 2021
};

console.log(actor.actorFirstName + " " + actor.actorLastName + ", stars in the movie " + movie.movieName + ", released in " + movie.releaseDate + ", which the movie went on to win " + actor.oscarWins + " Oscars.");
*/
//  Arrays

var colors = [
    "red", "green", "blue"
];

var new_colors = [
    "cyan", "magenta", "yellow", "karbon"
];


// var combinedArray = colors.concat(new_colors);
var combinedArray = [... colors, ...new_colors];

console.log(combinedArray);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// console.log(colors.length);

var [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

new_colors.push("brown");
new_colors.unshift("black");

var lastItem = colors.pop();

var mutated_array = new_colors.slice(1, 4);

new_colors.splice(2, 1, 'pink');

console.log(colors);
console.log(new_colors);
console.log(lastItem);
console.log(mutated_array);



