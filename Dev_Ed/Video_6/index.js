
// Array Sample
const schedule = ["Movies", "Mall", "Watch things blow up", "Remember to Eat"]
console.log(schedule.length)    // Number ofitems in the array
console.log(schedule)
console.log(schedule[0])        // The first element in the array

// Adding Elements To Array
schedule.push("New Element")
console.log(schedule)

// Removing the Last Elemet
schedule.pop()
console.log(schedule)

// Add Elements to the first position
schedule.unshift("New First Element")
console.log(schedule)

// Remove First Element in the array
schedule.shift()
console.log(schedule)

// Index of an Element
let Index_Value = schedule.indexOf('Watch things blow up')
console.log(Index_Value)