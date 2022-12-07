// function clickEvent() {
//     alert("Hello World");
// };
// // clickEvent();

// function HandleInputFieldValue(event) {
//     console.log(event.target.value);
//     var input_value = event.target.value;
// }
// 'use strict';
// vezba
// var todos = [
//     'Walk the dog',
//     'Renew drivers license',
//     'Read a book'
// ];

// var inputValue = "";

// function todosInputValue(event) {
//     inputValue = event.target.value;
//     console.log(event.target.value);
// }

// function clickButton() {
//     todos.push(inputValue);
//     console.log(todos);
// }

// Classes

// class Movie {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     get oscarWins() {
//         return this.ReturnOscarWins();
//     }

//     ReturnOscarWins() {
//         return `${this.name} has won 2 Oscars. It was released in ${this.year}.`;
//     }

// }

// const myMovie = new Movie ("Pulp Fiction", 1994);
// console.log(myMovie);
// console.log(myMovie.oscarWins);

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    ResultExercise() {
        return `${this.a + this.b} is the result from the exercise.`
    }

    get resExercise() {
        return this.ResultExercise();
    }
}

const result = new Calculator(20, 5);
console.log(result.resExercise);
    