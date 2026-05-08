//1. Data Types
//Identify the Data Type
"Hello World"; //string
42; // number
true; //boolean
null; //null
undefined; //undefined
[1, 2, 3]; //array
({ name: "Alex", age: 20 }); //object

//2. Variables
//A string for my favorite movie
let myFavoriteMovie = "I don't know";

//A number for my age
const myAge = 31;

//A boolean for whether if I like JavaScript
let likeJavaScript = true;

//A variable with undefined value
let ticketsSold;
console.log(ticketsSold);

//Assigning the value
ticketsSold = 45;
console.log(ticketsSold);

//A variable with null value
let dressColor = null;

//Assigning the value
dressColor = "red";
console.log(dressColor);

//3. Primitive vs Non-Primitive
let a = "JS"; //primitive
let b = [10, 20]; //Non-Primitive
let c = 100; //primitive
let d = { city: "Paris" }; //Non-Primitive

//Explain in 1–2 sentences why arrays and objects are called non-primitive.
//Becauce they can hold a multiple values and values can be changed(mutable).

//4. Modify the Value
let x = "Hello";
let y = x;
y = "Hi";
console.log(x);

//a) What is the value of `x`?  x = "Hi"        --QQ: why? looks like on primitive we aren't assigning y to x?
//b) Is this an example of primitive or non-primitive behavior? Why?
//I think it's example of the primitive behaviour. String data.

//5. Array
//Create 3 different arrays that contains 5 elements each.
//Use different data types for each array.
//Log (console.log) the entire array

let city = ["Tokio", "New York", "Sidney", "San Jose", "Vermont"]; //QQ: const vs let, sometimes not clear when to apply
let zipcodes = [11210, 34242, 33245, 53532, 78953];
let cleaningDays = [
  "Mon",
  true,
  "Tue",
  false,
  "Wed",
  true,
  "Thu",
  true,
  "Fri",
  false,
];
console.log(city, zipcodes, cleaningDays);

//6. Object
//Create 3 different objects representing something real (example: phone, car, book, student, game etc).
const book = {
  title: "Educated",
  author: "Tara Westover",
  publishedIn: ["USA", "New York"],
  publishedYear: 2018,
  identifiers: 2017036745,
};

console.log(book);
console.log(book.identifiers, book.author);

const pencilCapErasers = {
  quantity: 25,
  colors: ["blue", "yellow", "pink", "green", "ornage"],
  qualification: "latex-free",
  brand: "Up&up",
  cost: 2.0,
};

console.log(pencilCapErasers);
console.log(pencilCapErasers.colors, pencilCapErasers.cost);

const game = {
  name: "World of Warcraft",
  product: "Midnight Base Edition",
  ifFreeTrialAvailable: true,
  cost: 49.99,
  platforms: ["Windows", "Mac"],
};

console.log(game);
console.log(game.product, game.ifFreeTrialAvailable);

//---------------------------------------------------------------------------------
//Part B. Control Flow
//7. If statement, checks if a number is positive
if (x > 0) {
  console.log("Positive number");
}

//8. If- else. Create a boolean variable.
let isItHotOutside = true;

if (isItHotOutside) {
  console.log("Turn on the AC!");
} else {
  console.log("Turn off the AC!");
}

//else if, Takes a student’s score
let score = 67;

if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade c");
} else {
  console.log("Fail");
}

//10. Switch statement
//Create a variable with multiple possible values (string or number)
// let role = "Closing Coordinator";

// switch (role) {
//   case "Admin":
//     console.log("You are an Admin");
//     break;
//   case "Closer":
//     console.log("You are a Closer");
//     break;
//   case "Manager":
//     console.log("You are a Manager");
//     break;
//   default:
//     console.log("Unknown role");
// }

let role = "Admin";

switch (role) {
  case "Admin":
    console.log("You are an Admin");
  case "Closer":
    console.log("You are a Closer");
  case "Manager":
    console.log("You are a Manager");
  default:
    console.log("Unknown role");
}

//Challenge
let number = 67;

if (number < 0) {
  console.log("Negative number, we don't care!");
} else if (number > 0 && number < 10) {
  console.log("Single digit number!");
} else if (number >= 10 && 99 >= number) {
  console.log("Double digit number!");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else!",
  );
}

//Test
