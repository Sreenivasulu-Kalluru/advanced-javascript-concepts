// * 01 - OOP

// class Triangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   getArea() {
//     return (this.a * this.b) / 2;
//   }

//   getHypotenuse() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   }

//   sayHi() {
//     return 'HELLO FROM A TRIANGLE!!';
//   }
// }

/*
// * *************************************************************
// * Bank Account Example
// BankAccount class
//  - Properties
//      - balance (defaults to 0 if not provided)
//      - accountHolder
//      - accountNumber
// - Methods
//   - deposit(amt) - increases balance by amt
//   - withdraw(amt) - descreases balance by amt.

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`You deposited ₹${amt}.  New balance is: ₹${this.balance}`);
    } else {
      console.log("Can't deposit a negative amount");
    }
  }

  withdraw(amt) {
    if (amt > this.balance) {
      console.log("You can't withdraw that much!");
    } else {
      this.balance -= amt;
      console.log(`You withdrew ₹${amt}.  New balance is: ₹${this.balance}`);
    }
  }
}
*/

/*
// * ********************************************************
// Instance methods
class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()} SAYS HI!!!`;
  }
}
*/

/*
// * *********************************************************
// * Inheritance
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `I am a triangle with area of ${this.getArea()}`;
  }
}

class ShyTriangle extends Triangle {
  describe() {
    return '(runs and hides)';
  }

  beShy() {
    return 'I AM SHY!!!';
  }
}
*/

/*
// * *****************************************************************
// * The Super Keyword
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}
*/

/*
// * **************************************************************
// * Static Properties
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log('THIS IS: ', this);
  }

  static species = 'felis catus';
}
*/

/*
// * ********************************************************
// * Static Methods
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = [
      'Muffin',
      'Biscuit',
      'Sleepy',
      'Dodo',
      'Princess Butterface',
    ];
    const name = choice(names);
    return new Cat(name, 'unknown');
  }
  meow() {
    return `${this.name} says meow`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
*/

// ///////////////////////////////////////////////////////////////////
// * 02 - OOP NEW FEATUERES

/*
// * Getters
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for the diameter
  get diameter() {
    return this._radius * 2;
  }

  get radius() {
    return this._radius;
  }
}
*/
// * **************************************************
// * Setters
/*
class Circle {
  static allowedColors = new Set(['red', 'green', 'blue']);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error('That color is not allowed!');
    }
  }

  get radius() {
    return this._radius;
  }

  // * Setter for the radius
  set radius(value) {
    if (value < 0) {
      throw new Error('Radius cannot be negative!');
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
*/

// * ***********************************************************
// * Practice: Getters & Setters
/*
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
}
*/

// * ***********************************************************
// * Public Fields
/*
class Cat {
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    this.numLegs -= 1;
  }
}
*/

// * *************************************************************
// * Private Fields
/*
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
// console.log(myCircle.#radius);
console.log(myCircle.getRadius());
*/

// * ******************************************************************
// * Private Methods
/*
class MyClass {
  #privateMethod() {
    console.log('PRIVATE METHOD CALLED!!!');
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const myClass = new MyClass();
// myClass.#privateMethod();
myClass.publicMethod();
*/

// * *****************************************************************
// * ES2022 Static Initialization Blocks
/*
class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === 'production') {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }

  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}
*/

// ///////////////////////////////////////////////////////////////////

// * The Mysterious Keyword "This"
/*
// * Introducing This
const person = {
  name: 'Vasu',
  city: 'Kadapa',
  sing: function () {
    return `${this.name} sings LA LA LA`;
  },
};
*/

// * ****************************************************************
// * The Mystery of The Keyword This
/*
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = 'tango') {
    return `Meow I am ${this.firstName}` + ` and I like to ${style}`;
  }
}

function greet() {
  return 'HI THERE!';
}
*/

// * *************************************************************
// * The "Left Of The Dot" Rule
/*
function whatIsThis() {
  console.log('The value of this is: ', this);
}

const obj = {
  color: 'purple',
  age: 2,
  whatIsThis: whatIsThis,
};
*/

// * ************************************************************
// * This and Classes
/*
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static getRandomCat() {
    console.log('THIS IS: ', this);
  }

  dance(style = 'tango') {
    console.log('THIS IS: ', this);
    return `Meow, I am ${this.firstName}` + ` and I like to be ${style}`;
  }
}
*/

// * ***********************************************************
// * The Call Method
/*
const conan = {
  name: 'Conan',
  city: 'Badvel',
  sing: function () {
    console.log('THIS is: ', this);
    return `${this.name} sings LA LA LA`;
  },
};

const lisa = {
  name: 'Lisa',
  city: 'Kadapa',
};
*/

// * ************************************************************
// * The Apply Method
/*
const ringo = {
  firstName: 'Ringo',
  greet: function (greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

const george = {
  firstName: 'George',
  lastName: 'Harrison',
};

const nums = [1, 5, 2, 99, 3, 5];

function maximum() {
  console.log(arguments);
  return Math.max.apply(null, arguments);
}
*/

