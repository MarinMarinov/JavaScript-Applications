/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullname of founded students to the console
*   **Use underscore.js for all operations**
*/


function solve(){
    return function (students) {

        var rearrangedStudents = _.chain(students).
            filter(function(student){ return student.firstName < student.lastName; }).
            map(function(student){ return student.firstName + ' ' + student.lastName; }).
            sortBy().
            reverse().
            map(function(student){
                console.log(student);
            });
    };
}

module.exports = solve;

/*
var _ = require('underscore');

var students = [
    { firstName: "Pesho", lastName: "Todorov" },
    { firstName: "Gosho", lastName: "Petrov" },
    { firstName: "Tosho", lastName: "Angelov" },
    { firstName: "Petar", lastName: "Borisov" },
    { firstName: "Georgi", lastName: "Biserov" },
    { firstName: "Todor", lastName: "Toshov" },
    { firstName: "Acho", lastName: "Peshov" },
    { firstName: "Angel", lastName: "Achov" }
];

var firstNameBeforeLastNameList = _.filter(students, function(student){
    return student.firstName < student.lastName;
});

//console.log(firstNameBeforeLastNameList);

var fullNameList = _.map(firstNameBeforeLastNameList, function(student){
    return student.firstName + ' ' + student.lastName;
});

//console.log(fullNameList);


var sortedByFullName = _.sortBy(fullNameList);
//console.log(sortedByFullName);
var reversed = sortedByFullName.reverse();
//console.log(reversed);

console.log('--------------------------------------');

var studentsWithChaining = _.chain(students).
    filter(function(student){ return student.firstName < student.lastName; }).
    map(function(student){ return student.firstName + ' ' + student.lastName; }).
    sortBy().
    reverse().
    map(function(student){
        console.log(student);
    });*/
