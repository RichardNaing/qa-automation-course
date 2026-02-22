function greet(name: string, age: number): string {
  console.log(`Hi my name is ${name} and I am ${age} years old.`);

  greet("Alice", 25);

  function greetUser(name: string = "Guest", age: number = 23) {}
  console.log(`Hello I am ${name}`);
}

greetUser(); // Output: Hello I am Guest
greetUser("Johanathan", 28);
