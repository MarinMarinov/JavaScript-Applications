/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **groups** the animals by `species`
    *   the groups are sorted by `species` descending
*   **sorts** them ascending by `legsCount`
	*	if two animals have the same number of legs sort them by name
*   **prints** them to the console in the format:

```
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    GROUP_1_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in group 1
    NAME has LEGS_COUNT legs //for the second animal in group 1
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    GROUP_2_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in the group 2
    NAME has LEGS_COUNT legs //for the second animal in the group 2
    NAME has LEGS_COUNT legs //for the third animal in the group 2
    NAME has LEGS_COUNT legs //for the fourth animal in the group 2
```
*   **Use underscore.js for all operations**
*/

function solve(){
  return function (animals) {

      var groupedAndSortedBySpeciesDescending = _.chain(animals).sortBy('species').reverse().groupBy('species').value();

      _.each(groupedAndSortedBySpeciesDescending, function(animal, speciesName, list){
          var sortedAnimalsByLegs = _.sortBy(animal, 'legsCount');
          var sortedAnimalsByName = _.sortBy(sortedAnimalsByLegs, 'name');

          console.log(new Array(speciesName.length + 2).join('-'));
          console.log(speciesName + ':');
          console.log(new Array(speciesName.length + 2).join('-'));

          _.each(sortedAnimalsByLegs, function(animal){
              console.log(animal.name + ' has ' + animal.legsCount + ' legs');
          })
      });
  };
}

module.exports = solve;

var _ = require('underscore');

/*var animals = [
    { name: "Pesho", species: "Tiger", legsCount: 4 },
    { name: "Gosho", species: "Caterpillar", legsCount: 8 },
    { name: "Tosho", species: "Caterpillar", legsCount: 8 },
    { name: "Barabosho", species: "Caterpillar", legsCount: 7 },
    { name: "Petkan", species: "Tiger", legsCount: 3 },
    { name: "Dragan", species: "Tiger", legsCount: 4 }
    ];*/

var animals = [{
    name: 'Illtyd',
    species: 'Fly',
    legsCount: 4
}];
var groupedAndSortedBySpeciesDescending = _.chain(animals).sortBy('species').reverse().groupBy('species').value();

_.each(groupedAndSortedBySpeciesDescending, function(animal, speciesName, list){
    var sortedAnimalsByLegs = _.sortBy(animal, 'legsCount');
    var sortedAnimalsByName = _.sortBy(sortedAnimalsByLegs, 'name');

    console.log(new Array(speciesName.length + 2).join('-'));
    console.log(speciesName + ':');
    console.log(new Array(speciesName.length + 2).join('-'));

    _.each(sortedAnimalsByLegs, function(animal){
        console.log(animal.name + ' has ' + animal.legsCount + ' legs');
    })
});


