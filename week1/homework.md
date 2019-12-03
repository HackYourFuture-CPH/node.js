# Homework

## So why this homework?

Getting comfortable with creating a simple webserver will set us up for having a good basic understanding of what a webserver is and should do.

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

Create a warmup.js file where you will write the code for circle calculator. Run it using [node](readme.md#installing-node).

### Circle calculator

Lets say we are building a calculator specifically made for circles. Let's create the calculator using javascript classes!

Create a class called `Circle`. It should have one property called `radius`.

The `Circle` class should have the following methods:

- getDiameter
- getCircumference
- getArea

Instantiate a couple of circles and log out their diameter, circumference and area.

Here is an example:

```js
const circle = new Circle(10);
circle.getDiameter(); // 20
```

## Meal sharing website

In this homework we will be continuing the meal sharing project started in the database class. In this homework we will be working with `meals`, `reviews`, and `reservations` for the meals.

## Let's setup the project

With node [installed](readme.md#installing-node) initiate a new project by running `npm init`. This will create a `package.json` file.

Now add a `.gitignore` file with these two lines:

```
.DS_Store
/node_modules
```

`.gitignore` will make sure we don't commit all the files in the `node_modules` folder, which can get huge.

We are going to be using `nodemon` to run our application. `nodemon` will watch for file changes, and when a file is changed it will rerun our app. To install `nodemon` run

`npm install --save-dev nodemon`

The `--save-dev` will save the `nodemon` as a developer dependency

Also install `express` with the following command

`npm install -s express`

`-s` will save `express` as a dependency

### package.json

Inside the `package.json` file we can define scripts that can be run. There should already be a `test` script. In the same fashion, add two more scripts:

1. `start` will run the command `node src/backend/index.js`. This we use when we want to start up the server.
2. `dev` will run the command `nodemon src/backend/index.js`. This we use when we want to develop our application.

to run the `dev` script, we run the command `npm run dev`

## Now we can start building

Create a folder called `src`. That will contain the source files for our application. Inside the `src` folder create a `backend` folder. Inside this folder create an `index.js` file. To run the application run `npm run dev`.

```

|-- src
|   |-- backend
|   |   |-- index.js
|-- .gitignore
|-- package.json

```

### Setting up the data

Create three files inside a `data` folder under `src/backend` called:

- `meals.json`
- `reviews.json`
- `reservations.json`

`meals.json`

```json
[
  {
    "id": 1,
    "title": "Indian food in the summer",
    "maxNumberOfGuests": 5,
    "description": "A nice night out eating delicious indian food",
    "createdAt": "2019/12/7 14:34",
    "price": 67
  }
]
```

`reviews.json`

```json
[
  {
    "id": 1,
    "numberOfStars": 3,
    "content": "Best meal ever",
    "mealId": 1,
    "createdAt": 12345
  }
]
```

`reservations.json`

```json
[
  {
    "id": 1,
    "name": "Benjamin Hughes",
    "email": "benjamin@hughes.dk",
    "mealId": 1
  }
]
```

Add some more meals, reviews, and reservations.

### Setting up the routes

Inside the `index.js` file create the following routes using `express`

| Route           | Description                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/meals`        | Respond with the json for all the `meals`. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured) |
| `/cheap-meals`  | Respond with the json for all the `meals` (including it's reviews) that are cheap (you define what a cheap meal is)                                                                                                                                                                                                  |
| `/large-meals`  | Respond with the json for all the `meals` (including it's reviews) that can fit lots of people                                                                                                                                                                                                                       |
| `/meal`         | Respond with the json for a random meal (including it's reviews)                                                                                                                                                                                                                                                     |
| `/reservations` | Respond with the json for all `reservations`                                                                                                                                                                                                                                                                         |
| `/reservation`  | Respond with the json for a random reservation                                                                                                                                                                                                                                                                       |

_remember to `require` the meals and reservations json_

#### Modular routes

Instead of writing the functionality for the routes inside `index.js`. Create a routes folder that contains `meals.js`, `meal.js`, etc. So that the routes can be created like this:

```js
const mealsRouter = require('./routes/meals.js');
app.get('/meals', mealsRouter);
```

The structure of the project now looks like this:

```

|-- src
|   |-- backend
|   |   |-- index.js
|   |   |-- routes
|   |   |   |-- meals.js
|   |   |   |-- reservations.js
|   |   |   |-- cheap-meals.js
|   |   |   |-- large-meals.js
|   |   |   |-- meal.js
|   |   |   |-- reservation.js
|   |   |-- data
|   |   |   |-- meals.json
|   |   |   |-- reviews.json
|   |   |   |-- reservations.json
|-- .gitignore
|-- package.json
```

![Meal sharing](assets/meal-sharing.gif)

## Feedback giving time!

Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.

To help you get started we have created some resources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:

Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

![check](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif)

If you can answer yes to the above questions then you are ready to hand in the homework:

- Use the `hyf-homework` repo and add your homework files in the `nodejs/week1` folder
- Make your commits for the homework. Remember to seperate the code into meaningful commits!
- Push the changes to github
- To finish the homework post the link for your repo on your classes slack channel

---

🎉
