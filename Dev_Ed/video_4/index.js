// #STRING CONCATENATION

// This simply means joinging two "strings" together. When we concatenate strin and numbers, the numbers are converted to strings and joined to the string.

// Defined Variables
const my_name = "mrnninster";
const language = "JavaScript";
age = 9999

// Sample Concatenation (String Format bugs)
console.log(my_name + "is learning" + language); // This requires addition of spaces

// console.log('hello it's your friendly neighbourhood spider man') // This requires escaping i.e use backslash("\") before the "s"

// Recommended Method (Using Backticks)
console.log(`hello it's your friendly neighbourhood spider man writing ${language}`)

// Mixed Data Concatenation(Integer and String)
var combine = language + age
console.log(combine)
//  To Check
console.log(typeof combine)