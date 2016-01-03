// Early days js debugging process
// but this is not convenient for like a loop
// alert("Hey there");

// The most modern way is used to console
// Nothing pops up but we can see the message in our console
console.log("Hey there");

// We can pass any long element to the console from the DOM
console.log(document.querySelector('#main'))

// This information can be sent as directoy format
console.dir(document.querySelector('#main'))

// Formating message
console.info("Same Message");

// Warning in the console
console.warn("Same Message");

// We can also give an error message to the console for drawing attention of somebody
console.error("Same Message");

// Show the all image links in a group named Page Links
console.group("Page Links");
console.dir(document.querySelectorAll('a'));
console.groupEnd();

// Show the all paragraphs in a group named Paragraphs those are in the form of collapsed
console.groupCollapsed("Paragraphs");
console.dir(document.querySelectorAll('p'));
console.groupEnd();

// How long took to something execute
// Here BigLoop is the label
console.time("BigLoop");
for (var i = 1000000; i >= 0; i--) {
}
// make sure label matched perfectly
console.timeEnd("BigLoop");

// If assert false then give an error message in the console
console.assert(
  // If false 
  document.querySelectorAll('nav ol>li').length===2,
  // Output the line following
  "Sorry, there's only two menu items"
);