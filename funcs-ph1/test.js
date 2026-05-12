// Higher Order Functions in JS;
// if a func accetps another function as an argument, or it returns a function.
// the func you pass into it is called a callback function.
//

const skyData = [
  { name: "Jupiter", type: "planet", visibility: "clear" },
  { name: "Mineral Moon", type: "moon", visibility: "cloudy" },
  { name: "Sirius", type: "star", visibility: "clear" },
];

// so unlike other languages (python) object's key doenst have to be a string or any other data type huh?? its like wtf to me rn

const isClearTonight = (celestialBody) => {
  return celestialBody.visibility === "clear";
};

// .filter() func is jus a higher order function under the hood,
// it takes in a function called a callback function
//
// you call filter() on skyData - list of objects.
const clearTargets = skyData.filter(isClearTonight);

console.log(clearTargets);

// practice challenge:

const rcbScores = [263, 49, 218, 205, 68];
const checkScore = (score) => {
  return score >= 200 ? true : false;
};

function analyseInnings(arr, callbackF) {
  const filteredScores = [];

  for (let i = 0; i < arr.length; i++) {
    const currentScore = arr[i];

    const didPassTest = callbackF(currentScore);

    if (didPassTest === True) {
      filteredScores.push(currentScore);
    }
  }

  return filteredScores;
}
