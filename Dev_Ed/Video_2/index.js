// Assigning a Number
let Game_life = 100;

// Assigning a string
const Game_User_Name = "Mrnninster";

// Print Status
let status = Game_User_Name + " currently has a life of " + Game_life;
console.log(status);

// ---Demonstrating Some Arithmetic operation---

// Taking Damage attack from minions  (Subtraction)
const Damage = 40; //Damage Value
Game_life = Game_life - Damage; // Subtracting Damage amd getting new damage game life value
status = Game_User_Name + " currently has a life of " + Game_life;
console.log(status);

// Taking Damage Boss Attack  (Division)
Game_life = Game_life / 2; // Subtracting Damage amd getting new damage game life value
status = Game_User_Name + " currently has a life of " + Game_life;
console.log(status);

// Receiving a health Pack (Addition)
const Heal = 20;
Game_life = Game_life + Heal;
status = Game_User_Name + " currently has a life of " + Game_life;
console.log(status);

// Team Health Buff (Multiplication)
Game_life = Game_life * 2;
status = Game_User_Name + " currently has a life of " + Game_life;
console.log(status);

// Boolean
let check_out = true; // Puchase items from the game store
console.log(check_out);

let no_check_out = false; // Maybe insufficient funds
console.log(no_check_out);

// Undefined
let mrnninster;
console.log(mrnninster);

// Null
let null_val = null;
console.log(null_val);
