//PART 1: for LOOP (Index Pratice)
//___________________________________________________

// Task 1: Print All Elements
//____________________________________________________

let Task1 = ["Apple", "Intel", "Tesla", "NVDA", "AMD"]; // 1. Takes an array
function stockList(Task1) {
  for (let i = 0; i < Task1.length; i++) {
    console.log("Task 1:", Task1[i]);
  }
}
stockList(["Apple", "Intel", "Tesla", "NVDA", "AMD"]); // Prints each element

// Task 2: Index + Vale
//____________________________________________________
function stockListValue(Task2) {
  for (let i = 0; i < Task2.length; i++) {
    console.log("Task 2:", `Index ${i}: ${Task2[i]}`);
  }
}
stockListValue(["Apple", "Intel", "Tesla", "NVDA", "AMD"]);

// Task 3: First and Last
//____________________________________________________
function firstAndLast(Task3) {
  if (Task3.lenght === 0) {
    return;
  }
  console.log("First element:", Task3[0]);
  console.log("Last element:", Task3[Task3.length - 1]);
}

firstAndLast(["Teach Stock", "RealEstate Stock", "Material Stock"]);

// PART 2: while LOOP (Strings)
//____________________________________________________
// Task 4: Loop Through a String
//____________________________________________________
// **Use a `while` loop**

// 1. Takes a **string**
const stockExchange = "NewYorkExchange";
function hereWeGo(stockExchange) {
  let i = 0; // 2. Uses a `while` loop
  while (i < stockExchange.length) {
    console.log("Stock Exchange Name:", stockExchange[i]);
    i++;
  }
}

hereWeGo(stockExchange);
// PART 3: for LOOP + CONTROL FLOW
//____________________________________________________
// Task 5: Stop When Found
//____________________________________________________
// **Use a `for` loop**

// Write a function that:
// let Task1 = ["Apple", "Intel", "Tesla", "NVDA", "AMD"]; // 1. Takes an array

/// 1. Takes an array and a value to search for
// 2. Loops through the array using a `for` loop
// 3. Stops the loop when the value is found
const phoneModel = ["Apple", "Google", "Sony", "Sumsaung"];
const findModel = "Sony";

function findMyphone(phoneList, brand) {
  for (let i = 0; i < phoneList.length; i++) {
    console.log(`Find: ${phoneList[i]}`);
    if (phoneList[i] === brand) {
      console.log("Value found! Stopping Loop.");
      break;
    }
  }
}

findMyphone(phoneModel, findModel);

// PART 4: `for...of` LOOP (Value Access)
// ### 🔂 Task 6: Print Values
// **Use a `for...of` loop**
// Write a function that:
// 1. Takes an array
// 2. Prints each value
const students = ["MieMie", "Kyaw", "Eric", "John"];

function findStudent(nameOfStudent) {
  for (const nameOfStudent of students) {
    console.log("Here is the Name:", nameOfStudent);
  }
}
findStudent(students);
