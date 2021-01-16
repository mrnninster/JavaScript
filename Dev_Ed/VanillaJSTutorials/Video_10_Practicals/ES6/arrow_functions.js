//////////////////////
// Functions Old JS //
//////////////////////

function sayName() {
  //   console.log("Hello I am mrnninster");
}

const language = function () {
  //   console.log("This is JavaScript");
};

sayName();
language();

// With "this" Keyword
const user = {
  name: "mrnninster",
  language: "JavaScript",
  user_function: function function_name() {
    // console.log("This is " + this.name);

    // This is done because inner function is unable to access the "this" context
    var that = this;
    function inner_function() {
      //  console.log("This is " + that.name + " learning " + that.language);
    }
    inner_function();
  },
};

user.user_function();

////////////////////////
// ES6 ARROW FUNCTION //
////////////////////////

// No Parameter Function
const location = () => {
  //   console.log("Nowhere and Everywhere");
};

location();

// Single Parameter Functions Sample 1
const current_location = (country) => {
  //   console.log(`I am currently resident in ${country}`);
};

const response = "mars if that counts";
current_location(response);

// Single Parameter Functions Sample 2
const current_location2 = (country) =>
  //   console.log(`I am currently resident in ${country}`); //Only works with single line of code and carries out implicit return

  current_location2("mars if that counts");

// Multiple Parameter Function
const MultiPart = (param1, param2) => {
  //   console.log(`Manipulate ${param1} with ${param2}`);
};

MultiPart("Lead", "Alchemy");

// With "this" keyword
const new_user = {
  name: "mrnninster",
  language: "JavaScript",
  user_name: function () {
    console.log(`my name is ${this.name}`);
    const other_details = () => {
      console.log(`my name is ${this.name} and i am learning ${this.language}`);
    };
    other_details();
  },
};
new_user.user_name();
