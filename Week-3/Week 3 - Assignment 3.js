// 🔹 PART 1: CREATE AN OBJECT

const smartphone = {
  brand: "Pixel", // string
  model: "9 Pro XL", // string
  storageGB: 512, // number
  price: 1099.0, // number

  camera: {
    // nested object
    main: "50 MP",
    ultrawide: "48 MP",
    selfie: "42 MP",
  },

  // 🔹 PART 2: OBJECT METHODS

  // Task 2: Description Method
  getDescription: function () {
    return `The ${this.brand} ${this.model} comes with ${this.storageGB}GB storage and costs $${this.price}.`;
  },

  // Task 3: Update Method
  applyDiscount: function (discountPercentage) {
    const discount = this.price * (discountPercentage / 100);
    this.price = this.price - discount;
    return this.price;
  },

  // Task 4: Calculation Method
  getPricePerGB: function () {
    return this.price / this.storageGB;
  },
};

console.log(smartphone.brand); // dot notation
console.log(smartphone["storageGB"]); // bracket notation

// Task 6: Property Checker
function hasProperty(obj, propName) {
  return propName in obj;
}

console.log(hasProperty(smartphone, "model"));
console.log(hasProperty(smartphone, "battery"));

// 🔹 PART 4: OBJECT METHODS PRACTICE

const description = smartphone.getDescription();
const newPrice = smartphone.applyDiscount(15); // 15% off
const pricePerGB = smartphone.getPricePerGB();

console.log(description);
console.log(newPrice);
console.log(pricePerGB.toFixed(2));

// 🔹 PART 5: PROPERTY MANIPULATION

smartphone.color = "Obsidian"; // Task 8: Add new property
console.log(smartphone);

smartphone.storageGB = 256; // Task 9: Update directly
console.log(smartphone.storageGB);

delete smartphone.price; // Task 10: Delete property
console.log(smartphone);

// 🔹 PART 6: OBJECT UTILITY METHODS

const keys = Object.keys(smartphone);
console.log(keys);
console.log(keys.includes("camera"));

const values = Object.values(smartphone);
console.log(values);
console.log(values.includes("Obsidian"));

const entries = Object.entries(smartphone);
console.log(entries);

const flattenedEntries = entries.flat();
console.log(flattenedEntries);

// 🔹 PART 7: NESTED OBJECT PRACTICE

console.log(smartphone.camera.main); // Task 14
console.log(smartphone.camera.selfie);

smartphone.camera.ultrawide = "50 MP"; // Task 15: Update nested property
console.log(smartphone.camera);
