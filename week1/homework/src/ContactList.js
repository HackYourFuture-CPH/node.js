import Contact from "./Contact";

export default class ContactList {
  constructor() {
    this._contacts = [];
  }

  get contacts() {
    return this._contacts;
  }

  get length() {
    return this._contacts.length;
  }

  addContact(contact) {
    // adding a validator so that only instances of class Contact can be used to add contacts to the contact list
    if (contact instanceof Contact) {
      this._contacts.push(contact);
    } else {
      console.log(
        "Please use the correct contact type. Only contacts created with the Contact class are accepted."
      );
    }
    return this._contacts;
  }

  removeContact(index) {
    if (!this._contacts[index]) return;
    this._contacts.splice(index, 1);
    return this._contacts;
  }

  editContact(index, new_contact) {
    if (!this._contacts[index]) return;
    this._contacts[index] = new_contact;
    return this._contacts;
  }

  _search(search_value, search_key) {
    let results = [];
    this._contacts.forEach(contact => {
      if (contact[search_key].toLowerCase().indexOf(search_value) !== -1) {
        results.push(contact);
      }
    });
    return results;
  }
}
