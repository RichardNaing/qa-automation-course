// 🛠 Setup
const carBrands = ["Toyota", "Honda", "Tesla", "BMW", "Audi"];
const numbers = [10, 20, -30, 40, 50, -9];
const carSentence =
  "   Are you crazy about cars? Yes, I love fast   cars and electric vehicles   ";
const decimalNumber = 45.67;

// 🔹 PART 1: STRING + FUNCTIONS

// Task 1: Clean & Format Text
function task1(stringText) {
  return stringText.trim().toLowerCase();
}

// Task 2: First & Last Character
function firstAndLastChar(stringText) {
  stringText = stringText.trim();
  if (stringText.length === 0) return { first: "", last: "" };
  return { first: stringText[0], last: stringText[stringText.length - 1] };
}

// Task 3: Word Counter
function wordCount(carSentence) {
  carSentence = carSentence.trim();
  if (carSentence === "") return 0;
  const words = carSentence.split(" ", " "); // split by spaces
  return words.length;
}

// 🔹 PART 2: ARRAY + FUNCTIONS

// Task 4: Brand Checker
function checkBrand(brands, brandName) {
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].toLowerCase() === brandName.toLowerCase()) {
      return "Brand exists";
    }
  }
  return "Brand not found";
}

// Task 5: Get Last Brand
function getLastBrand(brands) {
  return brands[brands.length - 1];
}

// Task 6: Format Brands List
function formatBrandsList(brands) {
  return brands.join(", ");
}

// 🔹 PART 3: NUMBER + FUNCTIONS

// Task 7: Safe Rounding
function safeRound(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid number";
  }
  return Math.round(num);
}

// Task 8: Price Comparison
function comparePrices(price1, price2) {
  if (price1 === price2) return "Prices are equal";
  return price1 > price2 ? "First is higher" : "Second is higher";
}

// Task 9: Random Whole Number
function randomWholeNumber() {
  // Math.random() → random decimal between 0 and 1
  // multiply by 10 → range 0 to 10 (decimal)
  // Math.floor → round down to whole number 0-9
  // add 1 → final range 1-10
  return Math.floor(Math.random() * 10) + 1;
}

// 🔹 PART 4: CONDITIONAL THINKING

// Task 10: Budget Check
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

// 🔹 Testing the functions
console.log("Task 1:", task1("   Hello WORLD   "));
console.log("Task 2:", firstAndLastChar("   Hello World   "));
console.log("Task 3:", wordCount(carSentence));

console.log("Task 4:", checkBrand(carBrands, "tesla"));
console.log("Task 4:", checkBrand(carBrands, "ford"));
console.log("Task 5:", getLastBrand(carBrands));
console.log("Task 6:", formatBrandsList(carBrands));

console.log("Task 7:", safeRound(decimalNumber));
console.log("Task 7:", safeRound("abc"));
console.log("Task 8:", comparePrices(50, 75));
console.log("Task 8:", comparePrices(100, 100));

console.log("Task 9:", randomWholeNumber());

console.log("Task 10:", budgetCheck(5000, 6000));
console.log("Task 10:", budgetCheck(7000, 6000));
console.log("Task 10:", budgetCheck(-5000, 6000));
