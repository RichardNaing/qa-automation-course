// ─────────────────────────────────────────────
// Part 1: Arithmetic Operators
// ─────────────────────────────────────────────

let cashInHand = 400_000;
let checkingAccount = 150_000;
let savingsAccount = 250_000;
let monthlyExpenses = 500;

// Basic operations
let totalAssets = cashInHand + checkingAccount + savingsAccount;
let netDifference = cashInHand - (savingsAccount + checkingAccount);
let yearlyExpenses = monthlyExpenses * 12;
let approxDaily = monthlyExpenses / 30;

console.log("Total assets:            ", totalAssets);
console.log("Cash minus accounts:     ", netDifference);
console.log("Yearly expenses:         ", yearlyExpenses);
console.log("Approximate daily cost:  ", approxDaily.toFixed(2));

// Increment / Decrement
let myAge = 30;
myAge++;
console.log("Next year I will be:", myAge);

let currentHeight = 7;
currentHeight--;
console.log("Height without shoes  :", currentHeight);

// Remainder (modulo) & Exponentiation
console.log(
  "Savings ÷ monthly expenses remainder:",
  savingsAccount % monthlyExpenses,
);
console.log(
  "Monthly ÷ daily remainder:         ",
  monthlyExpenses % approxDaily,
);

console.log("Daily expense raised to power 4:    ", approxDaily ** 4);

// ─────────────────────────────────────────────
// Part 2: Comparison Operators
// ─────────────────────────────────────────────

let birthYear = 1990;
let birthYearString = "1990";

console.log("Strict equal (===)    :", birthYear === birthYearString); // false
console.log("Loose equal (==)      :", birthYear == birthYearString); // true (usually avoid ==)

// More comparisons
let myHeight = 7;
let brotherHeight = 7.2;

console.log("Brother is taller     :", brotherHeight > myHeight); // true
console.log("I am taller           :", brotherHeight < myHeight); // false
console.log("Heights are different :", myHeight !== brotherHeight); // true

// ─────────────────────────────────────────────
// Part 3: Truthy vs Falsy
// ─────────────────────────────────────────────

// Falsy values: false, 0, "", null, undefined, NaN

let loginId = ""; // empty string → falsy

if (loginId) {
  console.log("This won't run - falsy value detected");
} else {
  console.log("Falsy value detected (empty string)");
}

// Truthy value: non-empty string, non-zero number, objects, arrays, etc.
let greeting = "Hello from Boise!";

if (greeting) {
  console.log("Truthy value detected →", greeting);
}

// Default value with || (logical OR)
let maritalStatus = null;
let displayAnswer = maritalStatus || "Not specified / Are you a spy? 😄";

console.log("Final answer:", displayAnswer);

// ─────────────────────────────────────────────
// Challenge: Welcome message using logical operators only
// ─────────────────────────────────────────────

let username = "Richard";

// Method 1 – most common & readable
if (username) {
  console.log("Welcome back,", username);
} else {
  console.log("Please sign up");
}

// Method 2 – using && and || (more "clever" style)
username && console.log("Welcome back,", username);
!username && console.log("Please sign up");

// Method 3 – one-liner (popular in some code golf / short scripts)
(username || "Guest") && console.log("Hello,", username || "new friend");

// Test with empty username
username = "";
username && console.log("Welcome back,", username);
!username && console.log("Please sign up");
