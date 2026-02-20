// 🔹 PART 1: BASIC TYPES

// Task 1: String Variables
let studentName: string = "Richard";
let course: string = "TypeScript Fundamentals";

// Task 2: Number Variables
let age: number = 30;
let price: number = 19.99;

// Task 3: Boolean Variables
let isStudent: boolean = true;
let isOnline: boolean = false;

// 🔹 PART 2: THE `any` TYPE

// Task 4: Flexible Variable
let randomValue: any;

randomValue = 42;
randomValue = "Now I am a string";
randomValue = true;

// 🔹 PART 3: TYPE INFERENCE

// Task 5: Let TypeScript Guess the Type
let city = "New York"; // inferred as string

// city = 123;
// ❌ Error: Type 'number' is not assignable to type 'string'

// 🔹 PART 4: TYPED ARRAYS

// Task 6: String Array
let carBrands: string[] = ["Toyota", "Honda", "Ford", "BMW"];

// Task 7: Number Array
let scores: number[] = [85, 92, 78, 90, 88];

// 🔹 PART 5: TYPED OBJECTS

// Task 8: Simple Object
let user: { name: string; studentAge: number; isAdmin: boolean } = {
  name: "Richard",
  studentAge: 30,
  isAdmin: false,
};

// Task 9: Product Object
let product: { title: string; price: number; inStock: boolean } = {
  title: "Laptop",
  price: 999.99,
  inStock: true,
};

// 🔹 FINAL MINI-CHALLENGE

// Task 10: Real-World Data
let students: { name: string; age: number; isActive: boolean }[] = [
  { name: "Alice", age: 20, isActive: true },
  { name: "Bob", age: 22, isActive: false },
  { name: "Charlie", age: 19, isActive: true },
];
