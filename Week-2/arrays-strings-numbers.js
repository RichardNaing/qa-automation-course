// Car Brands (Strings)\\

let carBrands = ["Tesla", "Toyota", "Audi", "BMW", "Jeep"]; //An array of car brands
let modelYear = ["2009", "2022", "2023", "2024", "2025"]; // An array of numbers

let extraSpace = "    Let's Do It!   "; // A string with extra spaces

let decimalNumber = 2026.01; // A decimal number

// Array ( Car Brands)
// Task 1:Accessing &Properties

// 1. Log the first car brand
console.log(carBrands[0]); // Array indices start at 0, so cars[0] gives the first car brand

// 2. Log the last care brand using a method
console.log(carBrands[4]); // Array indices start at 0, so cars[4] gives the last car brand

// 3. Log how many car brands are in the array
console.log(carBrands.length); // Lenght is a property that returns the numbers of car brands of in the array

// Task 2: Updating Elements

// 1. change the second car brand
carBrands[1] = "GMC"; // Array indices start at 0, so the second car brand [1] gives the car brand that need to change
console.log(carBrands);

// 2. Change the last car brand
carBrands[4] = "Honda"; // Array indices start at 0, so the last car brand [4] gives the car brand that need to change
console.log(carBrands);

// 3. Log the updated array
console.log("Final Update Array = ", carBrands); // FInal car brand elements updated

// Task 3: Mutator Methods

//1. Add a new car brand to the **end**
let copyCarBrand = [...carBrands];
console.log(carBrands);
console.log(copyCarBrand);
copyCarBrand.push("Mazda"); // push and (name) adding name on the last elements
console.log(copyCarBrand);

//2. Remove the **last** car brand
copyCarBrand.pop(); // pop() create removing the last elements
console.log(copyCarBrand);

//3. Add a new car brand to the **beginning**
copyCarBrand.unshift("Porsche"); // .unshift add a element at the beginning of an array
console.log(copyCarBrand);

//4. Remove the **first** car brand
copyCarBrand.shift(); // .shift remove a element at the beginning of an array
console.log(copyCarBrand);
console.log(copyCarBrand);

//5. Reverse the array
console.log(copyCarBrand.reverse()); // reverse an arry

//6. Sort the array alphabetically
console.log(copyCarBrand.sort()); // sort the arry alphabetically

console.log("Final car brand log updated = ", copyCarBrand);

// Finder Methods

// 1. Check if `"Toyota"` exists in the array
// indexOf() - return the index of a specific elemtent inside an array

const usaCarBrands = ["Ford", "Chevrolet", "Cadillac", "Tesla", "Jeep", "Ford"];
console.log(usaCarBrands.indexOf("Tesla")); // indexOf() - Return the first index of a specific elemtn inside an array. Always return the first elements

// 2. Find the index of `"Jeep"`
console.log(usaCarBrands.indexOf("Jeep")); // IndexOf() - always look for the first element insode an array

// 3. Find the last index of a car brand that appears more than once
console.log(usaCarBrands.lastIndexOf("Ford")); // last indexOf() - Return the last index of a specific elemtn inside an array. Always return the last elements

// Task 5: Joiners

// 1. Convert the car brands array into a **single string**
const usaCarBrandsString = usaCarBrands.join(" , "); // most common separator double quotation
console.log(usaCarBrandsString);
const usaCarBrandsString1 = usaCarBrands.join(" | "); // different separator using pipe
console.log(usaCarBrandsString1);
const usaCarBrandsString2 = usaCarBrands.join(""); //no separator at all
console.log(usaCarBrandsString2);

// 2. Check if the car brands variable is an array
console.log(Array.isArray(["Jeep", "Tesla"])); //Array.isArray() is to check the object from the an array

// 3. Convert the word `"ENGINE"` into an array of characters
const word = "ENGINE";
const word1 = word.split(""); // Split into characters

console.log(word1);
// ---------------------------------------------------------------------------

// PART 2: STRING MANIPULATION
// Task 6: Clean a String

//1. Remove extra spaces from the string

const crazyMessyText = "   Let's   code untile you   really enjoy         it! ";
console.log(crazyMessyText.trim()); // only clean at front and back extra spaces (not in the middle spaces)
const cleaned = crazyMessyText.trim();
console.log("cleanedString :", crazyMessyText.trim()); //2. Log the cleaned string
console.log("Length:", cleaned.length); //3. Log its length

