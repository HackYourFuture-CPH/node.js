> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

# HackYourFuture Node.js - Homework week 1

## Assignment for this week

1. Revise and Practice:

	* https://try.github.io to revise your Git CLI skills.
	* https://codepen.io/k3no/post/es6-sampler-5-promises-were-made Practical examples for async and promise code.
	


1. Beginning from the [code demonstrated in the class](../class_contact_list), add the following functionality:

	* Convert into a node project with `npm init`.
	* Add a method called `load` in the `ContactList` class which reads the the json file and parses each record present in it as a `Contact` instance. make sure you use the existing `add` method to add the contacts.
	* Create a new file `read.js` where you use the `load` method above to read the contact list from the json file.
	* Call the methods `birthday` and `call` on the contacts that you have read to make sure they have correctly been instantiated as `Contact`(s).


## Related reading

* [`intanceof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* Callbacks: 
Video: https://www.youtube.com/watch?v=pTbSfCT42_M
Read: http://callbackhell.com/
* Require/exporting
Video: https://www.youtube.com/watch?v=e1Ln1FrLvh8
Read: http://openmymind.net/2012/2/3/Node-Require-and-Exports/
