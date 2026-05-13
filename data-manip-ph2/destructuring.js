const nasaResponse = {
  date: "2024-04-23",
  explanation: "A beautiful view of ...",
  title: "Mineral Moon",
  url: "https://nasa.gov/img123.jpg",
  media_type: "image",
};

// old way:
// const url = nasaResponse.url;
// const title = nasaResponse.title;

// Modern Way: called Destructuring
const { title, url } = nasaResponse;

console.log(title);
console.log(url);
