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
