// For and While Loop
//  Say we want to perform the same function on every element in a list, we use a loop for that.
//  The loop goes over each on and perform the same function giving similar result. In this section
//  we examine the "FOR" Loop and the "WHILE" loop

const Name_arr = ["Name1", "Name2", "Name3", "Name4", "Name5"];

// For Loop Sample
for (Name of Name_arr) {
  console.log(Name);
}

// For Loop Sample with conditionals
for (Name of Name_arr) {
  if (Name === "Name3") {
    console.log(`Arrived ast ${Name}`);
  }
  // The loop still contines
  console.log(Name);
}

// For Loop Sample that stops after conditions have been met
for (Name of Name_arr) {
  if (Name === "Name3") {
    console.log(`Arrived ast ${Name}`);
    break;
  }
  // The loop still contines
  console.log(Name);
}

// While Loop Sample
// the conditions for while loops are always true  until it's false after which it stops

let whille_val = 0;

while (whille_val < 100) {
  console.log("Stil less than 100");

  whille_val++;
}
