// 1.Identify the Data Type

// Data type "Hello World" = String
// Data type 42 = Number
// Data type true = Boolean
// Data type null = Null
// Data type undefined = Undefined
// Data type [1, 2, 3] = Primitive and Non-Primitive Analogy
// Data type { name: "Alex", age: 20 } = Data Types and Data Structures

//2.Create Variables

// A **string** for your favorite movie
let myFavoriteMovie = "The Lord of the Ring"; // String Type
console.log(myFavoriteMovie);

// A **number** for your age
let ageInFiveYears = 40; // Number type
console.log(ageInFiveYears);

// A **boolean** for whether you like JavaScript
let finishedHomework = true; //boolean type
let hasDiverLicense = false;
let likesCoffee = true;
let isWeekEnd = true;
console.log(finishedHomework);
console.log(hasDiverLicense);
console.log(likesCoffee);
console.log(isWeekEnd);

// A variable with **undefined** value
let username; // underfined type
let nickname = undefined;
console.log(username);
console.log(nickname);

// A variable with **null** value

let createdUsername = null; // null type
let deleteAccounts = null;
let searchResult = null;
console.log(createdUsername);
console.log(deleteAccounts);
console.log(searchResult);

//a) Which of the following are **primitive** and which are **non-primitive**?

let a = "JS"; // Primitive (String)
let b = [10, 20]; // Non-Primitive (Array)
let c = 100; // Primitive (Number)
let d = { city: "Paris" }; // Non-Primitive (Object)

// b) Explain in **1–2 sentences** why arrays and objects are called *non-primitive*.
// Array and objects are Non-Primitive because they are complex data types that can store
// multiple values. Array are used to store multiple valuse in a single variable and allow
// single access by index. Object are used to group related data together and access values
// using keys.

// Modify the Value
//Look at the code below and answer the questions:

let x = "Hello"; // String data type
let y = x;
y = "Hi";

//a) What is the value of `x`?
// x="Hello"

//b) Is this an example of primitive or non-primitive behavior? Why?
// Primitive behavior because "Hello" and "Hi" are primitive data types.

// Array

// Create 3 different arrays that contains 5 elements each.

// **Tasks:**
// Use different data types for each array.
// Array 1: student Profile
let studentProfile = [
  "Richard", // String data type
  35, // Number data type
  true, // Boolean data type
  null, // Null data type
  ["trading", "playing chess"], // Array (non-primitive)
];
console.log(studentProfile);

// Log (console.log) the entire array
// Array 2: Type of devices and software infomation

let devicesAndSoftwareInfo = [
  "Mac_Pro", // string data type (laptop type)
  2400, // Number data type (Price)
  true, // Boolean data type (lated OS installed)
  {
    brand: "Apple", // object data type ( non-primitive) (Brand and color)
    color: "Black",
  },
  undefined, // undefined (Dobly sound system include or not)
];
console.log(devicesAndSoftwareInfo);

// Array 3: Javascrip data types

let javascripDataTypes = [
  "String", // String data type (letter)
  123, // Number data type (Number)
  [true, false], // Boolean data type (True or false)
  undefined, // underfined data type (Undefined)
  null, // Null data type (Null)
];
console.log(javascripDataTypes);

// Object

// Create 3 different objects representing **something real** (example: phone, car, book, student, game etc).
// Requirements for each object:
// At least **5 properties**
// At least **1 property must be an array**
//Tasks:

//Object 1: Smartphone
let smartphone = {
  brand: "Google", // String data type - Phone Brand Name
  model: "Pixel 10 Pro", //String data type - Phone Model
  screenSizeInches: 6.8, // Number data type - Phone Screen Size Inches
  is5G: true, // Boolean data type - 5G network aviliable?
  storageGB: 256, // Number data type - Phone stroage size
  colors: ["Obisidian", "Porcelain", "Hazel", "Rose Quartz"], // array data type - Phone colors
  priceUSD: 999, // Number data type - Phone price
  releaseYear: 2025, // number data type - Year of release
};
console.log(smartphone); // Log (console.log) the entire object

// Access **two properties (keys)** using dot notation and print the value of those properties.
console.log(smartphone.model);
console.log(smartphone.priceUSD);

// Control Flow
//If Statement
// Write a program that:
// Checks if a number is **positive**

let number = 21;
if (number > 20) {
  console.log("Positive number"); // You can apply the driver license
}

//Prints `"Positive number"` if true

// If–Else
// Create a **boolean variable** (your choice of meaning).
//Tasks:
//Use `if / else` to log different messages depending on the boolean value
//Change the value and run the code again

let isWeekend = false; // chage between ture and false

if (isWeekend) {
  console.log("It is a weekend. Let's go hiking!");
} else {
  console.log("It is a weekday... better get some homework done First");
}

//Else If
//Write a program that:
//Takes a student’s score
//Prints:
// `"Grade A"` if score > 90
//`"Grade B"` if score > 80
//`"Grade C"` if score ≥ 70
//`"Fail"` otherwise

let score = 65; // Score value

if (score > 90) {
  console.log("Grade A - Super Dupa!");
} else if (score > 80) {
  console.log("Grade B - Not bad!");
} else if (score >= 70) {
  console.log("Grade C - Not really love it, need to improve more!");
} else {
  console.log("Fail - Come on! Let's study together.");
}

// Switch Statement
//Create a variable with **multiple possible values** (string or number - your choice).
//Tasks:**
//Use a `switch` statement
//Include **at least 3 cases** and a `default`
// Log different messages for each case
//Do two examples one with `break` and one without and see the difference.

let homeworkQuestion = "Where is"; // let work with "Where is", "Why is", "What is", "Who is","When is"

switch (homeworkQuestion) {
  case "Where is":
    console.log("Where is you super dupa crazy homework?");

  case "Why is":
    console.log(
      "Why is it did you call super dupa crazy homework and always missing?"
    );

  case "What is":
    console.log("What is mysterious force that eats assignments?");

  case "Who is":
    console.log(`Who is responsible? (Come on not me!)`); // with `Break`

  case "When is":
    console.log(`When is it ever going to be finishedHomework?!`); // with `Break`

  default:
    console.log("...I'm going to pretend I didn't do my homework. Haha");
}

//Challenge (Optional - No hint)
//I will be so happy if you can solve this. Please try, don’t simply give up.
//Write a program that:
//Prints `"Negative number, we don't care"` (think about the number yourself)
//Prints `"Single digit number"` (think about the number yourself)
//Prints `"Double digit number"` (think about the number yourself)
//Prints `"Definitely not a negative, single or double digit number, so it is something else` (think about the number yourself)

number = 42;

if (number < 0) {
  console.log("Negative number, we don't care");
} else if (number <= 9) {
  console.log("Single digit number");
} else if (number <= 99) {
  console.log("Double digit number");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else"
  );
}
