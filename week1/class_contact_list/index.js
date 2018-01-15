const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

// remember to write a constructor function
let jimmy = new Contact("Jimmy", 28);

jimmy.addPhone("55551234");

// jimmy.call();
// should say "Calling Jimmy at 55551234..."

// jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

// console.log(JSON.stringify(jimmy));
// console.log(jimmy instanceof Contact);

let contacts = new ContactList("contacts1.json");

contacts.addContact(jimmy);
contacts.addContact({name: "Jane"});
contacts.addContact(new Contact("Jane"));

console.log(contacts);

contacts.save()
.then(() => { console.log("Contacts written") })
.catch(console.log);