// * ***************************************************************
// * The Bind Method
/*
const conan = {
  name: 'Conan',
  city: 'Badvel',
  sing: function () {
    console.log('THIS is: ', this);
    return `${this.name} sings LA LA LA`;
  },
};

const lisa = {
  name: 'Lisa',
  city: 'Kadapa',
};
*/

// * ************************************************************
// * Binding Arguments
/*
// function applySalesTax(taxRate, price) {
//   return price + price * taxRate;
// }

// const applyCASalesTax = applySalesTax.bind(null, 0.0725);
// const applyMTSalesTax = applySalesTax.bind(null, 0);
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

const alwaysNine = multiply.bind(null, 3, 3);
*/

// * ************************************************************
// * Bind With Event Listeners
/*
const conan = {
  name: 'Conan',
  city: 'Badvel',
  sing: function () {
    console.log('THIS is: ', this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const btn = document.querySelector('#clickMe');
btn.addEventListener('click', conan.sing.bind(conan));
*/

// * ******************************************************
// * Bind with Timers
/*
class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }

  // start() {
  //   setInterval(
  //     function () {
  //       console.log(this);
  //       console.log(this.count);
  //       this.count += this.incrementAmt;
  //     }.bind(this),
  //     1000
  //   );
  // }

  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}
*/

// * **********************************************************
// * Arrow Functions and This
/*
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`); // works

    setTimeout(function () {
      console.log('THIS IS: ', this);
      console.log(`#2 I am ${this.firstName}`); // uh oh
    }, 500);

    setTimeout(() => {
      console.log('THIS IS: ', this);
      console.log(`#3 I am ${this.firstName}`); // yay!
    }, 1000);
  }
}

let kitty = new Cat('Kitty');
kitty.superGreet();
*/

// //////////////////////////////////////////////////////////////////

// * OOP Under The Hood: Prototypes, New, & More!
// * The New Keyword
/*
// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return 'WOOF!';
//   }
// }

// * Old school constructor function - used before classes
// function Dog(name, breed) {
//   console.log('THIS IS: ', this);
//   this.name = name;
//   this.breed = breed;
// }
*/

// * Prototypes: Part 1
/*
// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.bark = function () {
    return `${this.name} says woof!`;
  };
  this.sleep = function () {
    return `${this.name} is sleeping!`;
  };
}
*/

// * Prototypes: Part 2

/*
// const myObj = {
//   color: 'purple',
//   score: 99,
//   greet() {
//     console.log('HII!');
//   },
// };

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping!`;
  }
}

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }
*/

// * ************************************************************
// * Prototypes: Part 3

/*
// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};
*/

// * ******************************************************

// * The Prototype Chain

/*
const grandParent = {
  greet() {
    return 'HI THERE!!';
  },
};

const parent = {
  color: 'purple',
  sing() {
    return 'LA LA LA';
  },
  __proto__: grandParent,
};

const child = {
  num: 2,
  __proto__: parent,
};
*/

// * *************************************************************
// * Classes, Inheritance, & Prototypes

/*
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping!`;
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }

  alert() {
    return `${this.name} alerts you to danger. Good dog!`;
  }
}

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }
*/

// * **************************************************************
// * __proto__ vs prototype
/*
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};
*/

// * *************************************************************
// * Useful Prototype Methods
/*
const person = {
  sing() {
    return 'LALALA';
  },

  isHuman: true,
};
*/

// * /////////////////////////////////////////////////////////////////
// * The Basics of Promises

/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// fetch(url)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log('ERR!!', err);
//   });

fetch(url)
  .then((res) => console.log(res))
  .catch((err) => console.log('ERR!!', err));
  */

//  * ***********************************************************
// * Promise Chaining To Flatten Code
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make request to pokemon/4

// * Using Callbacks
// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log('RESPONSE 1 ', res1);
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log('RESPONSE 2 ', res2);
//         fetch(`${BASE_URL}/2`)
//           .then((res3) => {
//             console.log('RESPONSE 3 ', res3);
//             fetch(`${BASE_URL}/2`)
//               .then((res4) => {
//                 console.log('RESPONSE 4 ', res4);
//               })
//               .catch((err) => {
//                 console.log('ERR!!', err);
//               });
//           })
//           .catch((err) => {
//             console.log('ERR!!', err);
//           });
//       })
//       .catch((err) => {
//         console.log('ERR!!', err);
//       });
//   })
//   .catch((err) => {
//     console.log('ERR!!: ', err);
//   });

// * This is the New & Correct of using Promises
fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1 ', res1);
    return fetch(`${BASE_URL}/2`);
  })
  .then((res2) => {
    console.log('RESPONSE 2 ', res2);
    return fetch(`${BASE_URL}/3`);
  })
  .then((res3) => {
    console.log('RESPONSE 3 ', res3);
    return fetch(`${BASE_URL}/4`);
  })
  .then((res4) => {
    console.log('RESPONSE 4 ', res4);
  })
  .catch((err) => {
    console.log('IN THE CATCH! ERROR: ', err);
  });
