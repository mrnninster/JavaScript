
// Defined variables
const Age = 20

// // Define If Statements(Basic)
// if (_condition) {
//     // Preform Action
// } else {
//     // Perform Alternate Action
// }

// Sample IF STATEMENT Dev Ed Example
if (Age > 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// MULTIPLE CONDITIONS (Each condition is independent of the other)
if (Age > 18) {
    console.log("Access Granted");
} else if (Age < 15) {
    console.log("Would you are really young what are doing here");
} else {
    console.log("Access Denied");
}

// MULTIPLE CONDITIONS (Multiple conditions are needed to fufil a carry out a task)
dice_1 = 5;
dice_2 = 3;
if (dice_1 == 6 && dice_2 == 6) {
    console.log("Doubles!!!!!")
} else {
    console.log("Naah Not A Double")
}

// FALSE CONDITIONS
if (dice_1 != 6 || dice_2 != 6) {
    console.log("Nothing to see here move along")
} else {
    console.log("Lady luck is with you today")
}