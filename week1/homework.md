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

Here is an example

```js
const circle = new Circle(10);
circle.getDiameter(); // 20
```

## Meal sharing website

In this homework we will be continuing the meal sharing project started in the database class. In this homework we will be working with `meals` and `reservations` for the meals. 

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

The `--save-dev` will save the `nodemon` as a developer dependency

Also install `express` with the following command

`npm install -s express`

`-s` will save `express` as a dependency

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
-----> data
-------> meals.js
-------> reservations.js
-----> index.js
```

### Setting up the data

Create two files inside a `data` folder under `src` called `meals.json` and `reservation.json`. 

`meals.json`
```json
[
  {
    "id":1,
    "title":"Indian food in the summer",
    "maxNumberOfGuests":5,
    "description":"A nice night out eating delicious indian food",
    "createdAt":"2019/12/7 14:34","price":67
    }
]
```

`reservations.json`
```json
[
  {
    "name": "Benjamin Hughes",
    "email": "benjamin@hughes.dk",
    "mealId": 1
  }
];
```

Add some more meals and reservations.

### Setting up the routes

Inside the `index.js` file create the following routes using `express`

| Route | Description |
| ---- | ----- |
| `/meals` | Respond with the json for all the `meals` |
| `/cheap-meals` | Respond with the json for all the `meals` that are cheap (you define what a cheap meal is) |
| `/large-meals` | Respond with the json for all the `meals` that can fit lots of people |
| `/meal` | Respond with the json for a random meal. If the meal has a reservation that matches its id, then add the email of that reservation to the json |
| `/reservations` | Respond with the json for all `reservations` |
| `/reservation` | Respond with the json for a random reservation |

*remember to `require` the meals and reservations json*

#### Modular routes
Instead of writing the functionality for the routes inside `index.js`. Create a routes folder that contains `meals.js`, `meal.js`, etc. So that the routes can be created like this:

```js
const mealsRouter = require('./routes/meals.js');
app.get("/meals", mealsRouter);

```

The structure of the project now looks like this:

```
-> src
---> server
-----> data
-------> meals.js
-------> reservations.js
-----> routes
-------> meals.js
-------> cheap-meals.js
-------> etc
-----> index.js
```

![Meal sharing](assets/meal-sharing.gif)

## Feedback giving time!
Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after. 

To help you get started we have created some ressources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

![check](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif) 

If you can answer yes to the above questions then you are ready to hand if the homework: 

- Use the `hyf-homework` repo and add your homework files in the `nodejs/week1` folder
- Make your commits for the homework. Remember to seperate the code into meaningful commits!
- Push the changes to github
- To finish the homework post the link for your repo on your classes slack channel

---

🎉