*/

// * ***************************************************************
// * Async/Await

/*
// async function hello() {
//   return 'HI';
// }

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

async function getFourPokemon() {
  const res1 = await fetch(`${BASE_URL}/1`);
  console.log(res1);

  const res2 = await fetch(`${BASE_URL}/2`);
  console.log(res2);

  const res3 = await fetch(`${BASE_URL}/3`);
  console.log(res3);

  const res4 = await fetch(`${BASE_URL}/4`);
  console.log(res4);
}
*/

// * ******************************************************
// * Error Handling with Async Functions

/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

async function getFourPokemon() {
  try {
    const res1 = await fetch(`${BASE_URL}/1`);
    console.log(res1);

    const res2 = await fetch(`${BASE_URL}/2`);
    console.log(res2);

    const res3 = await fetch(`http://nope.nope`);
    console.log(res3);

    const res4 = await fetch(`${BASE_URL}/4`);
    console.log(res4);
  } catch (error) {
    console.log(`WE GOT AN ERROR!: `, error);
  }
}
*/

//  * *******************************************************
// * Async Patterns: Parallel Async Operations
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// * Using Promises
// const results = [];
// fetch(`${BASE_URL}/1`).then((res) => {
//   results.push(res);
//   console.log('REQUEST 1 FINISHED!');
// });

// fetch(`${BASE_URL}/2`).then((res) => {
//   results.push(res);
//   console.log('REQUEST 2 FINISHED!');
// });

// fetch(`${BASE_URL}/3`).then((res) => {
//   results.push(res);
//   console.log('REQUEST 3 FINISHED!');
// });

// console.log('WAITING FOR REQUEST TO COMPLETE');

// // * Using Async/Await
// const results = [];
// async function getPokemon1() {
//   const res = await fetch(`${BASE_URL}/1`);
//   results.push(res);
//   console.log('REQUEST 1 FINISHED!');
// }

// async function getPokemon2() {
//   const res = await fetch(`${BASE_URL}/2`);
//   results.push(res);
//   console.log('REQUEST 2 FINISHED!');
// }

// async function getPokemon3() {
//   const res = await fetch(`${BASE_URL}/3`);
//   results.push(res);
//   console.log('REQUEST 3 FINISHED!');
// }

// getPokemon1();
// getPokemon2();
// getPokemon3();

// console.log('WAITING FOR REQUEST TO COMPLETE');

const results = [];
async function getPokemon(num) {
  const res = await fetch(`${BASE_URL}/${num}`);
  results.push(res);
  console.log(`REQUEST ${num} FINISHED!`);
}

getPokemon(1);
getPokemon(2);
getPokemon(3);
*/

// * ********************************************************
// * Async Patterns: Parallel Async Operations
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// * Using Promises
// const results = [];
// fetch(`${BASE_URL}/1`)
//   .then((res) => {
//     results.push(res);
//     console.log('REQUEST 1 FINISHED');
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log('REQUEST 2 FINISHED');
//     return fetch(`${BASE_URL}/3`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log('REQUEST 3 FINISHED');
//     return fetch(`${BASE_URL}/4`);
//   });

// * Using Async/Await
async function get3PokemonInSequence() {
  const res1 = await fetch(`${BASE_URL}/1`);
  console.log('REQUEST 1 FINISHED');
  const res2 = await fetch(`${BASE_URL}/2`);
  console.log('REQUEST 2 FINISHED');
  const res3 = await fetch(`${BASE_URL}/3`);
  console.log('REQUEST 3 FINISHED');
  const results = [res1, res2, res3];
}
*/

// * ******************************************************
// * Async Patterns: Promise.all()
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

// * Using Promises
const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  // fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/6`),
];

Promise.all(lotsOfFetchCalls)
  .then((results) => {
    console.log('Promise.all() is done and resolved!');
    console.log(results);
  })
  .catch((err) => {
    console.log('One of the promises was rejected!');
    console.log(err);
  });

// * Using Async/Await
async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(lotsOfFetchCalls);
    console.log('Promise.all() is done and resolved!');
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
*/

// * **********************************************************
// * Async Patterns: Promise.allSettled()
/*
async function allSettledDemo() {
  const GITHUB_BASE_URL = 'https://api.github.com/';

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

  let badUrl = fetch(`http://definitleynotrealsite.com`);

  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

  let anotherBadUrl = fetch(`http://anotherdefinitleynotrealsite.com`);

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherBadUrl,
  ]);

  console.log(results);
  const fulfilled = results.filter((r) => r.status === 'fulfilled');
  const rejected = results.filter((r) => r.status === 'rejected');
  console.log(fulfilled);
  console.log(rejected);
}
*/

// * ***********************************************************
// * Async Patterns: Promise.race()
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  // fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

