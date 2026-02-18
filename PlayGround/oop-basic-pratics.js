class Person {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm a ${this.type}`);
  }

  giveInstruction() {
    console.log(
      `Hi, please confirm your my owner by saying my ${this.name} and my type is ${this.type}`,
    );
  }
}

const Richard = new person("Richard", "student");
Richard.greet();
Richard.giveInstruction();

class phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }
  describe() {
    console.log(
      `This phone is a ${this.brand} ${this.model} and has a storage of ${this.storage}`,
    );
  }
}

const iPhone17 = new phone("Apple", "iPhone17", "512GB");
iPhone17.describe();
