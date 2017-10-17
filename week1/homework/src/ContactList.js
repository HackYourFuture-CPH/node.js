import Contact from './Contact.js';


//module.exports = class ContactList {
export default class ContactList {
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

        addContact(Contact) {
            if (Contact instanceof Object) {
            this.contacts.push(Contact);
            return this.contacts;
            //return this._contacts;
            }
        }

        removeContact(index) {
            if (!this.contacts[index]) return;
            this.contacts.splice(index , 1);
            return this.contacts;
        }
    
        editContact(index, new_contact) {
            if (!this.contacts[index]) return;
            this.contacts[index] = new_contact;
            return this.contacts;
        }
    
        _search(search_value, search_key) {
            let results = [];
            this.contacts.forEach((contact) => {
                if (contact[search_key].toLowerCase().indexOf(search_value) !== -1) {
                    results.push(contact);
                }
            });
            return results;
        }
    }