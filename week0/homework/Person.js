module.exports =  function (name,age)  {
   let arr = [];
   this.name = name;
   this.age = age;
   this.addPhone = function(phone) {
        arr.push({"Name":this.name,"Age":this.age,"Phone":phone});
   }

  this.call = function() {
       var phone = arr.map(function(o){return o.Phone});
       if (phone != "") {
           return "Calling " + this.name + " at " + phone + " ...";
       } else {
           return this.name + " has no phone number saved.";
       }
   }
   this.birthday = function() {
       return "Wishing " + this.name + " a happy 29th birthday!";
   }
};
