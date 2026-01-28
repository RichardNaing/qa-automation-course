// Arrays
const carBrands = ["Toyota", "BMW", "Tesla", "Ford", "Honda"];
const numbers = [10, 25, 7, 99];

// Sentence & decimal
const carSentence = "   Cars are fast and fun to drive   ";
const decimalNumber = 7.6;

// =====================
// 🔹 PART 1: STRING + FUNCTIONS
// =====================

// 🔤 Task 1: Clean & Format Text
function cleanText(text) {
  return text.trim().toLowerCase();
}

let result = cleanText(carSentence);
console.log(result);

// 🔤 Task 2: First & Last Character
function getFirstAndLastChar(text) {
  const trimmedText = text.trim();
  return {
    first: trimmedText[0],
    last: trimmedText[trimmedText.length - 1],
  };
}

const result1 = getFirstAndLastChar(carSentence);
console.log(result1);

// 🔤 Task 3: Word Counter
function countWords(sentence) {
  return sentence.trim().split(" ").length;
}

const result3 = countWords(carSentence);
console.log(result3);
