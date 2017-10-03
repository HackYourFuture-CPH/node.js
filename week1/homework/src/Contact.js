export default class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    // changes the type of input to Number (first tried to apply type conversion without any conditions but then it was failing a test where a number within an array, e.g. [32143211] was being input as a phone number)
    if (typeof phone === "string" || typeof phone === "number") {
      const phoneNumber = Number(phone);

      // to check that the input after conversion is a valid positive integer
      const isValidNumber = typeof phoneNumber === "number" && Number.isInteger(phoneNumber) && phoneNumber > 0;
      
      // to check that the number has 8 digits
      const hasRightLength = String(phoneNumber).length === 8;
      
      if (isValidNumber && hasRightLength) {
        this._phone = phoneNumber;
        return this._phone;
      }
    } else {
      console.log("Please input a valid phone number.");
    }
  }

  call() {
    if (this.phone) {
      console.log(`calling ${this.name} at ${this.phone}...`);
    } else {
      console.log(`${this.name} has no phone number saved.`);
    }
  }
}
