// functions-practice.js
// Rule: All logic must be inside functions

// Setup data
const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Tesla", "Audi"];
const numbers = [7, 42, 3.14, 19, -8, 0];
const sentenceAboutCars =
  "  Are you crazy about car?. Yes, I love fast   cars and electric vehicles   ";
const decimalNumber = 19.87654;

// ────────────────────────────────────────────────
// PART 1: STRING + FUNCTIONS
// ────────────────────────────────────────────────

function cleanText(text) {
  return text.trim().toLowerCase();
}

console.log("Task 1:", cleanText(sentenceAboutCars));

cleanText(comeOn);