Promise.race(lotsOfFetchCalls)
  .then((winner) => {
    console.log(winner);
  })
  .catch((err) => console.log(err));
*/

// * *********************************************************
// * Building Our Own Promise Objects
/*
// setTimeout(function () {
//   console.log('HI!');
// }, 2000);

// function wait(duration) {
//   const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('this is the resolved value');
//     }, duration);
//   });
//   return p;
// }

function randomRejectRsolve() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve('Pickles');
      } else {
        reject('Error!!');
      }
    }, 2000);
  });
}

// async function demo() {
//   console.log('hi');
//   const val = await wait(2000);
//   console.log('there!');
//   console.log(val);
// }

randomRejectRsolve()
  .then((val) => {
    console.log('INSIDE first .then() callback', val);
    return randomRejectRsolve();
  })
  .then((val) => {
    console.log('INSIDE 2nd .then() callback', val);
    return randomRejectRsolve();
  })
  .catch((err) => console.log('INSIDE CATCH', err));
*/

// * ***********************************************************
// * Promisifying Node's fs.readFile()
/*
const fs = require('fs');

// fs.readFile("./haiku1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERR!!", err);
//   } else {
//     console.log("HAIKU 1");
//     console.log(data);
//     fs.readFile("./haiku2.txt", "utf8", (err, data) => {
//       if (err) {
//         console.log("ERR!!", err);
//       } else {
//         console.log("HAIKU 2");
//         console.log(data);
//         fs.readFile("./haiku3.txt", "utf8", (err, data) => {
//           if (err) {
//             console.log("ERR!!", err);
//           } else {
//             console.log("HAIKU 3");
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

function asyncReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// asyncReadFile("./haiku1.txt")
//   .then((data) => {
//     console.log("HAIKU 1");
//     console.log(data);
//     return asyncReadFile("./haiku2.txt");
//   })
//   .then((data) => {
//     console.log("HAIKU 2");
//     console.log(data);
//     return asyncReadFile("./haiku3.txt");
//   })
//   .then((data) => {
//     console.log("HAIKU 3");
//     console.log(data);
//   })
//   .catch((err) => console.log("ERR", err));

async function getHaikus() {
  try {
    const haiku1 = await asyncReadFile('./haiku1.txt');
    console.log('HAIKU 1');
    console.log(haiku1);
    const haiku2 = await asyncReadFile('./haiku2.txt');
    console.log('HAIKU 2');
    console.log(haiku2);
    const haiku3 = await asyncReadFile('./haiku3.txt');
    console.log('HAIKU 3');
    console.log(haiku3);
  } catch (e) {
    console.log('ERR', e);
  }
}

getHaikus();
*/

// * //////////////////////////////////////////////////////////////
// * Latest JavaScript Features

// * Optional Chaining
/*
// Function that generates a random user
// IGNORE THIS CODE, THE RELEVANT CODE IS AT THE BOTTOM OF THE FILE
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  // Possible user data
  const firstNames = ['John', 'Raj', 'Dave', 'Sarah', 'Rosa', 'Esteban'];
  const lastNames = ['Hamilton', 'Norris', 'Bottas', 'Tsunoda', 'Sainz'];
  const emails = ['example.com', null, 'sample.com', undefined, 'demo.com'];
  const includeAddress = [true, false]; // Array to determine if address should be included

  const includeMethod = [true, false]; // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)];
  const lastName = lastNames[getRandomNumber(lastNames.length)];
  const emailDomain = emails[getRandomNumber(emails.length)];
  const age = getRandomNumber(100);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: age, // age will always exist, just for the sake of structure
  };
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    };
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: '1234 Elm St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      postalCode: '12345',
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    };
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`);
    };
  }

  return user;
}

const user = getUser();
console.log(user);

// * without checking for the "firstName" properties
// const firstName = user.name.first;

// * checking for the "firstName" properties using the traditional "&" operator
// const firstName = user && user.name && user.name.first;

// * checking for the "firstName" properties using the latest optional chaining "?." operator
const firstName = user?.name?.first;

console.log('First Name: ', firstName);

// * checking for the "long" property using the traditional "&" operator
// const long =
//   user &&
//   user.address &&
//   user.address.coordinates &&
//   user.address.coordinates.long;

// * checking for the "long" property using the latest optional chainging "?." operator
const long = user?.address?.coordinates?.long;
console.log('Longitude: ', long);

// * checking for the "greet()" method without using optional chainging "?." operator
// user.greet();
// * checking for the "greet()" method using optional chainging "?." operator
user?.greet?.();
*/

