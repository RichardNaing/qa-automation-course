//🔹 PART 1: CLASS FUNDAMENTALS
// -----------------------------------------------------------------------------------
//Task 1: Create a Car Class
class Car {
  // Private field
  #fuelLevel;

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
    this.#fuelLevel = 100;

    // We'll count cars from the outside
  }

  drive() {
    this.#consumeFuel();
    console.log(`${this.brand} is driving...`);
  }

  // Private method — hidden fuel logic
  #consumeFuel() {
    this.#fuelLevel -= 10;
    if (this.#fuelLevel < 0) this.#fuelLevel = 0;
  }

  refuel() {
    this.#fuelLevel = 100;
    console.log(`${this.brand} has been refueled to 100%`);
  }

  getInfo() {
    return `${this.brand} costs $${this.price} and has ${this.#fuelLevel}% fuel left`;
  }
  //Task 2: Methods with Parameters
  discount(amount) {
    this.price -= amount;
    if (this.price < 0) this.price = 0;
  }

  isExpensive(limit) {
    return this.price > limit ? "Expensive" : "Affordable";
  }
  //🔹 PART 2: ENCAPSULATION (GETTERS & SETTERS)
  // Getter
  get priceTag() {
    return `$${this.price}`;
  }

  // Setter with validation
  set updatePrice(newPrice) {
    this.price = newPrice < 0 ? 0 : newPrice;
  }
}

//🔹 PART 5: INHERITANCE
// ----------------------------------------------------------------------------------------------------------------------------------------

class ElectricCar extends Car {
  constructor(brand, price, batteryRange = 100) {
    super(brand, price);
    this.batteryRange = batteryRange;
  }

  // 🔹 PART 6: POLYMORPHISM
  drive() {
    if (this.batteryRange >= 20) {
      this.batteryRange -= 20;
      console.log(
        `${this.brand} (electric) is silently driving... ${this.batteryRange}% range left`,
      );
    } else {
      console.log(`${this.brand} has no battery left! Please charge.`);
    }
  }

  charge() {
    this.batteryRange = 100;
    console.log(`${this.brand} is fully charged (100% range)`);
  }
}

//🔹 PART 7: MINI CHALLENGE
// -------------------------------------------------------------------------

class Garage {
  constructor(garageName) {
    this.garageName = garageName;
    this.cars = [];
    this.#carCount = 0; // private counter instead of static
  }

  // Private field for counting
  #carCount;

  addCar(car) {
    this.cars.push(car);
    this.#carCount += 1;
    console.log(`${car.brand} added to ${this.garageName}`);
  }

  listCars() {
    if (this.cars.length === 0) {
      return "Garage is empty";
    }
    return this.cars.map((car) => car.brand).join(", ");
  }

  findExpensive(limit) {
    return this.cars
      .filter((car) => car.price > limit)
      .map((car) => `${car.brand} ($${car.price})`);
  }

  get totalCars() {
    return this.#carCount;
  }
}

// ────────────────────────────────────────────────
// Usage example — no statics used anywhere
// ────────────────────────────────────────────────

const myGarage = new Garage("Richard's Auto Haven");

const camry = new Car("Toyota Camry", 28000);
const modelY = new ElectricCar("Tesla Model Y", 65000);

myGarage.addCar(camry);
myGarage.addCar(modelY);

console.log("\nCars in garage:", myGarage.listCars());
console.log("Total cars in this garage:", myGarage.totalCars); // 2

console.log("\nExpensive cars (> $40000):", myGarage.findExpensive(40000));

camry.drive();
modelY.drive();

modelY.charge();
modelY.drive();

camry.discount(4000);
console.log("Camry after discount:", camry.getInfo());
console.log("Camry price with tag:", camry.priceTag);

camry.updatePrice = -10000; // clamped to 0
console.log("After invalid price:", camry.priceTag);
