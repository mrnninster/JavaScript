//////////////////////////////////
// OBJECT DECONSTRUCTION OLD JS //
//////////////////////////////////

// Define Object
var user = {
  name: "mrnninster",
  language: "JavaScript",
};

// Fetch Object Property
console.log(user.language);

///////////////////////////////
// ES6 OBJECT DECONSTRUCTION //
///////////////////////////////

// Define Object
const my_list = {
  name: "shopping List",
  content: ["Milk", "Cow", "Meat", "Cheese"],
};

const { name, content } = my_list; // Note: Variable Name has to be the same as string properties

console.log(name, content);
