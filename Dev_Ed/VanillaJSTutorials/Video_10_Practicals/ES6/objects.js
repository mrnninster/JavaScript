////////////////////////////
// OBJECT LITERALS OLD JS //
////////////////////////////

// Define function
function book(title, author) {
  return {
    author: author,
    title: title,
  };
}

// Create Object
var getbook = book("mrnninster", "JSTutCode");
console.log(getbook);

/////////////////////////
// ES6 OBJECT LITERALS //
/////////////////////////

// Define Function
function setbook(title, author) {
  return {
    author,
    title,
  };
}

// Create Object
let newBook = setbook("JavaScript", "mrnninster");
console.log(newBook);
