//-----------------------Strings
//string length, accessing characters, changing case
let text =
  "A bar graph showing the number of printed books in the US compared to the number of e-books from 2010 to 2020. The graph shows a general upward trend for e-book sales, with a significant spike in 2015. Conversely, printed book sales show a slow, steady decline over the same period, despite a slight increase in 2018.";
console.log(text.length); //317

console.log(text.indexOf("significant")); //175
console.log(text.indexOf("telephone")); //-1
console.log(text[9]); //p

console.log(text.toUpperCase("number")); //always converts the whole string
console.log(text.toLowerCase());

//trimming spaces
let text1 = "     The background   is a solid    pale    blue  ";
// text1.trim();
// console.log(text1); //!!!!! original unchanged, spaces still there

console.log(text1.trim()); //only removes spaces from the beginning and end of a string

//slice(start, end);
let text2 =
  "Long descriptions are text versions of the information provided in a detailed or complex image";
console.log(text2.slice(5, 17)); //end is not included
console.log(text2.slice(5));

//replace
console.log(text2.replace("text versions", "type version"));
console.log(text2.replace("iphone", "iphone")); // No error, nothing changed either.

//includes
let newText2 = text2.includes("complex image");
console.log(newText2);
console.log(text2.includes("iphone")); //false

//split(separator)
let flowers = "sunflowers,tulips,lilies,orchids";
console.log(flowers.split()); //can't find anything to split on
console.log(flowers.split(","));
console.log(flowers.split("")); //split after every single character

//concat(joins)
let fruitTypes1 = "mango, kiwi, watermelon";
let fruitTypes2 = "apples, bananas,oranges";
console.log(fruitTypes1.concat(", ", fruitTypes2));

//startsWith(), endsWith()
let mail = "albina.test@gmail.com";
console.log(flowers.startsWith("o")); //only checks the very beginning of the whole string, not each word inside.
console.log(mail.startsWith("test")); //false
console.log(mail.endsWith("com")); //true, Last character/word of the whole string

//template literals
let userName = "Simona";
let age = 18;
let accessCode = 574;
console.log(
  `Welcome, ${userName}, since you are ${age} years old, you can sign in using your code: ${accessCode}`,
);

//multi-line strings
let poem = `Shall I compare thee to a summers day?
  Thou art more lovely and more temperate:
  Rough winds do shake the darling buds of May,
  And summers lease hath all too short a date...`;
console.log(poem);

//Expressions Inside Template Literals, ${}
let a = 4623;
let b = 5734;
let c = 3;
console.log(
  `The sum of the ${a} and ${b} is ${a + b} and total of the ${a} divided by ${c} is ${a / c}`,
);

//Combining String Methods + Template Literals
let user = "Tom James";
let studentScore = 76;
console.log(`Student: ${user.toLowerCase()} got score of ${studentScore}`);