// * *****************************************************************************
// * Nullish Coalescing Operator
/*
// Function that generates a random user
// IGNORE THIS CODE, THE RELEVANT CODE IS AT THE BOTTOM OF THE FILE
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  // Possible user data
  const firstNames = ['John', 'Raj', 'Dave', 'Sarah', 'Rosa', 'Esteban'];
  const lastNames = ['Hamilton', 'Norris', 'Bottas', 'Tsunoda', 'Sainz'];
  const emails = ['example.com', null, 'sample.com', undefined, 'demo.com'];
  const includeAddress = [true, false]; // Array to determine if address should be included

  const includeMethod = [true, false]; // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)];
  const lastName = lastNames[getRandomNumber(lastNames.length)];
  const emailDomain = emails[getRandomNumber(emails.length)];
  const age = getRandomNumber(100);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: age, // age will always exist, just for the sake of structure
  };
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    };
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: '1234 Elm St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      postalCode: '12345',
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    };
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`);
    };
  }

  return user;
}

const user = getUser();
console.log(user);

// * checking for the "firstName" property using the traditional "||" operator
const firstName = user?.name?.first || 'anonymous';

// console.log(firstName);

// * checking for the "age" property using the nullish coalescing operator "??"
const age = user?.age ?? "I don't know the age";
console.log('AGE IS: ', age);
*/

// * *********************************************************************
// * Numberic Separators (_)
/*
// * long numric values can be hard to parse at a galnce
const withoutSeparator = 1000000000;
console.log(withoutSeparator);

// * using the numeric separator for better readablity
const withSeparator = 1_000_000_000;
console.log(withSeparator);
*/

// * **************************************************************************
// * Array.prototype.at()
/*
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors.at(3));
console.log(colors.at(-1));
*/

// * *********************************************************************
// * String replaceAll()
/*
const str =
  'I really love cats.  My cat is such an amazing pet.  She loves to cuddle with me and play. What a great cAt. cat. CAT. cat.';

// * replace all occurances of the "cat" with "dog" using the tradiational regular experessions
console.log(str.replace(new RegExp('cat', 'g'), 'dog'));

// * replace all occurances of the "cat" with "dog"  using the latest string replaceAll() method
console.log(str.replaceAll('cat', 'dog'));
*/

// * ************************************************************
// * Logical OR ||= assignment operator
/*
const todo = { priority: 'LOW', task: 'Finish Editing Course' };

// Is priority falsy?  If so, set it to  "MEDIUM"
// todo.priority ||= 'MEDIUM';

// Logically equivalent to:
//  todo.priority || (todo.priority = "MEDIUM");
*/

// * ***********************************************************
// * Logical AND &&= assignment operator
/*
let num = 10;

num &&= 40;
console.log(num);
*/

// * ********************************************************
//
/* * Nullish Coalescing Assignment ??=
let score;
score ??= 0;
console.log(score);

function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // default timeout of 3 seconds
  options.retries ??= 5; // default of 5 retries
  console.log(options);
}
*/

// * ***************************************************************
// * Promise.any()
/*
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

Promise.any([
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
])
  .then((firstToFinish) =>
    console.log('THIS IS THE FIRST RESOLVED VALUE!', firstToFinish)
  )
  .catch((e) => {
    console.log('OH NO, this means some promise was rejected', e);
  });
*/

// * **************************************************************
// * Class Fields (public and private)
/*
class Movie {
  title;
  director;
  genre;
  releaseYear;
  rating;
  cast = [];
  reviews = [];

  constructor(title, director, genre, releaseYear) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;

    // rating, cast, and reviews are not set in the constructor
  }

  addCastMember(actor) {
    // Adds a new cast member to the movie
    this.cast.push(actor);
  }

  addReview(review) {
    // Adds a new review to the movie
    this.reviews.push(review);
  }

  setRating(rating) {
    // Sets the movie's rating
    if (rating >= 0 && rating <= 10) {
      this.rating = rating;
    } else {
      console.log('Rating must be between 0 and 10.');
    }
  }

  getMovieDetails() {
    return {
      title: this.title,
      director: this.director,
      genre: this.genre,
      releaseYear: this.releaseYear,
      rating: this.rating,
      cast: this.cast,
      reviews: this.reviews,
    };
  }
}

// Usage
const myMovie = new Movie('Inception', 'Christopher Nolan', 'Sci-Fi', 2010);

// Add cast members
myMovie.addCastMember('Leonardo DiCaprio');
myMovie.addCastMember('Ellen Page');

// Add reviews
myMovie.addReview({ user: 'johnDoe', review: 'Amazing movie!', rating: 10 });
myMovie.addReview({
  user: 'janeDoe',
  review: 'Quite an experience!',
  rating: 9,
});

// Set movie rating
myMovie.setRating(9);

// Output movie details
console.log(myMovie.getMovieDetails());
*/

// * ///////////////////////////////////////////////////////////////
// * The Tricky parts: Scope & Closures

// * The Scope Chain
/*

// 1. In the local scope
// 2. Any outer functions
// 3. Global Scope

let age = 10;

// console.log(age);

// function outer() {
//   let age = 'ageless';
//   if (true) {
//     let age = 99;
//     console.log(age);
//   }
// }

function outer() {
  // let age = 'ageless';
  function inner() {
    // let age = 'Eternal';
    console.log(age);
  }
  inner();
}
*/

// * ***************************************************

