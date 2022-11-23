//  Loops - ciklusi

//  for loops

// for() {
//     // ovde se sto e vo toj blok kje se izvrsi povekje pati, nie kje odlucime kolku pati
// }
// i e kratko od index. sekogas for ciklusi pocnuvaat so i. imame 3 cekori na ciklusot, vtor e uslovkolku pati()

// for(var i = 0; i <= 10; i++) {
//     // console.log("The index is at number " + i);
//     console.log(`The index is at number ${i}`);
// };

// for(var i = 0; i <= 100; i+=5) {
//     // console.log("The index is at number " + i);
//     console.log(`The index is at number ${i}`);
// };

// for(var i = 100; i >= 0; i--) {
//     // console.log("The index is at number " + i);
//     console.log(`The index is at number ${i}`);
// };

// sekoj element vo niza se cuva na nekoj indexen broj 0, 1,2....

// var movies = [
//     {name: "Pulp Fiction", year: 1994},
//     {name: "Mad Max", year: 1982},
//     {name: "Double Indemnity", year: 1954},
//     {name: "Cold War", year: 1954}
// ];

// console.log(movies);
// console.log(movies[0]);
// console.log(movies[1]);
// console.log(movies[2]);

// loop i so filter  sekoj objekt vo nov red da se ispecati

// for(var i = 0; i>=2; i++) {
//     console.log(movies[i]);
// }
// for(var i = 0; i < movies.length; i++) {
//     // console.log(movies[i].year, movies[i].name);
//     if(movies[i].year === 1954) {
//         console.log(movies[i]);
//     }
// };

// var numbers = [15, 192, 14, 84, 883, 74, 92, 12, 74, 56];
// var summa = 0;
// for(var i = 0; i < numbers.length; i++) {
//     summa += numbers[i];
// }
// console.log(`The sum of the numbers array is ${summa}`);

// console.log("The sum of the array numbers is 1238");

// var other_numbers = [
//     [5, 10, 15, 20],
//     [40, 50, 60, 70],
//     [100, 200, 300, 400]
// ];

// console.log(other_numbers);
// console.log(other_numbers[0]);
// console.log(other_numbers[1]);
// console.log(other_numbers[2]);

// console.log(other_numbers[0][0]);
// console.log(other_numbers[0][3]);

// var result = 0;

// for(var i = 0; i < other_numbers.length; i++) {
//     // console.log(other_numbers[i]);
//     for(var j = 0; j < other_numbers.length; j++) {
//         // console.log(other_numbers[i][j]);
//         result += other_numbers[i][j];
//     }
// };

// console.log(result);



