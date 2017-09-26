
 exports.person=class person 
 {
 constructor(name,age){
    this.name=name;
    this.age=age;
  };
addPhone (num){
    return this.num=num;
}
call (){
    if(this.num !=null){
     console.log("Calling "+ this.name+ " at : " +this.num);
    }
      else{
       console.log(this.name+ " has no phone number saved.")
    }
}
birthday(){
    if(this.age !=null){
        console.log("Wishing "+ this.name+ "a happy "+this.age+"th birthday!")
       }
         else{
          console.log(this.name+ " has no  birthday saved.")
       }
   }
}


