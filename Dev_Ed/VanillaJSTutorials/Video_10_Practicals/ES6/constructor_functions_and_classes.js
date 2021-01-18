///////////////////////////
// CONSTRUCTOR FUNCTIONS //
///////////////////////////

// Super Constructor
function About(name, language) {
  this.name = name;
  this.language = language;
}

// Adding new functionality to existing super constructor
About.prototype.introduce = function () {
  //   console.log("Hello my name is " + this.name + " and i am learning " + this.language);
};

const Mrnninster = new About("mrnninster", "javascript");

// console.log(Mrnninster);
Mrnninster.introduce();

// console.log("==============================================================");

// Creating Custom Constructor
function About_me(occupation, hobbies, name, language) {
  // Inheriting Properties of Super Constructor
  About.call(this, name, language);

  this.occupation = occupation;
  this.hobbies = hobbies;
}

// Inheriting Prototypes of Super Constructor
About_me.prototype = Object.create(About.prototype);

// Creating Object With Custom Constructor
const mrnninster_the_second = new About_me(
  "developer",
  "cooking",
  "mrnninster_the_second",
  "javascript"
);

// Calling Inherited Proptotype Function
mrnninster_the_second.introduce();

// console.log(mrnninster_the_second);

////////////////////////////////////////////////////////
// ES6 JAVASCRIPT REPLACING CONSTRUCTORS WITH CLASSES //
////////////////////////////////////////////////////////

// Creating The Constructor
class shopping_list {
  constructor(list_items, number_of_items) {
    this.list_items = list_items;
    this.number_of_items = number_of_items;
  }
  // Replacement for Prototype Addition
  item() {
    console.log(this.list_items);
  }
}

// Input Array
const shopping_list_items = ["Meat", "Beef", "Pork", "sharkfin"];

// Creating Object
const my_shopping_list = new shopping_list(
  shopping_list_items,
  shopping_list_items.length
);

// console.log(my_shopping_list);
// my_shopping_list.item();

// Extending Class
class Product extends shopping_list {
  constructor(list_items, number_of_items, Item_Quantity, Item_Cost) {
    super(list_items, number_of_items);
    this.quantity = Item_Quantity;
    this.cost = Item_Cost;
  }
}

const product = new Product(
  shopping_list_items,
  shopping_list_items.length,
  3,
  120
);
// console.log(product);
