// Day 1 Challenge: Start Coding! ✔✨
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let message:string=("Javeria,")
console.log("hello" .concat(message,"would you like to learn to learn Typescript."));


// QUESTION 3: Names Cases: Store a person's name in lowercase , uppercase , titlecase.
let personName =("Javeria Shahzad")
console.log("Uppercase:", personName.toUpperCase());
console.log("Lowercase:", personName.toLowerCase());
console.log("Titlecase:", personName.replace(/\b\w/g,function (c){return  c.toUpperCase() }));
