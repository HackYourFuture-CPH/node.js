const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class Contact {
	constructor(obj) {
		if(!obj || !obj.name)
			throw "Name is needed to create a new person.";

		this.name = obj.name;
		this.age = obj.age;
		this._phone = obj.phone;
	};
  // addPhone(number) {

  //     return this.phone = number;
  // }

  get phone(){
  	return this._phone;
  }

  set phone(number){
  	this._phone = number;
  }

  call() {
  	if (this.phone)
  		console.log("Calling " + this.name + " at " + this.phone);
  	else
  		console.log(this.name + " has no phone number saved.");

  }
  birthday() {
  	console.log("Wishing " + this.name + " a happy " + (this.age+1) + "th birthday!");
  }
};

class ContactList {
	constructor(filename){
		this.list = [];
		this.filename = filename;
	}

	addContact(contact){
		if(contact instanceof Contact){
			this.list.push(contact);
		}
	}

	save(){
		return writeFile(this.filename, JSON.stringify(this.list), "utf8");
	}

	load(){
		const readFilePromise = readFile(this.filename, "utf8");

		return readFilePromise
		.then(fileString => {
			this.list = JSON.parse(fileString)
			.map(contactObj => new Contact(contactObj));

			return Promise.resolve(null);
		});
		// return new Promise((resolve, reject) => {
		// 	readFilePromise
		// 	.then(fileString => {
		// 		this.list = JSON.parse(fileString)
		// 		.map(contactObj => new Contact(contactObj));

		// 		resolve(null);
		// 	});
		// });
	}
};

exports.Contact = Contact;
exports.ContactList = ContactList;