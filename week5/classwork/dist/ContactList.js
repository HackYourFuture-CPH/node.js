"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");
var util = require("util");

var writeFile = util.promisify(fs.writeFile);
var readFile = util.promisify(fs.readFile);

var Contact = function () {
	function Contact(obj) {
		_classCallCheck(this, Contact);

		if (!obj) throw "Need an object to instantiate Contact properties.";

		// console.log("obj:", obj);

		this.name = obj.name;
		this.age = obj.age;
		this.phone = obj.phone;
	}

	_createClass(Contact, [{
		key: "toJSON",


		// this helps JSON.stringify convert getter properties correctly
		// https://stackoverflow.com/questions/42107492/json-stringify-es6-class-property-with-getter-setter
		value: function toJSON() {
			return {
				name: this.name,
				age: this.age,
				phone: this.phone
			};
		}
	}, {
		key: "call",
		value: function call() {
			if (this.phone) return "Calling " + this.name + " at this.phone";else return this.name + " has no phone number saved";
		}
	}, {
		key: "birthday",
		value: function birthday() {
			return "Wishing " + this.name + " a happy " + ++this.age + "th birthday!";
		}
	}, {
		key: "name",
		set: function set(name) {
			if (!name) throw "Name is needed to create a person";else if (typeof name !== "string") throw "Contact.name needs to be a string.";else if (name.length < 4) throw "Contact.name needs to be at least 4 characters.";
			this._name = name;
		},
		get: function get() {
			return this._name;
		}
	}, {
		key: "phone",
		get: function get() {
			return this._phone;
		},
		set: function set(phone) {
			if (!phone) return this._phone = null;

			if (typeof phone === "string") ;else if (typeof phone === "number") phone = phone.toString();else throw "Contact.phone should be a string or a number.";

			if (phone.length < 8) throw "Contact.phone should be at least 8 digits long.";

			this._phone = phone;
		}
	}]);

	return Contact;
}();

;

var ContactList = function () {
	function ContactList(filename) {
		_classCallCheck(this, ContactList);

		this.list = [];
		this.filename = filename;
	}

	_createClass(ContactList, [{
		key: "addContact",
		value: function addContact(contact) {
			if (contact instanceof Contact) {
				this.list.push(contact);
			}
		}
	}, {
		key: "save",
		value: function save() {
			return writeFile(this.filename, JSON.stringify(this.list), "utf8");
		}
	}, {
		key: "load",
		value: function load() {
			var _this = this;

			var readFilePromise = readFile(this.filename, "utf8");
			// clean the list, since we'll add all contacts again
			this.list = [];

			return readFilePromise.then(function (fileString) {
				JSON.parse(fileString).forEach(function (contactObj) {
					return _this.addContact(new Contact(contactObj));
				});

				return Promise.resolve(null);
			});
		}
	}]);

	return ContactList;
}();

;

exports.Contact = Contact;
exports.ContactList = ContactList;
//# sourceMappingURL=ContactList.js.map