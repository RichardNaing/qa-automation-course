class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Barks!");
  }
}

const regularAnimal = new Animal();
regularAnimal.speak(); // Output: Animal makes a sound

const myCat = new Cat();
myCat.speak(); // Output: Meow!

const myDog = new Dog();
myDog.speak(); // Output: Barks!
