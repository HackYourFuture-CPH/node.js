exports.Contact = class Contact {
		constructor(name, phone) {
		this.name = name;
		this.phone = phone;
	}

		get phone(){
		return this._phone;
	}
	set phone (num) { 
		// convert string to int if it's valid number 
    	if(typeof num ==='string'){	
			// convert string to array
			let a =num.split('');
			// Make sure that( all )elements is integer 
		    let x=a.filter(function(i){
			       return !isNaN(i);
		           }).length;
		    // If any element of this array not int (Unvalid number)
		    if (x!==a.length){
			console.log('Unvalid number') ;
			return;
			}
			// If the strin is valid number convert to Int
		    else {
				num = parseInt(num);
			}
		
    	}
		
		// validates that the number is  (non-negative,8 digits long, doesn't start with 0)
		if ( (typeof num==='number' && num % 1===0)&&( num > 0)&&(num.toString().length===8)&&(num[0]!==0) ) {
		return	this._phone = num;
		}
		else{
			console.log("Unvalid Number");
			return;
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