'use strict';

var _Contact = require('./Contact.js');

// import {ContactList} from './contactlist.js';
const { ContactList } = require('./ContactList');


const my_contact_list = new ContactList();

// Can't able to add object doesn't created by contact class
my_contact_list.addContact({
    name: "Marco",
    phone: 42838188
});

//  Only contacts created with the Contact class are accepted.
let rafah = new _Contact.Contact("Rafah", 45679908);
my_contact_list.addContact(rafah);
// console.log(rafah.phone);

let rufaida = new _Contact.Contact("rufaida", 12379908);
my_contact_list.addContact(rufaida);

let raneem = new _Contact.Contact("Raneem", 45679123);
my_contact_list.addContact(raneem);
// The number is string
let nana = new _Contact.Contact("nana", '45612308');
my_contact_list.addContact(nana);

// The number is negative string
let chris = new _Contact.Contact("chris", '-12342308');
my_contact_list.addContact(chris);

// The length of string not equal 8
let chr = new _Contact.Contact("chr", '34445512342308');
my_contact_list.addContact(chr);

// the value is not int
let ch = new _Contact.Contact("ch", '344423.45');
my_contact_list.addContact(ch);

// the first number is 0
let c = new _Contact.Contact("c", '04442345');
my_contact_list.addContact(c);

// valid number
let omar = new _Contact.Contact("omar", 12345678);
my_contact_list.addContact(omar);

// Negative 
let wafaa = new _Contact.Contact("wafaa", -12345678);
my_contact_list.addContact(wafaa);

// The length not equal 8
let waf = new _Contact.Contact("waf", 45678);
my_contact_list.addContact(waf);

console.log(my_contact_list.contacts);

console.log(my_contact_list.length);

my_contact_list._search(0, 'rafah');