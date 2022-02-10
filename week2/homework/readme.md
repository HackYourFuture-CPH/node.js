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

`git checkout -b nodejs-week2`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## So why this homework?

Express is such a core library for NodeJs that can help us with many things when building out a fully fledged webserver.

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Setting things up

Copy the two projects from [here](./) into your `hyf-homework/nodejs/week2` folder

## Warmup

Use [this boilerplate](./warmup) for the homework. Remember to run `npm install` then `npm run dev` to start the server

Lets use express routes to create a small calculator

Add 2 routes to your `index.js`:

- GET `/numbers/add?first=<number here>&second=<number here>`. In response send sum (first + second).
- GET `/numbers/multiply/<first number here>/<second number here>`. in response send multiplication (first \* second).

Example:
going to `localhost:3000/numbers/add?first=3&second=7` should respond with 10

Hints:

- Find express documentation online.
- Use req.query and req.params properties on req object.

## Meal sharing website

Lets continue building on our meal sharing website

Use [this boilerplate](./meal-sharing) for the homework. Remember to run `npm install` then `npm run dev` to start the server

```
|-- src
|   |-- backend
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- api
|   |   |   |-- meals-router.js
|   |   |-- data
|   |   |   |-- meals.json
|-- test
|   |-- parameters.spec.js
|-- .gitignore
|-- package.json
```

## Tasks

After running `npm install`, in the homework directory where the `package.json` exists, run the following to get an idea of the specific code you need to write:

    npm test

After studying the failing tests for a bit, continue to the next section.

### Routes

If you have not already please add some meals, reviews and reservations to the json files in the data folder.

Start by defining these routes and returning their results as described here:

| Route                | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `/api/meals/{id}`        | Respond with the json for the meal with the corresponding `id`        |
| `/api/meals`             | Respond with the json for all the meals                               |
| `/api/reservations/{id}` | Respond with the json for the reservation with the corresponding `id` * |
| `/api/reservations`      | Respond with the json for all reservations *                            |
| `/api/reviews/{id}`      | Respond with the json for the review with the corresponding `id` *       |
| `/api/reviews`           | Respond with the json for all reviews *                                 |

\* To make the reservations and reviews routes working create a new reservations and reviews router, add the routers in the `app.js` file and add the `reservations.json` and `reviews.json` file. Follow how it was done for the meals router.

### /meals Parameters

Next, we want to ensure that our `/meals` route supports additional query parameters. Add the possibility for the following query parameters to the `/api/meals` route:

| Parameter      | Description                                                                                                    | Data type | Example                          |
| -------------- | -------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| `maxPrice`     | Get meals that has a price smaller than `maxPrice`                                                             | Number    | `/api/meals?maxPrice=90`             |
| `title`        | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String    | `/api/meals?title=Indian%20platter`  |
| `createdAfter` | Get meals that has been created after the date                                                                 | Date      | `/api/meals?createdAfter=2019-04-05` |
| `limit`        | Only specific number of meals                                                                                  | Number    | `/api/meals?limit=4`                 |

Some things to think about:

- What if there is no meal with the requested id in `meals.json`?
- What if the users writes a string as id? fx "/api/meals/lol"
- What if the users writes a query parameter that is not supported?

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=XYlgh9hSWtw) for a more detailed go-through of how to hand in homework!

- Use the branch called `nodejs-week2`
- Add all your changes to this branch in the `nodejs/week2` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `nodejs/week2` branch and give your PR the same name  `nodejs-week2`. 
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
