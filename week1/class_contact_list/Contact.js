class Contact {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    addPhone(number) {
        this.phoneNumber = number;
    }
    
    call() {
        if (this.phoneNumber)
            console.log(`Calling ${this.name} at ${this.phoneNumber}`);
        else
            console.log(`${this.name} has no phone number saved.`);
    }

    birthday() {
        this.age++;
        console.log(`Wishing ${this.name} a happy ${this.age}th birthday!`);
    }
};

module.exports = Contact;