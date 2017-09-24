const Person = require("./Person.js");
// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);
jimmy.addPhone("55551234");


console.log(jimmy.call());
// should say "Calling Jimmy at 55551234..."

console.log(jimmy.birthday());
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

console.log(jill.call());
// should say "Jill has no phone number saved."