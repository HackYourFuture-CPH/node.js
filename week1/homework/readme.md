# Homework

## Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `master`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch

Using the `hyf-homework` repo write this command

`git checkout master` - You are now on the `master` branch

`git checkout -b nodejs-week1`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## So why this homework?

Getting comfortable with creating a simple webserver will set us up for having a good basic understanding of what a webserver is and should do.

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Setting up the homework

You are about to start the Node JS homework. You will find the homework in the folder with the name `nodejs/week1`.
If you dont have the homework folders on your machine please clone the homework repo from here [node js homework](https://github.com/HackYourFuture-CPH/hyf-homework)

Make sure that you have the three weeks node homework folder on your machine.
See this repo [node js repo](https://github.com/HackYourFuture-CPH/hyf-homework-template/tree/master/nodejs)

Clone down the [node js repo](https://github.com/HackYourFuture-CPH/node.js) locally. Copy the contents of the `nodejs/week1/homework` into your `hyf-homework/nodejs/week1` folder

## Warmup

In the [warmup.js file](https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework/warmup.js) add the following functionality.

To run the warmup file, first install the project dependencies with `npm install`. Make sure you are in the `hyf-homework/nodejs/week1/homework` folder!

Now you can run: `nodemon warmup.js`

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

In this homework we will be continuing the meal sharing project started in the database class. In this homework we will be working with `meals`, `reviews`, and `reservations`.

## Lets start building

To start the webserver run `npm run dev`. Without touching or adding anything, the organization of the project looks like this:

```
|-- src
|   |-- backend
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- data
|   |   |   |-- meals.json
|   |   |   |-- reservations.json
|   |   |   |-- reviews.json
|-- test
|   |-- routes.spec.js
|-- .gitignore
|-- package.json
```

**Note:** Add at least one more meal, review, and reservation to the respective data files.

### Tasks

To get a bit of an overview of your homework tasks, run:

`npm test`

If this command doesn't work, ensure all your dependencies are installed correctly (try running `npm install` in the `hyf-homework/nodejs/week1/homework` directory).

#### Change index response message

Your first task is to change the response message for the index path (`/` route). If you take a look in `app.js` file, you will see that the `/` route returns `asd`. Run `npm test` to see what the message should be, and make the change accordingly.

#### Creating routes

Inside the `app.js` file create the following routes using `express`:

| Route             | Description                                                                                                                                                                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/meals`          | Respond with the json for all the `meals`. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured) |
| `/cheap-meals`    | Respond with the json for all the `meals` (including it's reviews) that are cheap (you define what a cheap meal is)                                                                                                                                                                                                  |
| `/large-meals`    | Respond with the json for all the `meals` (including it's reviews) that can fit lots of people                                                                                                                                                                                                                       |
| `/meal`           | Respond with the json for a random meal (including it's reviews)                                                                                                                                                                                                                                                     |
| `/reservations`   | Respond with the json for all `reservations`                                                                                                                                                                                                                                                                         |
| `/reservation` | Respond with the json for a random reservation                                                                                                                                                                                                                                                                       |

**Remember:** Ensure you haved done a `require` on the meals and reservations json files\_

If you have made it this far, all the tests should be be passing.

![Meal sharing](https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/assets/meal-sharing.gif)

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=XYlgh9hSWtw) for a more detailed go-through of how to hand in homework!

- Use the branch called `nodejs-week1`
- Add all your changes to this branch in the `nodejs/week1` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `nodejs-week1` branch and give your PR the same name  `nodejs-week1`. 
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

## Feedback giving time!

Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/. The feedback should be given after the homework has been handed in, preferably two days after.

Give the review on the PR exactly how the mentors do it! To find the link for the PR ask the person you are reviewing :) You can see how to give feedback on a PR using github [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)

To help you get started with reviewing we have created [some resources](https://github.com/HackYourFuture-CPH/curriculum/tree/master/review) about giving feedback. Find them

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)
