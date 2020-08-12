# Homework

## So why this homework?

Express is such a core library for NodeJs that can help us with many things when building out a fully fledged webserver.

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

Lets use express routes to create a small calculator

1. Create new empty folder called warmup. Open it in Visual Studio Code. Open the terminal.
2. Initialize a new Npm project using `npm init`, install `express` library, create `index.js` to run new express server on port `3000`.
3. Add 2 routes to your `index.js`:

- GET `/numbers/add?first=<number here>&second=<number here>`. In response send sum (first + second).
- GET `/numbers/multiply/<first number here>/<second number here>`. in response send multiplication (first \* second).

Example:
going to `localhost:3000/numbers/add?first=3&second=7` should respond with 10

Hints:

- Find express documentation online.
- Use req.query and req.params properties on req object.

## Meal sharing website

Lets continue building on our meal sharing website

Using the same structure and data objects as last week:

```
|-- src
|   |-- backend
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- routes
|   |   |   |-- meal.js
|   |   |   |-- meals.js
|   |   |   |-- reservation.js
|   |   |   |-- reservations.js
|   |   |-- data
|   |   |   |-- meals.json
|   |   |   |-- reviews.json
|   |   |   |-- reservations.json
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

Start by defining these routes and returning their results as described here:

| Route                | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `/meals/{id}`        | Respond with the json for the meal with the corresponding `id`        |
| `/meals`             | Respond with the json for all the meals                               |
| `/reservations/{id}` | Respond with the json for the reservation with the corresponding `id` |
| `/reservations`      | Respond with the json for all reservations                            |
| `/reviews/{id}`      | Respond with the json for the review with the corresponding `id`      |
| `/reviews`           | Respond with the json for all reviews                                 |

A `review` consists of `content`, `numberOfStars` and `createdAt`. The routes from week 1 do not include reviews, so ensure to add and write the code for these.

### /meals Parameters

Next, we want to ensure that our `/meals` route supports additional query parameters. Add the possibility for the following query parameters to the `/meals` route:

| Parameter      | Description                                                                                                    | Data type | Example                          |
| -------------- | -------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| `maxPrice`     | Get meals that has a price smaller than `maxPrice`                                                             | Number    | `/meals?maxPrice=90`             |
| `title`        | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String    | `/meals?title=Indian%20platter`  |
| `createdAfter` | Get meals that has been created after the date                                                                 | Date      | `/meals?createdAfter=2019-04-05` |
| `limit`        | Only specific number of meals                                                                                  | Number    | `/meals?limit=4`                 |

Some things to think about:

- What if there is no meal with the requested id in `meals.json`?
- What if the users writes a string as id? fx "/meals/lol"
- What if the users writes a query parameter that is not supported?

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Create a new branch called `node.js/week2`
- Add all your changes to this branch in the `node.js/week2` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `node.js/week2` branch
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

To help you get started with reviewing we have created [some ressources](https://github.com/HackYourFuture-CPH/curriculum/tree/master/review) about giving feedback. Find them 

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)