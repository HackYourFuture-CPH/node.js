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
-> src
---> backend
-----> data
-------> meals.json
-------> reservations.json
-------> reviews.json
-----> routes
-------> meals.js
-------> reservations.js
-------> reviews.js
-----> index.js
```

We will start with only having these routes:

| Route                | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `/meals/{id}`        | Respond with the json for the meal with the corresponding `id`        |
| `/meals`             | Respond with the json for all the meals                               |
| `/reservations/{id}` | Respond with the json for the reservation with the corresponding `id` |
| `/reservations`      | Respond with the json for all reservations                            |
| `/reviews/{id}`      | Respond with the json for the review with the corresponding `id`      |
| `/reviews`           | Respond with the json for all reviews                                 |

A `review` consists of `content`, `numberOfStars` and `createdAt`.

### /meals

The `/meals` route should support some query parameters:

| Parameter      | Description                                                                                                    | Data type | Example                          |
| -------------- | -------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| `maxPrice`     | Get meals that has a price smaller than `maxPrice`                                                             | Number    | `/meals?maxPrice=90`             |
| `title`        | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String    | `/meals?title=Indian%20platter`  |
| `createdAfter` | Get meals that has been created after the date                                                                 | Date      | `/meals?createdAfter=2019-04-05` |
| `limit`        | Only specific number of meals                                                                                  | Date      | `/meals?limit=4`                 |

Some extra things to think about:

- What if there is no meal with the requested id in `meals.json`?
- What if the users writes a string as id? fx "/meals/lol"
- What if the users writes a query parameter that is not supported?

### Work with middleware

Lets create a middleware function that logs out the time, a request was received and the path. The log should look like this:

`2019-11-07 11:41 request received for path: /meals/3`

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
