class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet();
console.log(alice);

class Phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }
  describe() {
    console.log(
      `This phone is a ${this.brand} ${this.model} and has a stroage of ${this.storage}`,
    );
  }
}

const iPhone17 = new Phone("Apple", "iPhone17", "512GB");
iPhone17.describe();
const SamsungA7 = new Phone("Samsung", "A7", "256GB");
SamsungA7.describe();
