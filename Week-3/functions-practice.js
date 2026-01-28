// Setup
// Create:
// - An array of **car brands**
let naingFamilyCarBrands = [
  {
    name: "Richard",
    dreamcar: "Porsche",
    name: "Mom",
    dreamcar: "Tesla",
    name: "Dad",
    dreamcar: "Jeep",
  },
];
// - An array of **numbers**
let numberThatAwesomePower = [7, 12, 3, 420, 6, 9, 99];
// - A sentence about cars
let storyOfMyFamilyCarBrand =
  "The way we decide to build our car brand as a family is shaped by how we shake things up through driving.";
// - A decimal number
let infinityNumber = 0.23975234;
// -------------------------------------------------------------

//  PART 1: STRING + FUNCTIONS
// Task 1: Clean & Format Text
// Write a function that:
// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase

function greet(familyMember) {
  const { name, dreamCar } = familyMember;
  return `Hello ${name}! Ready to hit the road in that awesome ${dreamCar}?`;
} // 4. Returns the cleaned string

greet("Richard");
// ------------------------------------------------------------------
// Task 2: First & Last Character
// Write a function that:
// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character
// Must handle strings with spaces.
