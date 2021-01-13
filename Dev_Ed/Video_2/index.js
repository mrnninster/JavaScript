// This is how you make a comment

// Assigning a Number
let Game_life  = 100;

// Assigning a string
let Game_User_Name = "Mrnninster"

// Print Status
let status = Game_User_Name+" currently has a life of " +Game_life
console.log(status);

// ---Demonstrating Some Arithmetic operation---

// Taking Damage attack from minions  (Subtraction)
Damage = 40;    //Damage Value
Game_life = Game_life - Damage;    // Subtracting Damage amd getting new damage game life value
status = Game_User_Name+" currently has a life of " +Game_life;
console.log(status);

// Taking Damage Boss Attack  (Division)
Game_life = Game_life / 2;    // Subtracting Damage amd getting new damage game life value
status = Game_User_Name+" currently has a life of " +Game_life;
console.log(status);


// Receiving a health Pack (Addition)
Heal = 20;
Game_life = Game_life + Heal;
status = Game_User_Name+" currently has a life of " +Game_life;
console.log(status);


// Team Health Buff (Multiplication)
Game_life = Game_life * 2;
status = Game_User_Name+" currently has a life of " +Game_life;
console.log(status);


// Boolean
check_out = true;   // Puchase items from the game store

check_out = false;  // Maybe insufficient funds