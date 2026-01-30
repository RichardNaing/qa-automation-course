const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("line10", "name" in person);
console.log("Line11", "weight" in person);

// Accessing object properties (keys)

//4. Adding and Updating properties

console.log(person);

person.height = 170;
person.age = 28;
person.dateofbirth = 1980;
person.hairColor = "Black";
console.log(person);

// 6. Object method
