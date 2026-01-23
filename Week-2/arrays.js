// 1. Array is a data type that can store multiple elemts.

let fruits = ["Apple", "Orange", "Banana", "Kiwi"];
console.log(fruits);

// 2. Accessing Array Elements

console.log(fruits[0]);
console.log(fruits[3]);

// Updating Array Elements

fruits[1] = "Mango";
console.log(fruits);

fruits[3] = "Strawberry";
console.log(fruits);

// 4. length - return how many elements inside and array

console.log(fruits.length);

// 5. Concat() - merges arrays into one array
// Method that return new array

const fruitsTwo = ["Apple", "Banana", "Orange"];
const moreFruits = ["cherry", "Grape"];
const allFruits = fruits.concat(moreFruits);

console.log(allFruits);

// 6. flat() - flattens the arrays
const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();

console.log(flatNumbers);

// 7. Slice() - exracts a portion of an array

const number = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number);

// slice (1 is index here - include, 4 is also index here - excluded)
const slicedNumbersArray = flatNumbers.slice(1, 4);
console.log(slicedNumbersArray);

// Mutators (Change the Orginal Array)

const orginalFruits = ["Kiwi", "Banana", "Cherry"];
const richardFruits = [...orginalFruits];

console.log(orginalFruits);
richardFruits.push("coconut");
console.log(richardFruits);

// 3. pop() - remove last element from the array

console.log(orginalFruits);
richardFruits.pop(1);
console.log(richardFruits);

// 4. unshift()

console.log(orginalFruits);
richardFruits.unshift("Grapes");
console.log(richardFruits);

// 5. shift() - remove the first element from an array

console.log(orginalFruits);
richardFruits.shift();
console.log(richardFruits);

// 6 .reverse () - reverses ana array

console.log(orginalFruits);
console.log(richardFruits.reverse());

// 7. sort() - Sorts the array - commently used with numbers

const stringArrays = ["a", "b", "z", "c"];
console.log(stringArrays.sort());

// 8.1 index() Return the index of a specific element inside an array

const akbarAliFavorite = ["Black", "White", "Red", "Blue", "Red"];
console.log(akbarAliFavorite.indexOf("Red"));

// 8.2 lastIndexOf() - Return the last index of a specific element inside and array. Always returns

console.log(akbarAliFavorite.lastIndexOf("Red"));

// 8.3 at() - Gets an elements at a specific postion

console.log(akbarAliFavorite.at(10));

// 8.4 include() - checks if an elements exists inside and array

const nycTrainLanes = ["F", "E", "B", "D", "Z", "J"];
console.log(nycTrainLanes.includes("B"));
console.log(nycTrainLanes.includes("O"));
