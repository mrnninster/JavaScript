//  # DOM MANIOULATION
// DOM Mnaipulation allows us change the contents of our web pages. It is how we make our
// webpages interactive.

// Selecting Elements in the Html File bu className
header = document.querySelector(".cu_header");
button = document.querySelector(".button");

// Styling Html Elements by Accessing Class
button.classList.add("btn_style"); // Adding button class
header.classList.add("cu_header_style"); // Adding header class

// Removing Style From Html Element
button.classList.remove("btn_style"); // Removing a class
header.classList.remove("cu_header_style"); // Removing header class

// Adding Event Listeners
button.addEventListener("click", () => {
  header.classList.add("cu_header_style"); // Adding header class
});

// Adding Event Listeners
button.addEventListener("click", () => {
  header.classList.toggle("cu_header_style"); // Adding header class
});

// Selecting All the List In the <li>
const infoList = document.querySelectorAll(".name_list li");

for (info of infoList) {
  info.addEventListener("click", function () {
    console.log(this);
  });
}
