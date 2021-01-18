////////////////////////////
// ARRAY FUNCTIONS OLD JS //
////////////////////////////

////////////////////////////
// ARRAY FUNCTIONS IN ES6 //
////////////////////////////
const shopping_list = ["goat", "chicken", "cow", "pig", "duck", "sheep", "ram"];

// New ForEach --> Obtain Each Item In An Array
shopping_list.forEach((item) => {
  //   console.log(`item ${item} in shopping list`);
});

// New ForEach --> Obtain Each Item and Index Value In An Array
shopping_list.forEach((item, Index) => {
  //   console.log(`item ${item} with index ${Index} in shopping list`);
});

// New Map --> Accesses Existing array and performs a single operation over each item in the array to return a new array
const mapped_array = shopping_list.map((item) => {
  const new_content = `2 ${item}`;
  return new_content;
});
// console.log(mapped_array);

// New Filter --> Fiter an array according to conditions defined
const filter_array = shopping_list.filter((item) => {
  const filtered_content = item !== "goat";
  return filtered_content;
});
console.log(filter_array);
