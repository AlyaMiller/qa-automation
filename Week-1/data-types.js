const myName = "Tohir";
console.log(myName);

let isLightOn = false;
console.log("Is the light on?", isLightOn);

isLightOn = true;
console.log("Is the light on?", isLightOn);

//In the assigned seats in a party, nobody has arrived so it is null.
let seatOwner = null;
console.log("Seat status:", seatOwner);

seatOwner = "Bohdana";
console.log("Seat status:", seatOwner);

//Undefined
let studentPresent; //variable declaration
console.log("Student present?", studentPresent);

//empty array
const color = [];

//arrays (non-primitive), Index [0]
const colors = ["green", "red", "blue"];
console.log(colors);

//not recommended
let array = ["John", 30, true];
console.log(array);

//object (non-primitive), key = value
const person = {
  name: "Alex",
  age: 42,
  isStudent: false,
  favoriteFruits: ["banana", "apple", "mango"],
  country: {
    countryName: "Saudia Arabia",
    city: "Riyadh",
    zipCode: "567890",
  },
};
console.log(person);
console.log(person.country);
console.log(person.favoriteFruits);
