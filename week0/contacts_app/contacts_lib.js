let contacts = [];

module.exports = class contact {
    constructor(name, age) {
        this.name = name;
    }

export getContacts = () => {
    return contacts;
}

export addContact = (contact) => {
    contacts.push(contact);
    return contacts;
}

export removeContact = (index) => {
    if (!contacts[index]) return;
    contacts.splice(index , 1);
    return contacts;
}

export editContact = (index, new_contact) => {
    if (!contacts[index]) return;
    contacts[index] = new_contact;
    return contacts;
}

export search = (search_value, search_key) => {
    let results = [];
    contacts.forEach((contact) => {
        if (contact[search_key].toLowerCase().indexOf(search_value) !== -1) {
            results.push(contact);
        }
    });
    return results;
}
