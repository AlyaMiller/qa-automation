//Operators Practice

//Use `let` or `const` for all variables
//Do not hardcode `true` or `false` as answers
//Each question must use at least one operator.

//-----------------Part 1
//1
let num1 = 67;
let num2 = 35;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//2
let num = 47;
num++;
console.log(num);

num--;
console.log(num);

//3
let testScore1 = 100;
let testScore2 = 80;
console.log(testScore1 % testScore2);

//4
let num3 = 25;
console.log(num3 ** 3);

//---------------Part 2: Comparison Operators
//1
let studentScore = 96;
let studentScore1 = "96";
console.log(studentScore === studentScore1); //false
console.log(studentScore == studentScore1); //true , to chekc the difference

//2
let cost1 = 450;
let cost2 = 451;
if (cost1 > cost2) {
  console.log("The first is greater than the second");
} else {
  console.log("The first is less than the second");
}

//3
let value1 = 5;
let value2 = "5";
console.log(value1 !== value2);

//---------------- Part 3: Logical Operators
//1, combined both
let customerRequestedColor = "Blue";
let isBlueAvailable = false;
if (customerRequestedColor && isBlueAvailable) {
  console.log("We can take the order!");
} else {
  console.log("We can't take the order!");
}

//2
if (90 > 80 || 10 > 78) {
  console.log("We got at least one match"); //both false
} else {
  console.log("No matches");
}

//3
let sunnyDay = true;
console.log(!sunnyDay);

//---------------Part 4: Truthy vs Falsy
//4
let numberOfGuests = "";
if (numberOfGuests) {
  console.log("Truthy value detected");
} else {
  console.log("Falsy value detected");
}

//default value
let coffeeType = undefined;
console.log(coffeeType || "Americano");

//Challenge, logical operators only
let username = "Alina";
if (username || null) {
  console.log("Welcome back");
} else {
  console.log("Please sign up");
}
