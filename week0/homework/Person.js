
module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    addPhone(phoneNum) {
        this.phoneNum = phoneNum;
    }

    call() {
        if(!this.phoneNum) {
            return `${this.name} has no phone number saved.`;
        } else {
            return `Calling ${this.name} at ${this.phoneNum}...`;
        }
    }

    birthday() {
        return `Wishing ${this.name} a happy ${this.age +1}th birthday!`;
    }
};