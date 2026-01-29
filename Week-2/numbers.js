// JavaScript has one number type for all numeric values.

// 1. One number type

let butterFlyCandy = 0.1;
let butterFlyCandyWithCream = 0.2;

console.log("Buying both candy", 0.1 + 0.2);
console.log("Buying both candy", 0.1 + 0.2 === 0.3);

const unitPricePerGram = 0.03;
const grams = 150;
const total = unitPricePerGram * grams;
console.log("twoButterFlyCandy", butterFlyCandy + butterFlyCandy);
console.log(
  "buyBothCandyAndReturnOne",
  butterFlyCandy + butterFlyCandy - butterFlyCandy,
);
console.log(total);

// 2. Basic Number Operation

console.log(1200 + 500);
console.log(1700 - 500);
console.log(1000 * 5);
console.log(5001 / 5); // JavaScript always returns a decimal for division.
console.log(5002 % 100); // remainder

// 3. Compareing Numbers

console.log(0.3 > 0.2);
console.log(5 - 3 < 10 - 5);
console.log(500 === 500);
console.log(500 !== 300);

// 4. Rounding Numbers

console.log(Math.round(5004.6)); // round it into 5005
console.log(Math.round(203.3)); // rouns it into 203

// 5. Rounding Down

console.log("Task 5", Math.floor(4009.9));
console.log("Task 5", Math.floor(4009.1));

// 6. Rounding Up

console.log(Math.ceil(4009.9));
console.log(Math.ceil(4009.1));

// 7. Rounding Remove The Decimal Part

console.log(Math.trunc(4009.9));
console.log(Math.trunc(4009.1));

// Formatting Numbers

let myhigh = 5.923;
console.log(myhigh.toFixed(2));

// 8. Converting Numbers

console.log(Number("5.923"));
console.log(Number("Come On"));

// 9. Converting Numbers - Value into an interger by removing decimals

console.log(parseInt("5.923"));
console.log(parseInt("4009.1"));
console.log(Math.trunc("5.923"));

// 10. Converting Numbers - Value into a decimal number

console.log(parseFloat("10.50000001"));

// 11. Converting Numbers - Value is not a number

console.log(isNaN("HelloWorld!"));
console.log(isNaN(2026));

// 12. Converting Numbers - Value is an integer

console.log(Number.isInteger(20250123));
console.log(Number.isInteger(2026.5));

// 13. Math Utility Methods

console.log(Math.pow(100, 5));

// 14. Math Utility Methods

console.log(Math.sqrt(20216));

// Math Utility Methods

console.log(Math.random());

let random50000to50010 = Math.floor(Math.random() * (50010 - 5000 + 1)) + 200;
console.log(random50000to50010);
