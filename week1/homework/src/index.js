import Contact from './Contact';
import ContactList from './ContactList';

// PHONE NUMBER VALIDATION
// testing for phone number validation using array as input
let Abigail = new Contact("Abigail", [32143211]);
console.log(Abigail);

// testing for phone number validation using object as input
let Abraham = new Contact("Abraham", {number: 87654321});
console.log(Abraham);

// testing for phone number validation using boolean as input
let Albert = new Contact("Albert", false);
console.log(Albert);

// testing for phone number validation using string with length not equal to 8
let Alex = new Contact("Alex", "naqoyqatsi");
console.log(Alex);

// testing for phone number validation using string starting with 0
let Alexis = new Contact("Alexis", "01234567");
console.log(Alexis);

// testing for phone number validation using string containing a negative number
let Alexander = new Contact("Alexander", "-0123456");
console.log(Alexander);

// testing for phone number validation using empty string
let Abel = new Contact("Abel", "       ");
console.log(Abel);

// testing for phone number validation using string with alphabet
let Jonah = new Contact("Jonah", "human");
console.log(Jonah);

// testing for phone number validation using negative numbers
let Jeremiah = new Contact("Jeremiah", -54321652);
console.log(Jeremiah);

// testing for phone number validation using number beginning with 0
let Jamiroquai = new Contact("Jamiroquai", 1234567);
console.log(Jamiroquai);

// testing for phone number validation using a valid number
let Jekyll = new Contact("Jekyll", 87654321);
console.log(Jekyll);

// testing for phone number validation using a valid number in string form
let Jamaica = new Contact("Jamaica", "98765432");
console.log(Jamaica);

// VALIDATING INSTANCEOF CONTACT
let Yolanda = {
    name: "Yolanda",
    phone: "76543210"
};

let myContactList = new ContactList();

myContactList.addContact(Yolanda);
console.log(myContactList.contacts);

myContactList.addContact(Jekyll);
console.log(myContactList.contacts);
