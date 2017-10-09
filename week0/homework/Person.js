
module.exports = class Person {
  constructor (name,age) {
    this.name = name;
    this.age = age;
  }
  addPhone(phoneNum) {
    this.phoneNum = phoneNum;
  }

  call() {
    if (!this.phoneNum) {
      return  "Calling" + this.name + "at" + this.phoneNum;
    }else{
       return this.name + "has no phone number saved.";
}
  }

birthday() {
  return "Wishing" + this.name + "a happy"+ this.age + 1 +"birthday";
  }
};
