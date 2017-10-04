module.exports = class Contact {
    //export default class Contact {
        constructor(name, phone) {
            this.name = name;
            this.phone = phone;
        }
    
        get phone(){
            return this._phone;
        }
        
    //Add a setter for phone in Contact which converts string input to number (stores _phone as number)
    //and validates that the number is 8 digits long (non-negative, doesn't start with 0).
        set phone(phone) {
            if (typeof phone === 'number' && phone > 0 && phone.length === 8 && phone[0] > 0) {
                return this._phone = phone;
            } else if (typeof phone === 'string' && phone > 0 && phone.length === 8 && phone[0] > 0) {
                return this._phone = Number(phone);
            } else {
                return "uncorrect number";
            }
    
        }
    
        call() {
            if (this.phone) {
                console.log(`calling ${this.name} at ${this.phone}...`);
            } else {
                console.log(`${this.name} has no phone number saved.`);
            }
        }
    };