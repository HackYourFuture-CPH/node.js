const {person} = require("./person.js");

// remember to write a constructor function
let jimmy = new person("Jimmy");
jimmy.addPhone("55551234");
jimmy.call();
// should say "Calling Jimmy at 55551234..."
jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new person("Jill",24);
jill.call();
jill.birthday();
// should say "Jill has no phone number saved."
