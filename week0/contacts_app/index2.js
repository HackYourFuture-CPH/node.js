const { addContact, removeContact, editContact, getContacts, search } = require('./contacts_lib.js');
// import { addContact, removeContact, editContact, getContacts, search } from './contacts_lib.js';
//C:\Users\BLND\Desktop\Node.js\week0\contacts_app
//const Contact = require('../../week0/homework'); 

// const my_contact_list = new ContactList();

// my_contact_list.add({
//     name: “Marco”,
//     phone: +4552838188
// });

let contacts = getContacts();

addContact({
    name: "Micheal",
    phone: "+4542812388"
});

addContact({
    name: "Mary",
    phone: "+4542812388"
});

addContact({
    name: "Marco",
    phone: "+4542838188"
});

addContact({
    name: "AnotherMan",
    phone: "+4542424242"
});

console.log("contacts", getContacts());

removeContact(1);

console.log("contacts after delete", getContacts());

editContact(0, {
    name: "Paco",
    phone: contacts[0].phone
});

console.log("contacts after edit", getContacts());

const found = search("m",'name');

console.log("\nfound", found.length, found);
