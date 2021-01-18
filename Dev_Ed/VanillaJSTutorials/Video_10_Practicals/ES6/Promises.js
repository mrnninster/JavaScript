//////////////////////
// OLD JS CALLBACKS //
//////////////////////

// Async Test Start
console.log("Start");

// Callback Simulation
function get_data(req_input, Callback) {
  setTimeout(function () {
    console.log("Returning Data");
    Callback({
      req_response: "process input of " + req_input,
    });
  }, 2000);
}

// Using Callback Function
get_data("id of 5", function (req_response) {
  console.log(req_response);
});

// Async Test Completed
console.log("Completed");

/////////////////////
// ES6 JS PROMISES //
/////////////////////

const prom = new Promise((resolve, reject) => {
  // Block is Asynchronous
  setTimeout(() => {
    // Test resolve
    resolve({ name: "mrnninster", title: "Promises" });

    // Test Reject
    reject(new Error("Request Failed"));
  }, 2000);
});

prom.then((data) => {
  console.log(data);
});

prom.catch((err) => {
  console.log(err);
});
