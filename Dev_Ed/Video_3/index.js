const name = "mrnninster"; //Globally avaialable variable -> Global Scope

// Creating a function
function example_function() {
  const fname = "MRNNINSTER"; //Function available variable -> Function Scope

  // Printing Variables
  console.log("Function variable " + fname);
  console.log("Global variable " + name);
}

// Uncomment this section to test the function scope
// // Printing Variables
// console.log("Function variable " + fname); //You get an error for this because its not global
// console.log("Global variable " + name);

// Parameters(Ingredients)
const water = "water";
const spaghetti = "spaghetti";
const oil = "oil";
const topping = "topping";

// Auto Cook Function
function auto_Cook(water, spaghetti, oil, topping) {
  console.log("add " + water + "to pot");
  console.log("add " + spaghetti + " to pot");
  console.log("add " + oil + " to pot");
  console.log("cook for 20 minutes");
  console.log("serve with " + topping);
}

// Example by Dev_Ed
function toUpper(name) {
  var name = name.toUpperCase();
  console.log(name);
}

// Function invocation
example_function();
auto_Cook(water, spaghetti, oil, topping);
toUpper(name);

// OTHER WAYS TO CREATE A FUNCTION
const function_name = function () {
  // function contents
  // Supports Parameters
};

const function2_name = () => {
  // function Contents
  // Supports Parameters
};
