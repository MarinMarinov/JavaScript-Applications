/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName`, `age` and `marks` properties
        *   `marks` is an array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve(){
  return function (students) {
      var theBestStudent = _.chain(students).
          map(function(student){
              student.fullName = student.firstName + ' ' + student.lastName;

              var sum = 0;
              var len = student.marks.length;

              for(var i = 0; i < len; i++){
                  sum += student.marks[i];
              }

              student.averageMark = +(sum / len).toFixed(3);

              return student;

          }).
          sortBy('averageMark').
          last().
          value();

      console.log(theBestStudent.fullName + ' has an average score of ' + theBestStudent.averageMark);
  };
}

module.exports = solve;

var _ = require('underscore');

var students = [
  { firstName: "Pesho", lastName: "Todorov", age: 18, marks: [3.5, 4.2 , 3.25 , 5.12 , 4.45 , 3.25] },
  { firstName: "Gosho", lastName: "Petrov", age: 19, marks: [3.5, 5.2 , 3.25 , 6.12 , 4.45 , 3.25] },
  { firstName: "Tosho", lastName: "Angelov", age: 17, marks: [3.5, 4.2 , 4.25 , 3.12 , 4.45 , 3.25] },
  { firstName: "Petar", lastName: "Borisov", age: 20, marks: [3.5, 4.2 , 3.25 , 3.12 , 5.45 , 3.15] },
  { firstName: "Georgi", lastName: "Biserov", age: 24, marks: [5.5, 5.2 , 5.25 , 5.12 , 5.45 , 5.25] }, // the best
  { firstName: "Todor", lastName: "Toshov", age: 35, marks: [3.5, 4.2 , 3.25 , 5.12 , 4.45 , 3.25] },
  { firstName: "Acho", lastName: "Peshov", age: 42, marks: [3.5, 3.2 , 3.25 , 4.12 , 5.45 , 3.25] },
  { firstName: "Angel", lastName: "Gochov", age: 22, marks: [3.5, 3.2 , 3.25 , 4.12 , 4.45 , 3.25] }
];

var theBestStudent = _.chain(students).
    map(function(student){
        student.fullName = student.firstName + ' ' + student.lastName;

        var sum = 0;
        var len = student.marks.length;

        for(var i = 0; i < len; i++){
            sum += student.marks[i];
        }

        student.averageMark = +(sum / len).toFixed(3);

        return student;

    }).
    sortBy('averageMark').
    last().
    value();

console.log(theBestStudent.fullName + ' has an average score of ' + theBestStudent.averageMark);

