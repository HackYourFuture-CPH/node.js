export default class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    const invalidPhoneMessage = "Please input a valid phone number.";
    // only accepts inputs with type of string or number
    if (typeof phone !== "string" || typeof phone !== "number") {
      console.log(invalidPhoneMessage);
      return;
    }
    // changes the type of input to Number
    const phoneNumber = Number(phone);

    // to check that the input after conversion is a valid positive integer
    const isValidNumber =
      typeof phoneNumber === "number" &&
      Number.isInteger(phoneNumber) &&
      phoneNumber > 0;

    // to check that the number has 8 digits
    const hasRightLength = String(phoneNumber).length === 8;

    // saves the phone number if it fulfills all the criteria
    if (isValidNumber && hasRightLength) {
      this._phone = phoneNumber;
      return this._phone;
    }
    console.log(invalidPhoneMessage);
  }

  call() {
    if (this.phone) {
      console.log(`calling ${this.name} at ${this.phone}...`);
    } else {
      console.log(`${this.name} has no phone number saved.`);
    }
  }
}
