# Homework

## So why this homework?
Getting comfortable with creating a simple webserver will set us up for having a good basic understanding of what a webserver is and should do. 

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

Create a warmup.js file where you will write the code for circle calculator. Run it using [node](readme.md#installing-node). 

### Circle calculator
Lets say we are building a calculator specifically made for circles. Lets create the calculator using javascript classes!

Create a class called `Circle`. It should have one property called `radius`.

The `Circle` class should have a couple of methods:
- getDiameter
- getCircumference
- getArea

Instantiate a couple of circles and log out their diameter, circumference and area.


## Meal sharing website

In this homework we will be continuing the meal sharing project started in the database class. 

## Lets setup the project
With node [installed](readme.md#installing-node) initiate a new project by running `npm init`. This will create a `package.json` file. 

Now add a `.gitignore` file with these two lines:

```
.DS_Store
/node_modules
```

`.gitignore` will make sure we dont commit all the files in the `node_modules` folder, which can get huge. 

We are going to be using `nodemon` to run our application. `nodemon` will watch for file changes, and when a file is changed it will rerun our app. To install `nodemon` run 

`npm install --save-dev nodemon` 

The `--save-dev` will save the `nodemon` as a developer dependency. 

### package.json
Inside the `package.json` file we can define scripts that can be run. There should already be a `test` script, in the same fashion add two more scripts:
1. `start` will run the command `node src/server/index.js`. This we use when we want to start up the server.
2. `dev` will run the command `nodemon src/server/index.js`. This we use when we want to develop our application.  

to run the `dev` script, we run the command `npm run dev`

## Now we can start building
Create a folder called `src`. That will contain the source files for our application. Inside the `src` folder create a `server` folder. Inside this folder create an `index.js` file. To run the application run `npm run dev`.

```
-> src
---> server
-----> index.js
```


### Setup classes
We are going to be using a lot of classes in this homework so refamiliarize yourself with them: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/JavaScript3/Week9/lesson-plan.md

Create the classes `Meal` and `Meals` as seperate files (inside the `server` folder) with the properties and methods described below. Require them all in the `index.js` file. Dont start the implementation of the methods, just set everything up :)

```
- Meals
  - Properties
    - meals
  - Methods
  	- addMeal(meal)
  	- getJSON

- Review
  - Properties
    - title
    - stars
  - Methods
    - getJSON

- Meal
  - Properties
    - title
    - maxNumberOfGuests
    - description
    - createdAt
    - reviews
    - price
  - Methods
    - addReview(review)
    - removeReview(review)
    - getJSON

```

### Instantiate some classes
Create some `Meal` instances and one `Meals` instance.

### Lets start creating some functionality

### Meals

#### meals.addMeal(meal)
Should push an instance of the `Meal` class to the `meals` property. ONLY if the meal is not already in the `meals` property! How can we check this? 

If the meal is already in the `meals` property throw [an error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

```js
meals.addMeal(burger);
console.log(meals.meals); //[Meal{title: 'burger', ...}]
meals.addMeal(fries);
console.log(meals.meals); //[Meal{title: 'burger', ...}, Meal{title: 'fries', ...}]
meals.addMeal(burger); // throws an error!
```

#### meals.getJSON()
Should return JSON representing all the meals in the `meals` property. 

```js
console.log(meals.getJSON()); // "[{"title": "Burger", ...}]"
```

### Review

#### review.getJSON(review)
Should return the json representing the review

```js
const review1Json = review1.getJSON();
console.log(review1Json); // "{"title": "Great food", "stars": 4}"
```

### Meal

#### meal.addReview(review)
Should add a `review` to the `reviews` property

```js
burger.addReview(review1);
console.log(burger.reviews); //[Review{title: 'Great food', ...}]
burger.addReview(review2);
console.log(burger.reviews); //[Review{title: 'Great food', ...}, Review{title: 'A bit expensive', ...}]
```

#### meal.removeReview(review)
Should remove the review form the `reviews` property. Throw an error if the review is not in the `reviews` property.

```js
console.log(burger.reviews); //[Review{title: 'Great food', ...}, Review{title: 'A bit expensive', ...}]
burger.removeReview(review1);
console.log(burger.reviews); //[User{title: 'A bit expensive', ...}]
```

#### meal.getJSON()
Should return the json representing the meal

```js
const mealJSON = burger.getJSON();
console.log(mealJSON); // "{"title": "Delicious burger", ...}"
```

### Lets create some instances
Now you have created all the class functionality, so lets use it!

Create a `Meals` instance, some `Meal` instances and create som `Review` instances. Add some meal instances to the meals instance. Try and add some reviews and remove some reviews. Also try to log out the json for a `Meal` and a `Review`

### Lets connect all our functionality with the server
Create a simple server using the `http` library.

To import it use:

```js
const http = require("http");
```

Create a new http server like this:
```js
http
  .createServer(function(req, res) {
	  console.log(req.url);
  });
```

Read this article to figure out what path the user is on: https://www.w3schools.com/nodejs/nodejs_http.asp

### Setting up routes
Depending on what route the user hits we should respond with different responses:
- "/meals" - Return the json for all meals
- "/meal" - Return the json for a specific meal
- "/review" - Return the json for a specific review
- If a user hits any other url's the server should respond with "Page not found"

For the response remember to set this header: `response.writeHead(200, { "Content-Type": "text/json" });`

![Meal sharing](assets/meal-sharing.gif)
