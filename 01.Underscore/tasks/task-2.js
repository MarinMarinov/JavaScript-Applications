/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName`, `lastName` and `age` properties
*   **finds** the students whose age is between 18 and 24
*   **prints**  the fullname of found students, sorted lexicographically ascending
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve(){
    return function (students) {
        _.chain(students).
            filter(function(students){
                return students.age > 17 && students.age < 25;
            }).
            map(function(student){
                return student.firstName + ' ' + student.lastName;
            }).
            sortBy().
            map(function(students){
                console.log(students);
            });
    };
}

module.exports = solve;

/*
var _ = require('underscore');

var students = [
    { firstName: "Pesho", lastName: "Todorov", age: 18 },
    { firstName: "Gosho", lastName: "Petrov", age: 19 },
    { firstName: "Tosho", lastName: "Angelov", age: 17 },
    { firstName: "Petar", lastName: "Borisov", age: 20 },
    { firstName: "Georgi", lastName: "Biserov", age: 24 },
    { firstName: "Todor", lastName: "Toshov", age: 35 },
    { firstName: "Acho", lastName: "Peshov", age: 42 },
    { firstName: "Angel", lastName: "Achov", age: 22 }
];

_.chain(students).
    filter(function(students){
        return students.age > 18 && students.age < 24;
    }).
    map(function(student){
        return student.firstName + ' ' + student.lastName;
    }).
    sortBy().
    map(function(students){
    console.log(students);
});*/
