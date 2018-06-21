> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

# HackYourFuture Node.js - Homework week 4

## Assignment for this week

1. Reading before homework:

	* Getter:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	* Setter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
	* Import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

1. Based on the [code demonstrated in the class](../classwork), extend as follows:

	* The folder is setup based on [Marco's node-babel template](https://github.com/pmcalabrese/node-babel). Get it setup using `npm install` and use the convenience scripts in [package.json](./package.json).
	* Port the commented out `/all-contact` endpoint using express (you can see how the other methods have been ported in class for example).
	* The [contact.html file in public folder](../classwork/public/contacts.html) shows you how to make a request to load JSON data from `/all-contacts` request. extend this example to render the contacts into a list.
	* Notice the use of `Getters` and `Setters` for `name` and `phone` property of `Contact` class.
		1. We create a shadow property, like `_phone` and `_name` which are used to store real values, and the `get()` and `set()` function act as interface to this value.
		1. Getter and Setter use the name of the function as property which would be bound to the class instance. They are also used automatically while assigning and reading values, and not invoked as functions directly.
		1. Pay particular attention to how the validation for `name` has been moved out of the constructor into the setter since the setter is also used during assignment in constructur.
	* Add validation logic in the `name` and `phone` setters to ensure the following:
		1. `name` is a string and atleast 4 characters long.
		1. `phone` can accept both numbers and strings, but not any other data type and should be saved as a 8 digit long string. 

## Related Reading

* https://javascriptplayground.com/es5-getters-setters/
* https://docs.npmjs.com/cli/run-script