// * Static Scope
/*
let animal = 'Dog';

function printAnimal() {
  console.log(animal);
}

function alsoPrintAnimal() {
  let animal = 'Cat';
  printAnimal();
}
*/

// * *********************************************************
// * Hoisting
/*
// var food = 'pizza';
// console.log(food);

// var food = undefined;
// console.log(food);
// food = 'pizza';

// console.log(food);
// var food = 'pizza';

function blah() {
  // * TEMPORAL DEAD ZONE STARTS
  console.log(color);
  // ReferenceError: Cannot access 'color' before initialization
  let color = 'black';
  // * TEMPORAL DEAD ZONE ENDS
}
*/

// * **********************************************************
// * IIFEs (or) Immediatly Invoked Functions
/*
(function () {
  console.log('HELLO FROM AN IIFE!!');
})();
*/

// * *************************************************************
// * Closures: The Basics
/*
// function outerFunction() {
//   let outerVariable = 'I am from outer!';
//   function innerFunction() {
//     console.log("I'M THE INNER FUNCTION");
//     console.log('outerVariable is: ', outerVariable);
//   }
//   return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure();

// function idGenerator() {
//   let count = 1;
//   return function generate() {
//     return count++;
//   };
// }

// const nextId = idGenerator();

// let count = 1;
// function nextId() {
//   return count++;
// }

// * Another Example
// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       return count++;
//     },
//     decrement: function () {
//       return count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
})();
*/

// * ************************************************************
// * Closures: Factory Functions
/*
// A factory function in JavaScript is a function that creates and returns an object. It is similar to a constructor function, but it does not require the use of the new keyword. Factory functions are often used to create objects with specific properties and behaviors.

function createExponentFunction(exp) {
  return function (val) {
    return val ** exp;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

// * Another Example
function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator('book-');
const getUserId = uniqueIdGenerator('user-');
*/

// * *******************************************************
// * Closures: Event Listeners
/*
// let count = 0;
// document.querySelector('button').addEventListener('click', function () {
//   count += 1;
//   console.log(`You clicked me ${count} times`);
// });

// * Using IIFs

document.querySelector('button').addEventListener(
  'click',
  (function () {
    let count = 0;
    return function () {
      count += 1;
      console.log(`You clicked me ${count} times`);
    };
  })()
);
*/

// * ****************************************************
// * Closures: Loops
/*
// setTimeout(function () {
//   console.log('TIMES UP!');
// }, 2000);

// for (var i = 0; i < 6; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

// for (var i = 1; i <= 20; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000 * i);
//   })(i);
// }

// * Using 'let' keyword
for (let i = 1; i <= 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}
*/

// * //////////////////////////////////////////////////////////////
// * Section 10: Timers: Debouncing, Throttling, & RequestAnimationFrame

// * setTimeout()
/*
// setTimeout(function () {
//   console.log('TIMES UP!!');
//   alert("I'm an alert");
// }, 4000);

// * notification showing function
function showNotification(message, duration) {
  const notification = document.createElement('div');
  notification.innerText = message;
  notification.className = 'notification';
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, duration);
}
*/

// * *************************************************************
// * setInterval()
/*
// setInterval(function () {
//   console.log("IT'S BEEN 2 SECONDS");
// }, 2000);

// * timer function using setInterval() method
function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById('timer');
  h1.innerText = secondsRemaining;
  setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;
  }, 1000);
}
*/

// * ///////////////////////////////////////////////////////////
// * clearInterval()
/*
function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById('timer');
  h1.innerText = secondsRemaining;
  const intervalId = setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;

    if (secondsRemaining < 0) {
      clearInterval(intervalId);

      h1.innerText = 'Time is Up!!';
    }
  }, 1000);
}
*/

// * clearTimeOut()
/*
const cancelButton = document.querySelector('#cancel');

const timeoutId = setTimeout(() => {
  window.location.href = 'http://www.google.com';
}, 5000);

cancelButton.addEventListener('click', () => {
  clearTimeout(timeoutId);
  console.log('ABORTED THE REDIRECTION');
});
*/

// * **************************************
// * Debouncing
/*
// function queryAPI() {
//   console.log('MAKING AN API REQUEST!');
// }
// const searchInput = document.querySelector('#search');

// searchInput.addEventListener('input', () => {
//   queryAPI();
// });

// * implementing debouncing for the above function
function queryAPI() {
  console.log('MAKING AN API REQUEST!');
}
const searchInput = document.querySelector('#search');

let debounceTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});
*/

// * Writing a Fancy Debounce Function
/*
function queryAPI(searchTerm) {
  console.log(`Searching the API for ${searchTerm}`);
}
const searchInput = document.querySelector('#search');

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 300);

searchInput.addEventListener('input', (evt) => {
  debouncedQueryAPI(evt.target.value);
  // queryAPI(evt.target.value);
});
*/

