//Topics: Arrays · Strings · Numbers
const carBrands = ["Toyota", "Honda", "Ford", "Subaru", "Porsche"];

//--------------Part 1: Arrays
//Task 1: Accessing & Properties
console.log(carBrands[0]); //array indexes starts wwith the 0, and i got the first element in the list
console.log(carBrands.at(-1)); //this function and adding -1 helps find the last element name
console.log(carBrands.length); //thsi property helps to find the number of the elements in the list

//Task 2: Updating Elements
carBrands[1] = carBrands[1].replace("Honda", "BMW");
carBrands[4] = "Lexus";

console.log(carBrands);

//Task 3: Mutator Methods
carBrands.push("Chevrolet"); // Adding a new car brand to the **end**
console.log(carBrands);

carBrands.pop(); //Removing the **last** car brand
console.log(carBrands);

carBrands.unshift("Cadillac"); //Adding a new car brand to the **beginning**
console.log(carBrands);

carBrands.shift();
console.log(carBrands); //Removing the **first** car brand

carBrands.reverse();
console.log(carBrands);

carBrands.sort();
console.log(carBrands);

//Task 4: Finder Methods
console.log(carBrands.includes("Toyota")); //true, Toyota includes in the Car brands lists

console.log(carBrands.indexOf("BMW")); //0, since it's the first element in the list

carBrands.push("BMW");
console.log(carBrands); //[ 'BMW', 'Ford', 'Lexus', 'Subaru', 'Toyota', 'BMW' ]
console.log(carBrands.lastIndexOf("BMW")); //5

//Task 5: Joiners
//Converts the car brands array into a single string
console.log(carBrands.toString()); //BMW,Ford,Lexus,Subaru,Toyota,BMW

//Checks if the car brands variable is an array
console.log(Array.isArray(carBrands)); //true

//Converts the word "ENGINE" into an array of characters
let word = "ENGINE";
let char = Array.from(word);
console.log(char); //[ 'E', 'N', 'G', 'I', 'N', 'E' ]

//---------------PART 2: STRING MANIPULATION
//Task 6: Clean a String
let lavazzaCoffee =
  "  A leading Italian brand offering great value and strong espresso flavors.  ";
let updatedLavazzaCoffee = lavazzaCoffee.trim();
console.log(updatedLavazzaCoffee);
console.log(updatedLavazzaCoffee.length); //73

//Task 7: Case & Access
let coffeeName = "Lavazza";
let upperCase = coffeeName.toLocaleUpperCase();
console.log(upperCase);

let lowerCase = coffeeName.toLowerCase();
console.log(lowerCase);

console.log(coffeeName.charAt(0)); //ONLY positive. /L
console.log(coffeeName.at(-1)); //a

//Task 8: Slice & Replace(??)
let welcomeMessage = "Welcome to our VIP Deals Club";
console.log(welcomeMessage.slice(0, 7)); //Welcome

console.log(welcomeMessage.indexOf("Club")); //25, position of the word
console.log(welcomeMessage.slice(25)); //Club

console.log(welcomeMessage.replace("Club", "Group"));

//Task 9: Search Methods
console.log(welcomeMessage.search("Car"));
console.log(welcomeMessage.startsWith("wel")); //false, since lower case
console.log(welcomeMessage.endsWith("Club.")); //fasle, since dot at the end

//Task 10: Split & Concat
let flowers = "Sunflower,tulips,rose";
console.log(flowers.split(",")); //creates array, [ 'Sunflower', 'tulips', 'rose' ]

let coffeeBrands = "Counter Culture, Intelligentsia";
let coffeeBrands2 = "Onyx Coffee Lab, Coffee Bros";
console.log(coffeeBrands.concat(coffeeBrands2));

//Task 11: Template Literals
let carBrand = "Toyota Camry SE";
let carYear = 2017;
let carAge = 2026 - carYear;
console.log(
  `${carYear} ${carBrand} - Only 35,000 miles.Only ${carAge} years old. Clean title. $22,000`,
);

//-------------------PART 3: NUMBERS
//Task 12: Rounding
let num = 34.2589;
console.log(Math.round(num)); //34, nearest int
console.log(Math.floor(num)); //34, round down
console.log(Math.ceil(num)); //35, round up
console.log(Math.trunc(num)); //34, remoce decimals

//Task 13: Formatting
let code = 34;
console.log(code.toFixed(2)); //34.00
//??- Explain (in comments) why the result is not a number

//Task 14: Conversions
console.log(Number("65.50")); //65.5
console.log(Number("6500")); //6500
console.log(parseFloat("64.890")); //64.89
console.log(parseInt("64.890")); //64

//Task 15: Checking
//NaN- is Not a Number
console.log(isNaN(flowers)); //true
console.log(isNaN(code)); //false
console.log(isNaN(34.6)); //false

//Task 16: Math Utilities
console.log(Math.abs(-34)); //34
console.log(Math.min(1, 27, 34.6, 34, 23)); //1
console.log(Math.max(1, 27, 34.6, 34, 23)); //34.6
console.log(Math.pow(10, 3)); //1000
console.log(Math.sqrt(625)); //25

//Task 17: Random Numbers
console.log(Math.random());

let nums = Math.random() * 10;
console.log(Math.round(nums));
//Math.random() generates random number between 0 to 1
//to get bigger amounts can be multiplied by 10/100 etc.

//FINAL MINI CHALLENGE
const carTypes =
  "  Major types include Sedans, Coupes, Hatchbacks, Crossovers, SUVs, Convertibles.  ";
const updateCarTypes = carTypes.trim().toLocaleUpperCase();
const splitting = updateCarTypes.split(" ");
console.log(`${splitting.length}`);

console.log(typeof true);
