//Week 5 - Assignment 1: OOP Practice

class Car {
  //Create a class called Car that:
  #fuelLevel; //2. ncludes a **private fuel property**: - `#fuelLevel`

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
    this.#fuelLevel = 100; //Starts at 100
  }

  drive() {
    this.#fuelLevel -= 10; //drive() → reduces fuel by 10
    if (this.#fuelLevel < 0) {
      this.#fuelLevel = 0;
    }
  }

  refuel() {
    this.#fuelLevel = 100; //refuel() → sets fuel back to 100
  }

  getInfo() {
    return `${this.brand} costs $${this.price} and has ${this.#fuelLevel}% fuel left but no money for eat! COME ON!`; //getInfo() → returns a sentence about the car
  } //getInfo() → returns a sentence about the car

  discount(amount) {
    //1. `discount(amount)` - Reduces the price by the given amount
    this.price -= amount;
    if (this.price < 0) {
      this.price = 0;
    }
  }

  isExpensive(limit) {
    //2. `isExpensive(limit)` - Returns: - `"Expensive"` if price is above the limit - `"Affordable"` otherwise
    return this.price > limit ? "Expensive" : "Affordable";
  }

  get priceTag() {
    //Create a getter called priceTag
    return `$${this.price}`;
  }

  set updatePrice(newPrice) {
    this.price = Math.max(0, newPrice);
  }
}

class ElectricCar extends Car {
  constructor(brand, price, batteryRange = 100) {
    super(brand, price);
    this.batteryRange = batteryRange;
  }

  // Different behavior – uses battery instead of fuel
  drive() {
    this.batteryRange -= 20;
    if (this.batteryRange < 0) {
      this.batteryRange = 0;
    }
  }

  charge() {
    this.batteryRange = 100;
  }

  getInfo() {
    return `${this.brand} costs $${this.price} and has ${this.batteryRange}% battery range left`;
  }
}

// ────────────────────────────────────────────────
// Task 7: Same Method, Different Behavior (Polymorphism)
// ────────────────────────────────────────────────

const gasCar = new Car("Jeep", 42000);
const electricCar = new ElectricCar("Tesla", 78000, 100);

console.log("Before driving:");
console.log(gasCar.getInfo()); // shows fuel
console.log(electricCar.getInfo()); // shows battery

gasCar.drive();
electricCar.drive();

console.log("After one drive():");
console.log(gasCar.getInfo()); // fuel decreased by 10
console.log(electricCar.getInfo()); // battery decreased by 20

// ────────────────────────────────────────────────
// Task 8: Garage Manager
// ────────────────────────────────────────────────

class Garage {
  constructor(garageName) {
    this.garageName = garageName;
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  listCars() {
    if (this.cars.length === 0) {
      return "No cars in the garage";
    }
    return this.cars.map((car) => car.brand).join(", ");
  }

  findExpensive(limit) {
    const expensive = this.cars.filter((car) => car.price > limit);
    if (expensive.length === 0) {
      return "No expensive cars found";
    }
    return expensive.map((car) => `${car.brand} ($${car.price})`).join(", ");
  }
}

// ────────────────────────────────────────────────
// Example usage of Garage
// ────────────────────────────────────────────────

const myGarage = new Garage("Richard's Garage");

myGarage.addCar(gasCar);
myGarage.addCar(electricCar);

console.log("Garage name:", myGarage.garageName);
console.log("All cars:", myGarage.listCars());

console.log("Expensive cars (over $50000):", myGarage.findExpensive(50000));
console.log("Expensive cars (over $90000):", myGarage.findExpensive(90000));
