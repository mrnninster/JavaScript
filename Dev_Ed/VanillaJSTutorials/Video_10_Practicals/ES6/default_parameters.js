///////////////////////////
// WITH FUNCTIONS OLD JS //
///////////////////////////

// the function defaults any undefined variable to 1
function old_multiply(x, y) {
  var a = x || 1;
  var b = y || 1;
  console.log(a * b);
}

/////////////////////////
// WITH ES6 JAVASCRIPT //
/////////////////////////

const new_multiply = (x = 1, y = 1) => {
  console.log(x * y);
};

//////////
// TEST //
//////////

old_multiply(10, 3);
new_multiply(3, 10);
