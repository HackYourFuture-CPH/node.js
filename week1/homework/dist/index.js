const Contact = require('./Contact');
const ContactList = require('./ContactList');

// import Contact from './Contact';
// import ContactList from './ContactList';

const my_contact_list = new ContactList(24);

const jaw_contact_list = new ContactList();

my_contact_list.addContact({
    name: "Marco",
    phone: 42838188
});

my_contact_list.addContact({
    name: "Jaw",
    phone: 12312312
});

jaw_contact_list.addContact({
    name: "Micky Mouse",
    phone: 01010101
});

 my_contact_list.contacts = "whatever";

 console.log(my_contact_list.contacts);

 console.log(my_contact_list.length);

 my_contact_list.length = "marco";

 console.log(my_contact_list.length);

 console.log(jaw_contact_list.contacts);

 console.log(my_contact_list);

 my_contact_list.removeContact(1);
 console.log(my_contact_list);
 

const lolo_contact_list = new ContactList();

 my_contact_list.editContact(1, lolo_contact_list);
 console.log(my_contact_list);

 console.log("setting the phone number");

 let ali = new Contact("ali", "76895403");
 console.log(ali);

 let hala = new Contact("Hala", "hgjdsncnhfk");
  console.log(hala);
  
  let negative = new Contact("negative", "-76895403");
   console.log(negative);
  
  let zero = new Contact("zero", "06578494");
   console.log(zero);

   let peter = new Contact("Peter", "number");
    console.log(peter);
   
//  my_contact_list._search("Hello", "Greeting");
//  console.log(my_contact_list);
//  console.log("new 3");
