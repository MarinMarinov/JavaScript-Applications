/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/

function solve(){
  return function (animals) {
      var totalNumberOfLegs = _.reduce(animals, function(sum, animal){
          return sum + animal.legsCount;
      }, 0);

      console.log('Total number of legs: ' + totalNumberOfLegs);
  };
}

module.exports = solve;

var _ = require('underscore');


var animals = [
    { name: "Pesho", species: "Tiger", legsCount: 4 },
    { name: "Gosho", species: "Caterpillar", legsCount: 8 },
    { name: "Tosho", species: "Caterpillar", legsCount: 8 },
    { name: "Barabosho", species: "Caterpillar", legsCount: 7 },
    { name: "Petkan", species: "Tiger", legsCount: 3 },
    { name: "Dragan", species: "Tiger", legsCount: 4 }
];

var totalNumberOfLegs = _.reduce(animals, function(sum, animal){
    return sum + animal.legsCount;
}, 0);

console.log('Total number of legs: ' + totalNumberOfLegs);