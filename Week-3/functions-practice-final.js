// functions-practice.js
// Rule: All logic must be inside functions

// Setup data
const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Tesla", "Audi"];
const numbers = [7, 42, 3.14, 19, -8, 0];
const sentenceAboutCars =
  "  Are you crazy about cars? Yes, I love fast   cars and electric vehicles   ";
const decimalNumber = 19.87654;

// ────────────────────────────────────────────────
//PART 1: STRING + FUNCTIONS
// ────────────────────────────────────────────────

// Task 1: Clean & Format Text
// ────────────────────────────────────────────────
function cleanText(text) {
  return text.trim().toLowerCase();
}

console.log("Task 1:", cleanText(sentenceAboutCars));

// PART 2: STRING + FUNCTIONS
// ────────────────────────────────────────────────

function getFirstAndLastCharater(text) {
  const trimmedText = text.trim();
  return {
    first: trimmedText[0],
    last: trimmedText[trimmedText.length - 1],
  };
}

console.log("Task 2:", getFirstAndLastCharater(sentenceAboutCars));

// PART 3: STRING + FUNCTIONS
// ────────────────────────────────────────────────

function countTotalWords(sentence) {
  return sentence.trim().split(" ").length;
}

console.log("Task 3:", countTotalWords(sentenceAboutCars));

// ────────────────────────────────────────────────
//PART 2: ARRAY + FUNCTIONS
// ────────────────────────────────────────────────

// Task 4: Brand Checker
// ────────────────────────────────────────────────
// ### ask 4: Brand Checker

// Write a function that:

// 1. Takes an array of car brands
//const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Tesla", "Audi"];
// 2. Takes a brand name

function carBrandsName(brands, brandName) {
  for (let i = 0; i < brands.length; i++) {
    // ChatGPT Code!!! (Tried with if, else but failed)
    if (brands[i].toLowerCase() === brandName.toLowerCase()) {
      return "Brand exists";
    }
  }
  return "Brand not found";
} // 3. Returns:
console.log("Task 4:", carBrandsName(carBrands, "tesla")); //     - `"Brand exists"` if found
console.log("Task 4:", carBrandsName(carBrands, "fordsdfgsdf")); //     - `"Brand not found"` otherwise // 📌 Case-insensitive comparison required.

//Task 5: Get Last Brand
// ────────────────────────────────────────────────
// Write a function that:
function getLastBrand(brands) {
  return brands[brands.length - 1];
} // 1. Takes an array of car brands
console.log("Task 5:", getLastBrand(carBrands)); // 2. Returns the **last brand** using an array method

//Task 6: Format Brands List
// ────────────────────────────────────────────────
// Write a function that:
function formatBrandsList(brands) {
  return brands.join(", ");
} // 1. Takes an array of car brands
console.log("Task 6:", formatBrandsList(carBrands)); // 2. Returns a **single string** of brands separated by commas

// ────────────────────────────────────────────────
//PART 3: NUMBER + FUNCTIONS
// ────────────────────────────────────────────────
//Task 7: Safe Rounding
// ────────────────────────────────────────────────
// Write a function that:
// 1. Takes a number
function safeRound(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid number";
  }
  return Math.round(num);
} // 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
console.log("Task 7:", safeRound(decimalNumber)); //     - Round it normally
console.log("Task 7:", safeRound("abc")); //     - Return the result

//Task 8: Price Comparison
// ────────────────────────────────────────────────

function comparePrices(price1, price2) {
  if (price1 === price2) return "Prices are equal";
  return price1 > price2 ? "First is higher" : "Second is higher";
} // 1. Takes two prices
console.log("Task 8:", comparePrices(50, 75));
console.log("Task 8:", comparePrices(100, 100)); // 2. Returns: `"Prices are equal"`, `"First is higher"`, `"Second is higher"`

//Task 9: Random Whole Number
// ────────────────────────────────────────────────

function randomWholeNumber() {
  // Math.random() → random decimal between 0 and 1
  // multiply by 10 → range 0 to 10 (decimal)
  // Math.floor → round down to whole number 0-9
  // add 1 → final range 1-10
  return Math.floor(Math.random() * 10) + 1; // 1. Returns a random **whole number between 1 and 10**
} // 2. Explain the formula in comments

console.log("Task 9:", randomWholeNumber());

// ────────────────────────────────────────────────
// PART 4: CONDITIONAL THINKING
// ────────────────────────────────────────────────
// // Task 10: Budget Check
// ────────────────────────────────────────────────

function budgetCheck(carPrice, userBudget) {
  if (
    typeof carPrice !== "number" ||
    carPrice < 0 ||
    typeof userBudget !== "number" ||
    userBudget < 0
  ) {
    return "Invalid input";
  }
  return carPrice <= userBudget ? "Within budget" : "Over budget";
}
console.log("Task 10:", budgetCheck(5000, 6000));
console.log("Task 10:", budgetCheck(7000, 6000));
console.log("Task 10:", budgetCheck(-5000, 6000));