// * *************************************************************
/*
// * Throttling
function getRandomColor() {
  const palette = [
    '#FFADAD',
    '#FFC3A0',
    '#FF677D',
    '#392F5A',
    '#31A2AC',
    '#61C0BF',
    '#6B4226',
    '#D9BF77',
    '#ACD8AA',
    '#FFE156',
    '#6A0572',
    '#AB83A1',
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById('content');

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log('LOADING DATA FROM AN API!!!');
    for (let i = 0; i < 10; i++) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = 'Item ' + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

let isThrottled = false;
window.addEventListener('scroll', () => {
  if (!isThrottled) {
    loadMoreItems();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 200);
  }
});

// Initial load
loadMoreItems();

*/

// * ********************************************************
// * Building a Fancy Throttle Function
/*
function getRandomColor() {
  const palette = [
    '#FFADAD',
    '#FFC3A0',
    '#FF677D',
    '#392F5A',
    '#31A2AC',
    '#61C0BF',
    '#6B4226',
    '#D9BF77',
    '#ACD8AA',
    '#FFE156',
    '#6A0572',
    '#AB83A1',
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById('content');

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log('LOADING DATA FROM AN API!!!');
    for (let i = 0; i < 10; i++) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = 'Item ' + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

function throttle(callback, delay = 500) {
  let isThrottled = false;
  let savedArgs = null;

  const executeCallback = () => {
    if (savedArgs === null) {
      isThrottled = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(executeCallback, delay);
    }
  };

  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    callback(...args);
    isThrottled = true;
    setTimeout(executeCallback, delay);
  };
}

const throttledLoadItems = throttle(loadMoreItems, 300);

window.addEventListener('scroll', () => {
  throttledLoadItems();
});

// Initial load
loadMoreItems();
*/

// * *******************************************************
// * requestAnimationFrame Basics
/*
const boxInterval = document.getElementById('boxInterval');
const boxAnimationFrame = document.getElementById('boxAnimationFrame');

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = 'rotate(' + intervalAngle + 'deg)';
  intervalAngle += 2;
}

let previousTime;
function animateWithAnimationFrame(currentTime) {
  console.log(currentTime - previousTime);
  previousTime = currentTime;
  boxAnimationFrame.style.transform = 'rotate(' + animationFrameAngle + 'deg)';
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

// Start the animations
setInterval(animateWithInterval, 16); // 60 FPS (approximately)

requestAnimationFrame(animateWithAnimationFrame);
*/

// * ****************************************************
// * Scroll To Top Animations With RequestAnimationFrame
/*
function smoothScrollToTop() {
  const duration = 1000; // Duration in milliseconds
  const start = window.pageYOffset;
  const end = 0;
  const change = end - start;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);
    console.log(timeElapsed);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector('.back-to-top')
  .addEventListener('click', smoothScrollToTop);
*/

// * //////////////////////////////////////////////////////////
// * Functional Programming

/*
// * Introduction to Functional Programming
// * Imperative Programming: Impterative programming is all about describes how a program operates using statements, code to manupulate program's state

// * Example: program for sum of the numbers between 1 and 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}

// * Functional Programming: Functional programming (FP) is a software development approach that uses pure functions to create maintainable software. It's a programming paradigm that involves building computer programs using functions and expressions without mutating data and state.

// * Example: program for sum of the numbers between 1 and 5
const arr = [1, 2, 3, 4, 5];
arr.reduce((acc, val) => acc + val, 0);

// * A program to filter out a new array of even numbes from the given numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// * using the impterative programming approach
const evens = [];
for (let num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

// * using the function progamming approach
nums.filter((n) => n % 2 === 0);

// * program to find the maximun number in an array

// * using imperative approach
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// * using functional approach
Math.max(...numbers);
*/

// ******************************************************
// * First Class Functions

/*
// * In JavaScript Functions are First Class Objects or First Class Citizens

// const func = function (person) {
//   console.log(`Hello There, ${person}`);
// };

function greet(person) {
  console.log(`Hello There, ${person}`);
}
function hate(person) {
  console.log(`I hate you, ${person}`);
}

function callWithBlue(func) {
  func('Blue');
}

callWithBlue((color) => {
  console.log(`${color} is the best color`);
});
*/

// * ****************************************************
// * Writing Pure Functions

/*
// * example of an impure function
let value = 2;
function squareAndUpdateValue() {
  value = num * num;
  return value;
}

// * pure version of the above function is
function square(num) {
  return num * num;
}

// * IMPURE FUNCTION
const colors = ['red', 'orange'];

function addToArray(arr, val) {
  return arr.push(val);
}

// * PURE FUNCTION
function pureAddToArray(arr, val) {
  return [...arr, val];
}
*/

// * *************************************************************
// * Returning Functions
// * Higher Order Function: A Function that recieves another function as an argument, returns a function, or does both

/*
function doTwice(func) {
  func();
  func();
}

doTwice(function () {
  console.log('HELLO YOU PIG FACED RAT PERSON!');
});

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const multBy10 = multiplyBy(10);
*/

