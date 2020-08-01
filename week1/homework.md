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

The first step is to install [express](https://expressjs.com/) which is a javascript web framework.

Install `express` with the following command

    npm install -s express

Adding the `-s` will save `express` as a dependency.

To make our developing lives easier, we will use `nodemon` to run our web server (express). `nodemon` will watch for file changes, and when a file is changed it will rerun our app. To install `nodemon` run

    npm install --save-dev nodemon

The `--save-dev` will save the `nodemon` as a developer dependency.

And now to ensure all your packages are installed for good measure, run:

    npm install

### package.json

Inside the `package.json` file we can define scripts that can be run. There should already be a `test` script. In the same fashion, add two more scripts:

1. `start` will run the command `node src/backend/server.js`. This we use when we want to start up the server.
2. `dev` will run the command `nodemon src/backend/server.js`. This we use when we want to develop our application.

to run the `dev` script, we run the command `npm run dev`

## Now we can start building

All the javascript code, as it relates to the express webserver, will be added to the directory `src`. To run the application run `npm run dev`. Without touching or adding anything, the organization of the project looks like this:

```
|-- src
|   |-- backend
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- data
|   |   |   |-- meals.json
|-- test 
|-- .gitignore
|-- package.json
```

### Setting up the data

In addition to the `meals.json` file inside the `data` directory, create two additional files inside the `data` folder under `src/backend` called:

- `reviews.json`
- `reservations.json`

Add the following list of objects to their respective files:

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

**Note:** Add some more at least one more meal, review, and reservation to the respective data files. You will need them for passing the tests.

### Tasks

To get a bit of an overview of your homework tasks, run:

`npm test`

If this command doesn't work, ensure all your dependencies are installed correctly (try running `npm install` in the `week1/homework` directory).

#### Change index response message

Your first task is to change the response message for the index path (`/` route). If you take a look in `app.js` file, you will see that the `/` route returns `asd`. Run `npm test` to see what the message should be, and make the change accordingly.

#### Creating routes 

Inside the `app.js` file create the following routes using `express`:

| Route           | Description                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/meals`        | Respond with the json for all the `meals`. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured) |
| `/cheap-meals`  | Respond with the json for all the `meals` (including it's reviews) that are cheap (you define what a cheap meal is)                                                                                                                                                                                                  |
| `/large-meals`  | Respond with the json for all the `meals` (including it's reviews) that can fit lots of people                                                                                                                                                                                                                       |
| `/meal`         | Respond with the json for a random meal (including it's reviews)                                                                                                                                                                                                                                                     |
| `/reservations` | Respond with the json for all `reservations`                                                                                                                                                                                                                                                                         |
| `/reservation**  | Respond with the json for a random reservation                                                                                                                                                                                                                                                                       |

**Remember:** Ensure you haved done a `require` on the meals and reservations json files_

If you have made it this far, all the tests should be be passing.

#### Modularizing routes

Now that you have created all the routes as mentioned above (and all the the tests are passing) it is time to take your routing skills a step further by modularizing your routes. Instead of writing the functionality for all the routes inside `app.js`, create a directory (folder) called `routes` folder that contains a file for each route (`meals.js`, `meal.js`, etc). So that the routes can be created like this:

```js
const mealsRouter = require("./routes/meals.js");
app.get("/meals", mealsRouter);
```

The structure of the project now looks like this:

```
|-- src
|   |-- backend
|   |   |-- app.js
|   |   |-- server.js
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

**Remember:** Continue running the tests (`npm test`) as you move the routes, as this will help you ensure that the routes are still available at the correct paths and are returning the data that is expected.

![Meal sharing](assets/meal-sharing.gif)

## Feedback giving time!

Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/
The feedback should be given after the homework has been handed in preferably latest two days after.

To help you get started we have created some resources about giving feedback. Find them here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Create a new branch called `node.js/week1`
- Add all your changes to this branch in the `node.js/week1` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `node.js/week1` branch
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `master`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist

Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?
