const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class Contact {
	constructor(obj) {
		if(!obj)
			throw "Need an object to instantiate Contact properties.";

		// console.log("obj:", obj);

		this.name = obj.name;
		this.age = obj.age;
		this.phone = obj.phone;
	};

	set name (name){
		if(!name)
			throw "Name is needed to create a person";
		else if(typeof name !== "string")
			throw "Contact.name needs to be a string."
		else if(name.length < 4)
			throw "Contact.name needs to be at least 4 characters."
		this._name = name;
	}

	get name(){
		return this._name;
	}
  

  get phone(){
  	return this._phone;
  }

  set phone(phone){
  	if(!phone)
  		return this._phone = null;

  	if(typeof phone === "string")
  		;
  	else if(typeof phone === "number")
  		phone = phone.toString();
  	else
  		throw "Contact.phone should be a string or a number."

  	if(phone.length < 8)
  		throw "Contact.phone should be at least 8 digits long."

  	this._phone = phone;
  }

  // this helps JSON.stringify convert getter properties correctly
  // https://stackoverflow.com/questions/42107492/json-stringify-es6-class-property-with-getter-setter
  toJSON (){
  	return {
  		name: this.name,
  		age: this.age,
  		phone: this.phone
  	}
  }

  call() {
  	if (this.phone)
  		return `Calling ${ this.name } at this.phone`;
  	else
  		return `${ this.name } has no phone number saved`;

  }
  birthday() {
  	return `Wishing ${ this.name } a happy ${ ++this.age }th birthday!`;
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
	}
};

exports.Contact = Contact;
exports.ContactList = ContactList;