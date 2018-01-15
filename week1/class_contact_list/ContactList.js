const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

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
};

module.exports = ContactList;