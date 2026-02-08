const numbersArrays = [1, 2, 3, 3, 4];

const numbersSet = new Set(numbersArrays);
console.log(numbersSet);

const mySet = new Set();

mySet.add("apple");
mySet.add("banana");

console.log(mySet.has("apple"));
console.log(mySet.has("grape"));

mySet.delete("banana");

console.log(mySet);
