// IIFE (immediately invoked function Expressions)
// used when you want to run some code once and hide
// your variables from the global scope without
// ever needing to call that function again

((name) => {
  console.log("Whoaa");
  console.log(name);
})("Sheshasai");
