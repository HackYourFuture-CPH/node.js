# Homework

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

# HackYourFuture Node.js - Homework week 5

## Assignment for this week

1. Reading before homework:
	* https://technologyconversations.com/2014/08/12/rest-api-with-json/
	* http://www.restapitutorial.com/
	* https://jsonplaceholder.typicode.com/ which you have used before is a great example of a JSON REST API.
	* https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4

1. Based on the [code demonstrated in the class](../classwork), extend as follows:

 * The folder is setup based on [Marco's node-babel template](https://github.com/pmcalabrese/node-babel). Get it setup using `npm install` and use the convenience scripts in [package.json](./package.json).
 * Remember to test the APi thoroughly by using Postman app before you begin and as you go along implementing each feature!
 * Add a method to delete a `Contact` which follows REST principles.
 * Create a new module (like [ContactList.js](../classwork/src/ContactList.js)) for a resource called `Car` with properties such as `color`, `manufacturer`, `model`.
 * Also implement validations using getters and setters and create RESTful API for this resource as well.
 * You could organise the express code in the same `index.js` file, or you could organise it in another file and import it as a module (like the way we import ContactList.js). Additionally you could also separate `Contact` and `Car` resources using an express router (see reading above.)
 * Add a setter for `age` property of the `Contact` class.
 * Add a method `GET /contact/<id>/birthday` which works with the `birthday()` method of `Contact` object. Since this method increments the `age` property, you need to save the contacts to JSON file afterwards. Can you handle any errors which might happen?
 * Add a property `cars` in `Contact` class which helps you track which cars are owned by a contact. (Hint: this could be a list which contains the id's of the related cars)
 * Implementd a method `GET /contact/<id>/cars` which shows you the cars owned by the particular user. Could you fetch the cars with the related id's stored in the `cars` property and display them?

## Related Reading

 * Explanation of REST API: https://stackoverflow.com/a/671132/1494833 (the anser with 2500+ upvotes)
