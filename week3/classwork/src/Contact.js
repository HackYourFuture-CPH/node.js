export default class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    if (
      // any non-string and non-number inputs are immediately rejected
      (typeof phone !== 'string' && typeof phone !== 'number') ||
      // any string input whose length is not equal to 8 is also rejected. any string input which cannot be converted into a number or becomes a non-positive number (such as strings with empty spaces or negative numbers) is rejected
      (typeof phone === 'string' &&
        (phone.length !== 8 || phone[0] === '0' || Number(phone) === NaN || Number(phone) <= 0)) ||
      // any number input which has a length not equal to 8 or is non-positive is rejected
      (typeof phone === 'number' && (String(phone).length !== 8 || phone <= 0))
    ) {
      console.log("Please input a valid telephone number");
    } else if (typeof phone === 'string') {
      return (this._phone = Number(phone));
    } else {
      return (this._phone = phone);
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
