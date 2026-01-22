//Part 1: Arithmetic Operators

//1. Create two numbers and:
let cashInHand = 400000; // created four number and see how that work
let checkInAccount = 150000;
let savingAccount = 250000;
let monthlyExpenses = 500;

let totalAsset = cashInHand + checkInAccount + savingAccount;
let difference = cashInHand - (savingAccount + checkInAccount);
let yearlyExpenses = monthlyExpenses * 12;
let dailyExpense = monthlyExpenses / 30;

console.log("addTotalAsset =", cashInHand + checkInAccount + savingAccount); // - Add them
console.log("subtractSaving&CheckInAccount =", savingAccount - checkInAccount); // - Subtract them
console.log("yearlyExpenses =", monthlyExpenses * 12); // - Multiply them
console.log("dailyExpense =", monthlyExpenses / 30); // - Dicide them

//2. Create a number and:

let myCurrentAge = 30;

myCurrentAge++;
console.log("My next year age will be", myCurrentAge); //- Increase it by 1 using an operator

let currentHigh = 7;
currentHigh--;
console.log("But when i take out my shoe :P.", currentHigh); //- Decrease it by 1 using an operator

// 3. Create two numbers and print: Remainder

console.log(savingAccount % monthlyExpenses); //- The remainder when the first is divided by the second
console.log(monthlyExpenses % dailyExpense);

// Create a number and raise it to the power of 3.

console.log(dailyExpense ** 4); //16.66 raised to the power of 4

// Part 2: Comparison Operators

// 1. Create two variables:
let dateOfBirth = 1990; //- One number
let dateOfBirthString = "1990"; // - One string with a number inside

console.log(dateOfBirth === dateOfBirthString); // Compare them using `===` and print the result.

// 2. Create two different numbers and:
currentHigh = 7;
myBrotherCurrentHigh = 7.2;

console.log(myBrotherCurrentHigh > currentHigh); // - Check if the first is greater than the second
console.log(myBrotherCurrentHigh < currentHigh); // - Check if the first is less than the second

// 3. Create two values and check if they are not equal using !==.

currentHigh = 7;
myBrotherCurrentHigh = 7.2;

console.log(currentHigh !== myBrotherCurrentHigh);

// ## Part 3: Logical Operators
//1. Create two comparison expressions and combine them using `&&`.
let temperature = 30;
let isSunny = true;

let goodWeatherForWalk = temperature >= 20 && isSunny === true;
console.log(goodWeatherForWalk);

//2. Create two comparison expressions and combine them using `||`.

temperature = 70;
isSunny = true;

goodWeatherForWalk = temperature >= 60 || isSunny === true;
console.log("Should we go walk outside?", goodWeatherForWalk);

//3. Create a boolean variable and Reverse its value using !

let isSheHot = true;
console.log("Not Hot Baby!", !isSheHot);

// Part 4: Truthy vs Falsy
// 1. Create a variable with a value that is falsy.
let logInId = "";
if (!logInId) {
  console.log("Falsy value detected!"); // * Use it in an if statement
} // * Print "Falsy value detected" if it runs

// 2. Create a variable with a value that is **truthy**.
let helloMessage = "Hello from Boise!"; // - Use it in an `if` statement

if (helloMessage) {
  console.log("Truthy value detected!");
} // - Print `"Truthy value detected"` if it runs

// 3. Create a variable and use `||` to give it a **default value**.
let areYouSignle = null;
let answer = areYouSignle || "Are you spy";

console.log("Final display name:", answer); //- Print the final value.

// Challenge (Optional ⭐)
let username = "Richard"; // 1. Create a variable called `username`.

console.log("welcome back");

// > Use **logical** operators only.>

username = "Richard";
username && console.log("Wellcome back, Richard");
!username && console.log("Please sign up"); //If it exists (truthy), print `"Welcome back"`

username = "";
username && console.log("Wellcome back");
!username && console.log("Please sign up"); // - Otherwise, print `"Please sign up"`
