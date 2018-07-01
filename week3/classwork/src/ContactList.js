// const fs = require("fs");
import fs from "fs";
// const util = require("util");
import util from "util";
import path from "path";

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

export class Contact {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
	};
	
    addPhone(number) {

        return this.phoneNumber = number;
    }
     call() {

         if (this.phoneNumber)
             console.log("Calling " + this.name + " at " + this.phoneNumber);
         else
             console.log(this.name + " has no phone number saved.");

     }
     birthday() {

         console.log("Wishing " + this.name + " a happy " + (this.age+1) + "th birthday!");

     }
};

export class ContactList {
	constructor(filename){
		this.list = [];
		this.filename = filename;
		this.load();
	}

	addContact(contact){
		if(contact instanceof Contact) {
			this.list.push(contact);
			console.log("this.list", this.list);
			return this.save(this.list);
		}
	}

	save(list){
		return writeFile(path.resolve(__dirname, this.filename), JSON.stringify(list), "utf8")
		.then(() => {
			return list;	
		});
	}

	load(){
		const readFilePromise = readFile(path.resolve(__dirname, this.filename), "utf8");

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
