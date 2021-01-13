// Example Object
const user = {
  user_name: "mrnninster",
  age: 9999,
  Location: "Mars",
  Possesion: ["Space Suit", "oxygen Tank", "Escape Pod", "Engineering Tools"],
  val: function () {
    console.log(this.age);
  },
};

// Accessing Items in the Objects
console.log(user.Possesion);

// USING "this" KEYWORD
user.val();
