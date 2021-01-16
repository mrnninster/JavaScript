//////////////////////////////////////////////////////////////////////////////////
// Variable assignment with "var" (UnComment out sections you are working with) //
//////////////////////////////////////////////////////////////////////////////////

var counter = 10;

// counter = 5; // (Data Modification)
// console.log(counter);

// var counter = 100; //(Data Redeclaration)
// console.log(counter);

// Scoping with "var"
function sayName() {
  var name = "mrnninster";
  // console.log(name);
}

// sayName();

// console.log(name); // name is not defined because scope is just within the function

///////////////////////////////////////////////////////////
// VARIABLE ASSIGNMENT WITH ES6 SYNTAX "let" and "const" //
///////////////////////////////////////////////////////////

const shopping_list = ["Milk", "Cow"];

// shopping_list = ["Meat"]; // "const" Variables cannot be reassigned

// shopping_list = ["cheese", "Meat"] // "const" Variables cannot be redeclared

let counter_val = 10;

// counter_val = 5; // "let" supports reassignment

// counter_val = 100; // "let" Variables cannot be redeclared

// "let" Provide Block Scoping

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// console.log(i) // "i" does not exist outside the for block

// // "const" wont work in this case because the variables is being redeclared with each loop
// for (const i = 10; i < 20; i++) {
//   console.log(i);
// }

// "const" However it works here since each new loop is a new declaration meaning a new scope
const const_array = [1, 2, 3, 4, 5];
for (const i in const_array) {
  // console.log(i);
}
