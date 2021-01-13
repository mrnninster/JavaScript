// # IF STATEMENTS

// If statements act as filter to determine action to be performed based on specified conditions. For example a customer should only have the option to 
// checkout if there is an item in their cart. Another example is how we check if a viewer is of appropriate age for a 
// viewing content.

// Some conditions check for are equality
// - > Greater Than
// - < Less Than
// >= Greater Than or Equal To
// <= Less Than or Equal To
// - === Equals to

// Conditions can also be combined using the "&&" symbol, you do a check for a false condition using the "!" symbol.
// you can also check if one of multiple conditions are true using the "||" symbol.

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