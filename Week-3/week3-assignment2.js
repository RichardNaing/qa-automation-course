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
    console.log("Array is empty");
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
const stockExchange = ["NYC", "Nasdaq", "CME"];
let i = 0; // 2. Uses a `while` loop
while (i < stockExchange.length) {
  console.log("Stock Exchange Name:", stockExchange[i]);
  i++;
}

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
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
for (let key in person) {
  console.log(key + ":" + person[key]);
}