// * *****************************************************************
/*
// * Immutability
const nums = [1, 2, 3];

// const person = {
//   name: 'John',
//   age: 34,
// };

// Object.freeze(person); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

function push(arr, val) {
  return [...arr, val];
}

function removeLastItem(arr) {
  return arr.slice(0, -1);
}
*/

// * *****************************************************************
// * Recursion
/*
// * Factorial program using imperative approach
// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result *= i;
//   }

//   return result;
// }

// * using Recursive approach
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
*/

// * ***************************************************
// * Partial Application with Bind
/*
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!!`);
}

const aussieGreet = greet.bind(null, "G'Day!!");
*/

// * ********************************************************
// * Writing a Partial Function
/*
function multiply(a, b) {
  return a * b;
}

// const double = multiply.bind(null, 2);
// const triple = multiply.bind(null, 3);

// * Partial function

function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);
*/

// * *********************************************************
// * Composition Basics

/*
const add = (a, b) => a + b;
const square = (a) => a * a;

const addAndSquare = (a, b) => square(add(a, b));

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(' ');
}

function joinWithDash(array) {
  return array.join('-');
}

joinWithDash(splitWords(lowerCaseString('My Favorite Function')));
*/

// * ***************************************************************
// * A Simple Compose Function
/*
function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val));
  };
}

function repeatTwice(str) {
  return str.repeat(2);
}

function upperCase(str) {
  return str.toUpperCase();
}

const repeatAndUppercase = compose(repeatTwice, upperCase);
*/

// * *********************************************************
// * Writing a Fancier Compose Function
/*
function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(' ');
}

function replaceS(str) {
  return str.replaceAll('s', '$');
}

function joinWithDash(array) {
  return array.join('-');
}

const sluggify = compose(joinWithDash, splitWords, lowerCaseString);
*/

// * ********************************************************

/*
// * Currying: Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// f(a, b, c);
// f(a)(b)(c);

function add(a, b, c) {
  return a + b + c;
}

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
*/

// * ***************************************************
// * More Advanced Currying

/*
function add3(x, y, z) {
  return x + y + z;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedAdd = curry(add3);
*/

// * ///////////////////////////////////////////////////////

// * Fetch API

// * The Basics of Fetch
/*
const POKE_URL = 'http://pokeapi.co/api/v2/pokemon';

async function getPokemon() {
  const response = await fetch(POKE_URL);
  const data = await response.json();
  console.log(data);
}

// * OR

// fetch(POKE_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
*/

// * **************************************************************
// * Error Handling with Fetch

/*
const POKE_URL = 'http://pokeapi.co/api/v2/pokemon';

async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Something Went Wrong!');
    console.log(error);
  }
}

// * OR
// fetch(POKE_URL)
//   .then((res) => {
//     console.log('THE FETCH WORKED!!');
//     console.log(res);
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log('JSON DATA', data))
//   .catch((error) => {
//     console.log('Something Went Wrong!');
//     console.log(error);
//   });
*/

// * ****************************************************
// * Sending Request Headers With Fetch
/*
async function showMeHeaders() {
  const headers = new Headers({ 'content-type': 'application/json' });
  try {
    const res = await fetch('http://localhost:3001/showmeheaders', { headers });
    const data = await res.json();
    console.log('DATA ', data);
  } catch (e) {
    console.log(e);
  }
}

async function getSecret() {
  const headers = new Headers({
    'content-type': 'application/json',
    authorization: 'Bearer kasjakj1283ajksdh91iasjkhd912',
  });
  try {
    const res = await fetch('http://localhost:3001/secret', { headers });
    const data = await res.json();
    console.log('DATA ', data);
  } catch (e) {
    console.log(e);
  }
}

// showMeHeaders();

getSecret();
*/

// * ***************************************************
// * POST Requests With Fetch
/*
async function postData() {
  const newCompany = {
    handle: 'chickenco3',
    name: 'Chickens and Company 3',
    description: 'A lovely company run by chickens',
    numEmployees: 999,
    logoUrl: 'http://www.google.com',
  };

  const response = await fetch('http://localhost:3001/companies', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newCompany),
  });

  const data = await response.json();
  console.log(data);
}

// postData();

async function getCompany() {
  const response = await fetch('http://localhost:3001/companies/chickenco3');
  const data = await response.json();
  console.log(data);
}
*/

// * *****************************************************
// * Uploading Files With Fetch
/*
async function uploadFile(formData) {
  try {
    const response = await fetch(
      'http://localhost:3001/companies/coltco/upload-logo',
      {
        method: 'POST',
        body: formData,
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

const fileInput = document.querySelector('#fileUpload');

fileInput.addEventListener('change', (e) => {
  console.log('CHANGED!!');
  const formData = new FormData();
  formData.append('logo', fileInput.files[0]);
  uploadFile(formData);
});
*/

// * ////////////////////////////////////////////////////////////////
// * Web Storage APIs

// * ********************************************************
// * LocalStorage Basics