// Task 7: Case & Access

let studentName = "Richard Naing";
console.log("All uppercase:", studentName.toUpperCase()); // 1. Convert the string to **uppercase**
console.log("All uppercase:", studentName.toLowerCase()); // 2. Convert the string to **lowercase**
console.log("Log the first character:", studentName.slice(0, 7)); // 3. Log the **first** character
console.log("Log the last character:", studentName.slice(7)); // 4. Log the **last** character

// Task 8: Slice & Replace

let studentEmail = "richardbbnaing@gmail.com"; // 1. Extract the **first word**
console.log("Extract the first word:", studentEmail.slice(0, 7));
console.log("Extract the last word:", studentEmail.slice(21)); // 2. Extract the **last word**
console.log(
  "Replace obe word another:",
  studentEmail.replace("gmail", "yahoo"), // 3. Replace one word with another
);

// ask 9: Search Methods
let carCompanyName = "tesla.carbrand@tesla.com";

console.log(carCompanyName.includes("car")); // 1. Check if the string includes `"car"`
console.log("Position of the 'car':", carCompanyName.indexOf("car")); // 2. Find the position of a word
console.log("Strat with a specific word", carCompanyName.startsWith("tesla")); // 3. Check if the string starts with a specific word
console.log("Strat with a specific word", carCompanyName.endsWith("com")); // 4. Check if the string ends with a specific word//

// Task 10: Split & Concat

let listToBuy = "Tesla, GMC, Ford, Jeep";
console.log(listToBuy.split(",")); // 1. Split the sentence into words
console.log(listToBuy.concat(" ", carCompanyName)); // 2. Join two strings using a method (not `+`)

// Task 11: Template Literals

const carbrand = "Tesla Model Y"; // - car brand
const YearMade = 2024; // - car year (has to be in the past)
const currentYear = 2026;
console.log("carAge:", currentYear - YearMade); // - car age (think about how you get the car age)

const sentence = `My ${carbrand} is from ${YearMade} and it is already ${console.log("carAge:", currentYear - YearMade)} year old! What a lovely car!`;
console.log(sentence); // Create a sentence using the variables and print the output

// PART 3: NUMBERS
// Task 12: Rounding

let myhigh = 5.11;
console.log(Math.round(5.11)); // 1. Round a decimal normally
console.log(Math.floor(5.11)); //2. Always round down
console.log(Math.ceil(5.11)); //3. Always round up
console.log(Math.trunc(5.11)); //4. Remove the decimal part

// Task 13: Formatting

let teslaPrice = 65000.9136;
console.log(teslaPrice.toFixed(2)); // 1. Format a number to **2 decimal places**
console.log(Number("Sity Five Thounsand")); // 2. Explain (in comments) why the result is **not a number**

// Task 14: Conversions

let myBrotherHigh = "6";
let mySisterHigh = "5.78";
let myBrotherInLawHigh = "5 and nine";

console.log("strNumber:", myBrotherHigh); // 1. Convert a numeric string into a number
console.log("strDecimal:", mySisterHigh); // 2. Convert a decimal string into an integer
console.log("strMessy:", myBrotherHigh); // 3. Convert a decimal string into a float

// Task 15: Checking

console.log(Number.isInteger(9)); // 1. Check if a value is **Not a Number**
console.log(Number.isInteger(9.5)); // 2. Check if a number is an integer

// Task 16: Math Utilities

const num1 = -25;
const num2 = 42;
const num3 = 7.89;
const favNumbers = [15, -8, 42, 3, 99, -17, 56];

console.log(Math.abs(num1)); // 1. Find the absolute value of a number
console.log(Math.min(...favNumbers)); // 2. Find the smallest number
console.log(Math.max(...favNumbers)); // 3. Find the largest number
console.log(Math.pow(10, 5)); // 4. Raise a number to a power
console.log(Math.sqrt(25)); // 5. Find the square root of a number

/// Task 17: Random Numbers

console.log(Math.random());

let random50000to50010 = Math.floor(Math.random() * (50010 - 5000 + 1)) + 200;
console.log(random50000to50010); // 1. Generate a random number between 0 and 1

console.log(Math.random());

let random501to1000 = Math.floor(Math.random() * (1000 - 501));
console.log(random501to1000); // 2. Generate a random whole number between **1 and 10**
//const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min; // 3. Explain the formula in comments
