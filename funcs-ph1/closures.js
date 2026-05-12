// in js, if a func returns another func, something
// shit like happens, weird.
// the inner function packs a backpack of all the vars
// it needs from the outer func, and carries that backpack
// w it forever, even after the outer func has completely
// finished running and 'died';
//

function setupTelescope(telescopeName) {
  let photoCount = 0;

  // we are returning a whole func okay, wtf, but why??
  return () => {
    photoCount++;
    console.log(`${telescopeName} has taken ${photoCount} photos.`);
  };
}

const trackHubble = setupTelescope("Hubble");
const trackWebb = setupTelescope("James Webb");

trackHubble();
trackHubble();
trackWebb();

// challenge:

function createBatsman(playerName) {
  let runs = 0;

  return (runsScoredOnThisBall) => {
    runs += runsScoredOnThisBall;
    console.log(`${playerName} is batting on ${runs} runs`);
  };
}

// alternative way

// function createBatsman(playerName) {
//   let runs = 0;

//   function innerMachine(runsScoredOnThisBall) {
//     runs += runsScoredOnThisBall;
//     console.log(`${playerName} is batting on ${runs} runs`);
//   }
//   return innerMachine; --> notice here we didnt call the func.
// }

// js doesnt care about the syntax of the inner function;
// it only cares that the inner func refs vars from the outer one

// assigning the func to a variable matter because of Garbage collector
// when you do assign, the GC sees a var is still holding onto that inner func
// since the inner func is still alive, the backpack it carries must also stay alive
// NOTE: the closure inst just a snapshot or a copy of the variable, its a live link.
//
const viratKohli = createBatsman("Virat Kohli");
const abd = createBatsman("AB de villiers");
viratKohli(4);
abd(6);
abd(6);
viratKohli(4);

function createSecret() {
  let secret = "Initial Secret";

  return {
    getSecret: () => secret,
    setSecret: (newVal) => (secret = newVal),
  };
}

const myVault = createSecret();
console.log(myVault.getSecret());

myVault.setSecret("I love JS"); // -> this is the live link im talking about.
// before i call the func again, we've changed the value, it gets updated.
console.log(myVault.getSecret());
