//---------------Numbers
//Rounding Numbers, Math.round()
let check1 = 6459;
let check2 = 676;
let total = check1 / check2;
console.log(total); // 9.554733727810651
console.log(Math.round(total)); //10

//Math.floor()---always rounds down
console.log(Math.floor(total)); //9.554733727810651 --> 9
console.log(Math.floor(6.8795)); //6

//Math.ceil()---Always rounds up
console.log(Math.ceil(total)); //9.554733727810651 --> 10
console.log(Math.ceil(6.1)); //7

//Math.trunc()---Removes the decimal part
console.log(Math.trunc(total)); //9.554733727810651 ---> 9

//.toFixed()- Formatting Numbers---> rertuns STRING
console.log(total.toFixed()); //9.554733727810651 --> "10"
console.log(total.toFixed(5)); // "9.55473"

//Number()-  Converts a value into a number
let groupID = "76844";
let groupID1 = "76D"; //D- letter
console.log(Number(groupID)); //76844
console.log(Number(groupID1)); //NaN

//parseInt()- Converts a value into an integer by removing decimals
console.log(parseInt("886.9943")); //886

//parseFloat() - Converts a value into a decimal number
console.log(parseFloat("853,222")); // 853- , is not a valid number character, so it stops there
console.log(parseFloat(groupID1)); //76D----> 76
console.log(parseFloat("853.222")); //853.222

//isNaN() - is Not a Number- Checks whether a value is Not a Number
console.log(isNaN(groupID)); // "76844" --->converts to 76844, false
console.log(isNaN(total)); //false
console.log(isNaN("Hello")); //true

//Number.isInteger() - Checks whether a value is an integer
console.log(Number.isInteger(groupID)); // "76844" ---> false
console.log(Number.isInteger(check1)); //6459 --> true

//Math.abs() - Returns the absolute value of a number
//The positive version of a number, removes the negative sign.
console.log(Math.abs(-55)); //55
console.log(Math.abs(0)); //0

//Math.min() - Returns the smallest value
let numGroup = [3, 5, 2, 99, 0.2, 1, 66];
console.log(Math.min(...numGroup)); //0.2
//console.log(Math.min(3, 5, 2, 99, 0.2, 1, 66));  //0.2

//Math.max() - Returns the largest value
console.log(Math.max(76, 5, 32, 89.6, 85, 89)); //89.6

//Math.pow() - Raises a number to a power
console.log(Math.pow(5, 3)); // 5*5*5 = 125

//Math.sqrt() - Returns the square root of a number
console.log(Math.sqrt(100)); //10
console.log(Math.sqrt(358)); //18.920887928424502

//Math.random() - Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
let password = Math.random() * 1000;
//template literal
console.log(`New password: ${Math.round(password)} is assined to the user.`);

//string concatenation
console.log(
  "New password: " + Math.round(password) + " is assined to the user.",
);
