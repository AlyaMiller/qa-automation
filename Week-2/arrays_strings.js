let fruits = ["apple", "orange", "banana", "kiwi"];
console.log(fruits);
console.log(fruits[3]);

//Updating array elements
fruits[3] = "mango"; //mutate
console.log(fruits);

//length
console.log(fruits.length);

//---------Methods that return new array-------//
//concat() - merges array into a new array

const fruitsTwo = ["apple", "banana", "orange"];
const moreFruits = ["cherry", "grape"];
const allFruits = fruitsTwo.concat(moreFruits);

console.log(allFruits);
console.log(fruitsTwo);

//flat() - flattens nested arrays into a single arrays
const nestedNumbers = [[1, 2], [2, 3], [5]];
const flatNumbers = nestedNumbers.flat();

console.log(flatNumbers);
console.log(nestedNumbers);
//Or
console.log(nestedNumbers[0]);
console.log(nestedNumbers[0][1]);

//Or
console.log(flatNumbers[1]);

//slice() - extracts a portion of the array without changing the original
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const slicedNumbersArray = numbers.slice(1, 4); //2 index for this method, 4 is not included. Exclude the last one.

console.log(slicedNumbersArray);

const myFavoriteColors = ["green", "yellow", "blue", "red", "white"];
const mySlicedFavoriteColors = myFavoriteColors.slice(1, 4);

console.log(mySlicedFavoriteColors);

//---------Methods that change the ORIGINAL array-------//
const originalFruits = ["kiwi", "banana", "cherry"];
const copyOriginalFruits = [...originalFruits];

console.log(originalFruits);
console.log(copyOriginalFruits);

//push()- adds a new elemnt at the end of an array
copyOriginalFruits.push("coconut");
console.log(originalFruits);
console.log(copyOriginalFruits);

//pop()- removes last elemnt from the array
console.log(originalFruits);
copyOriginalFruits.pop();
console.log(copyOriginalFruits);

//unshift() - adds an element at the beginning of an array
copyOriginalFruits.unshift("grape");
console.log(copyOriginalFruits);

//shift() - removes the first element from an array
copyOriginalFruits.shift();
console.log(copyOriginalFruits);

//reverse() - reverses an array
console.log(originalFruits);
console.log(copyOriginalFruits.reverse());

//sort()- sorts the array --> commonly used with numbers. It takes first the number 1,100,2
const newNumbers = [3, 6, 87, 1, 90, 56, 4];
newNumbers.sort();

//option 1
console.log(newNumbers);

//option 2
console.log(newNumbers.sort());

//sorting
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

//sorting arrays
const stringArray = ["a", "c", "z", "b"];
stringArray.sort();
console.log(stringArray);

//---------Methods that find an element in the array-------//
//indexOf()- returns the first index of a specific element inside an array

const myFavoriteColor = ["black", "olive green", "red", "white", "black"];
console.log(myFavoriteColor.indexOf("olive green"));
console.log(myFavoriteColor.indexOf("aaa")); //will return -1
console.log(myFavoriteColor.indexOf("black")); //gives the first one

//lstIndexOf()- returns the last index of a specific element inside an array
console.log(myFavoriteColor.lastIndexOf("black")); //gives the last one

//at() - gets an element at a specific position
console.log(myFavoriteColor.at(1));
console.log(myFavoriteColor.at(-1)); //getting last element

//includes() -checks if ana element exists inside an array
const trainLines = ["F", "E", "B", "D", "Z", "J"];
console.log(trainLines.includes("B")); //always return boolean
console.log(trainLines.includes("T"));
console.log(trainLines.includes("b")); //case sensitive

//----------Joiner & Converters-------------//
//join() - converts an array into string
const fruitsArray = ["Apple", "Banana", "Kiwi"];
const fruitsString = fruitsArray.join(", ");
console.log(fruitsArray); //[ 'Apple', 'Banana', 'Kiwi' ]
console.log(fruitsString); //Apple, Banana, Kiwi

//array.from() - create a new array from a  stirng
const str = "Hello";
const chars = Array.from(str); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(chars);

//Array.isArray() - checks if a vlaue is an array
const nycNumbers = [1, 2, 3, 4, 5]; //array
console.log(Array.isArray(nycNumbers));

const newNumber = 1; //number
console.log(Array.isArray(newNumber)); //false

//-----------String------------
//concat

let str1 = "Hello";
let str2 = "World!";
//console.log(str1.concat(" "), str2);
console.log(str1 + " " + str2);

const studentName = "Richard";
console.log("${studentName} loves coding");
console.log(`${studentName} loves coding`); //reusibility
console.log(studentName, "loves coding");
