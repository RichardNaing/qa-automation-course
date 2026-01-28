// functions-practice.js
// Rule: All logic must be inside functions

// Setup data
const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Tesla", "Audi"];
const numbers = [7, 42, 3.14, 19, -8, 0];
const sentenceAboutCars = "  I love fast   cars and electric vehicles   ";
const decimalNumber = 19.87654;

// ────────────────────────────────────────────────
// PART 1: STRING + FUNCTIONS
// ────────────────────────────────────────────────

function cleanAndFormatText(text) {
  return text.trim().toLowerCase();
}

function getFirstAndLastChar(str) {
  if (str.length === 0) {
    return { first: "", last: "" };
  }
  return {
    first: str[0],
    last: str[str.length - 1],
  };
}

function countWords(sentence) {
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

// ────────────────────────────────────────────────
// PART 2: ARRAY + FUNCTIONS
// ────────────────────────────────────────────────

function checkBrandExists(brands, brandName) {
  const lowerBrands = brands.map((b) => b.toLowerCase());
  const search = brandName.toLowerCase();
  return lowerBrands.includes(search) ? "Brand exists" : "Brand not found";
}

function getLastBrand(brands) {
  return brands.at(-1) || "";
}

function formatBrandsList(brands) {
  return brands.join(", ");
}

// ────────────────────────────────────────────────
// PART 3: NUMBER + FUNCTIONS
// ────────────────────────────────────────────────

function safeRound(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid number";
  }
  return Math.round(number);
}

function comparePrices(price1, price2) {
  if (price1 === price2) return "Prices are equal";
  if (price1 > price2) return "First is higher";
  return "Second is higher";
}

function getRandomNumberOneToTen() {
  // Math.random() → 0.0 to <1.0
  // × 10          → 0.0 to <10.0
  // Math.floor()  → 0 to 9
  // +1            → 1 to 10
  return Math.floor(Math.random() * 10) + 1;
}

// ────────────────────────────────────────────────
// PART 4: CONDITIONAL THINKING
// ────────────────────────────────────────────────

function checkBudget(carPrice, userBudget) {
  if (
    typeof carPrice !== "number" ||
    typeof userBudget !== "number" ||
    isNaN(carPrice) ||
    isNaN(userBudget) ||
    carPrice < 0 ||
    userBudget < 0 ||
    carPrice === 0 ||
    userBudget === 0
  ) {
    return "Invalid input";
  }

  return carPrice <= userBudget ? "Within budget" : "Over budget";
}

// ────────────────────────────────────────────────
// PRINT RESULTS (test calls)
// ────────────────────────────────────────────────

console.log("=== PART 1: STRINGS ===");
console.log("Cleaned text:", cleanAndFormatText(sentenceAboutCars));
console.log("First & last char:", getFirstAndLastChar("  Hello World  "));
console.log("First & last char (empty):", getFirstAndLastChar(""));
console.log("Word count:", countWords(sentenceAboutCars));
console.log(
  "Word count (extra spaces):",
  countWords("   one   two    three   "),
);

console.log("\n=== PART 2: ARRAYS ===");
console.log("Tesla exists?", checkBrandExists(carBrands, "tesla"));
console.log("Ferrari exists?", checkBrandExists(carBrands, "Ferrari"));
console.log("Last brand:", getLastBrand(carBrands));
console.log("Formatted brands:", formatBrandsList(carBrands));

console.log("\n=== PART 3: NUMBERS ===");
console.log("Rounded:", safeRound(decimalNumber));
console.log("Rounded (invalid):", safeRound("42abc"));
console.log("Price comparison (30000 vs 32000):", comparePrices(30000, 32000));
console.log("Price comparison (45000 vs 45000):", comparePrices(45000, 45000));
console.log("Random number 1–10:", getRandomNumberOneToTen());

console.log("\n=== PART 4: BUDGET CHECK ===");
console.log("45000 <= 50000 →", checkBudget(45000, 50000));
console.log("60000 <= 50000 →", checkBudget(60000, 50000));
console.log("Negative price →", checkBudget(-1000, 20000));
console.log("Negative budget →", checkBudget(30000, -5000));
console.log("Not a number →", checkBudget("thirty", 40000));
console.log("Zero price →", checkBudget(0, 20000));
