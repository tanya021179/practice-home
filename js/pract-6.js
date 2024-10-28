// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));
// "Order accepted, preparing «Smoked» pizza";

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis();

// "user strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }
// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// user.showContext();

// showThis();
// "user strict";
// const book = {
//   updateAuthor(newAuthor) {
//     console.log(this);
//   },
// };
// book.updateAuthor("Jacob");

// const book = {
//   updateTitle(newTitle) {
//     console.log(this);
//   },
// };
// const update = book.updateTitle;
// update("Lord Of The Rings");

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.call(mango, "Welcome");
// greet.call(poly, "Aloha");

// function showName() {
//   console.log(this.name);
// }
// const user = {
//   name: "Alice",
// };
// showName.call(user);
// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }
// const person = "John";
// const context = {
//   person: "Alice",
// };
// greet.call(context, "Bob");
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.apply(mango, ["Welcome"]);
// greet.call(poly, ["Aloha"]);
// "use strict";
// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };
// customer.sayHello();
// const greet = customer.sayHello.bind(customer);
// greet();
// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);

// }
// const user = {
//   name: "Alice"
// };
// const greet = sayHello.bind(user);
// greet("Hello");
// "use strict";
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName}  ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer));
// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };
// const showBooks = library.logBookCount.bind({ books: 724 });
// showBooks();
// "use strict";
// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };
// function showBooks(callback) {
//   callback();
// }
// showBooks(library.logBookCount.bind(library));

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog.name);
// console.log(dog.legs);

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);

// child.name = "Jason";
// child.age = 27;
// console.log(parent.hasOwnProperty("surname"));
// const customer = {
//   username: "Jacob",
// };

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.isPrototypeOf(animal));
// console.log(customer.isPrototypeOf(dog));

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(Object.keys(dog));
// console.log(Object.values(dog));
// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// const objC = { c: "objC prop" };
// const objB = Object.create(objC);
// objB.b = "objB prop";
// const objA = Object.create(objB);
// objA.a = "objA prop";
// console.log(objC.hasOwnProperty("a"));
// console.log(objA.b);

// console.log(objB);
// console.log(objC);

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(ancestor.hasOwnProperty("heritage"));
// console.log(child.heritage);

// const objB = {
//   b: "objB prop",
// };
// const objA = Object.create(objB);
// objA.a = "objA prop";
// console.log(objB);

// const employee ={
// baseSalary = 30000;
// overtime = 10;
// rate = 20;
//   getWage = () {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// employee.getWage();

// class User {}
// const mango = new User();
// console.log(mango);

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango);

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// // const model = new Car(("Audi", "Q3", 36000));
// console.log(new Car("Audi", "Q3", 36000));

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// class Car {
//   #brand;
//   model;
//   price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price < this.#maxPrice) {
//       return `"Success! Price is within acceptable limits"`;
//     }
//     return `"Error! Price exceeds the maximum"`;
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// console.log(Admin.role.BASIC);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
console.log(mango);
