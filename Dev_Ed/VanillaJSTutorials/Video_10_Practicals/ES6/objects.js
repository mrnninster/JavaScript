////////////////////////////
// OBJECT LITERALS OLD JS //
////////////////////////////

function book(title, author) {
  return {
    author: author,
    title: title,
  };
}

var getbook = book("mrnninster", "JSTutCode");
console.log(getbook);

/////////////////////////
// ES6 OBJECT LITERALS //
/////////////////////////

function setbook(title, author) {
  return {
    author,
    title,
  };
}

let newBook = setbook("JavaScript", "mrnninster");
console.log(newBook);
