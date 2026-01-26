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
