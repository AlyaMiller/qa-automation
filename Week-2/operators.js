// 1. Addition

console.log(5 + 7);

const number = 5 + 2;
console.log(number + 5);

//2. Substraction
console.log(9 - 4);

//3. Multiplication
console.log(2 * 4);

//4. Devision
console.log(8 / 4);

//5. Exponention
console.log(2 ** 3);

//6. Modulus (Reminder)
console.log(8 % 3);

//7. Increment operator
let a = 5;
a++; //5+1
console.log(a);

//8. Decrement opeartor
let b = 11;
b--; //11-1, only does by one
console.log(b);

//Comparison Operator

//1. Strict equal( will give us a boolean data type).
console.log(5 === 5);
console.log(5 === 8);

//"!"" sign(reverse the value)
console.log(!(8 > 3));

//2. Not Strict equal
console.log(5 !== 5); //true ---> false
console.log(5 !== 8); //false ---> true

//3. Greater than
console.log(20 > 12);

//4. Less than
console.log(8 < 12);

//5. Greate than or equal
console.log(8 >= 4);
console.log(8 >= 4);

//6. Less than or equal
console.log(10 <= 20);
console.log(12 <= 20);

//Number vs text file
console.log(5 == "5"); //true, "5" converts to 5
console.log(5 === "5"); //false , comparing data types
console.log(5 == "five"); // false, "five" can't be converted to 5
console.log(5 === "five"); // false, different type AND value

//Logical Operators
//1. && (and) operator - return true if both conditions are true

if (5 > 3 && 2 < 4) {
  console.log("Hi, Nyc!");
}

//only one true and code didn't run
if (5 > 3 && 8 < 4) {
  console.log("Hi, Nyc!");
}

//"" -empty string -falsy,
//"Hi" - true, truthy
if (8 > 6 && "") {
  console.log("Hello");
}

//2. || (or) operator - returns true if at least one of the condition is true
if (5 > 3 || 8 < 4) {
  console.log("Hi, Idaho!");
}

//3. ! (not) operator - negates a boolean value, turning true to false nand vice versa
console.log(!(5 > 3)); //false
console.log(!"Hello"); //false
console.log(!null); //true
console.log(!0); //true
