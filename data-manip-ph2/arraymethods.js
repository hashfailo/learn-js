const observations = [
  { body: "Mars", quality: 80, visible: true },
  { body: "Saturn", quality: 45, visible: false },
  { body: "Jupiter", quality: 95, visible: true },
  { body: "Unknown", quality: 10, visible: false },
];

// .filter() - looks at every item, decides if it stays or goes based on a rule
const visibleOnly = observations.filter((item) => item.visible === true);
console.log(visibleOnly);

// .map() - takes an arr, creates a brand new arr of the exact same len, but w data transformed
// it doesnt change the original array
const bodyNames = observations.map((item) => item.body.toUpperCase());
console.log(bodyNames);

// .reduce() - takes an entire arr and squashes it into one single value
const totalQuality = observations.reduce((total, item) => {
  return total + item.quality;
}, 0); // here 0 means the index pos for this method to start from
// prediction before i hit run. ig this reduce totals the quality from all the bodies and spits it out.
console.log(totalQuality); // got it right hehe!

// TECHNICALLY, js's reduce() return only single value, but it can return a new array if you explicity set one as your starting point
const numbers = [1, 2, 3, 4];

const squares = numbers.reduce((accumulator, current) => {
  accumulator.push(current * current);
  return accumulator;
}, []); // here i kept 2 square brackets indicating that its the initial value

console.log(squares);

// while you can defo use let, modern js standards recommend using `const`
// chaining filter() and map(), becuase we can
const clearReport = observations
  .filter((obs) => obs.visible) // 1. Keep only visible ones
  .map((obs) => `Spotted: ${obs.body}`); // 2. Turn them into strings

console.log(clearReport);

// challenge:

const matchStats = [
  { name: "Virat", runs: 82, balls: 53 },
  { name: "Rajat", runs: 41, balls: 20 },
  { name: "Maxwell", runs: 5, balls: 8 },
  { name: "Siraj", runs: 0, balls: 1 },
];

// create a new arr that only includes players who scored more than 10 runs:
const playersWithMoreThan10Runs = matchStats.filter(
  (player) => player.runs > 10, // this is what you call implicit return btw
);

// const strikeRates = matchStats.map((player) => {
//   let currentSR = (player.runs / player.balls) * 100;
//   return {
//     name: player.name,
//     sr: currentSR,
//   };
// });

const impactPlayers = matchStats
  .filter((player) => player.runs > 10)
  .map((player) => ({
    name: player.name,
    sr: (player.runs / player.balls) * 100,
  }));
console.log(impactPlayers);

/*
  THE PARENTHESES TRAP:

  When using .map() or any arrow function to return an object implicitly:

  - If I write: (player) => { name: 'Virat' }
    JS thinks the { } is a code block (like a function body).
    It looks for a 'return' keyword, doesn't find one, and returns undefined. WTF.

  - The Fix: (player) => ({ name: 'Virat' })
    Wrapping the object in ( ) tells JS: "Yo, this isn't a code block,
    it's an object literal. Just return the damn object."

  Always use the ( { } ) combo when mapping to objects. Stick it in the brain.
*/
