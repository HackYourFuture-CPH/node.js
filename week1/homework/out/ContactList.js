'use strict';

var _Contact = require('./Contact.js');

// const {Contact}=require('./Contact.js')


exports.ContactList = class ContactList {

    constructor() {
        this._contacts = [];
    }

    get contacts() {
        return this._contacts;
    }

    set length(input) {
        // validators
        if (typeof input === 'number' && input > 0) {
            this.contacts.length = input;
        }
    }

    get length() {
        return this.contacts.length;
    }

    addContact(contact) {
        if (contact instanceof _Contact.Contact) {
            this.contacts.push(contact);
            return this.contacts;
        } else {
            console.log("Can't able to add this element");
            // return "Can't able to add this element";
        }
    }

    removeContact(index) {
        if (!this.contacts[index]) return;
        this.contacts.splice(index, 1);
        return this.contacts;
    }

    editContact(index, new_contact) {
        if (!this.contacts[index]) return;
        this.contacts[index] = new_contact;
        return this.contacts;
    }

    _search(search_value, search_key) {
        let results = [];
        this.contacts.forEach(contact => {
            if (contact[search_key].toLowerCase().indexOf(search_value) !== -1) {
                results.push(contact);
            }
        });
        return results;
    }
};