# Homework

## So why this homework?
Express is such a core library for NodeJs that can help us with many things when building out a fully fledged webserver. 

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

Lets use express routes to create a small calculator

1. Create new empty folder called warmup. Open it in Visual Studio Code. Open the terminal.
2. Initialize a new Npm project using `npm init`, install `express` library, create `index.js` with code to run new express server on port `3000`.
3. Add 2 routes to your `index.js`:
  - GET `/numbers/add?first=<number here>&second=<number here>`. In response send sum (first + second).
  - GET `/numbers/multiply/<first number here>/<second number here>`. in response send multiplication (first * second).

Example:
going to `localhost:3000/numbers/add?first=3&second=7` should respond with 10

Hints:
- Find express documentation online.
- Use req.query and res.params properties on req object.

## Meal sharing website

Lets continue building on our meal sharing website

Using the same structure and data objects as last week:

```
-> src
---> server
-----> data
-------> meals.js
-------> reservations.js
-------> reviews.js
-----> routes
-------> meals.js
-------> reservations.js
-------> reviews.js
-----> index.js
```

We will start with only having these routes:

| Route | Description |
| ---- | ----- |
| `/meals/{id}` | Respond with the json for the meal with the corresponding `id` |
| `/meals` | Respond with the json for all the meals |
| `/reservations/{id}` | Respond with the json for the reservation with the corresponding `id` |
| `/reservations` | Respond with the json for all reservations |
| `/reviews/{id}` | Respond with the json for the review with the corresponding `id` |
| `/reviews` | Respond with the json for all reviews |

a `review` constists of `title`, `createdBy`, `start` and `createdAt`.

### /meals

The `/meals` route should support some query parameters:

| Parameter | Description | Data type | Example | 
| ---- | ----- | ---- | -------- |
| `maxPrice` | Get meals that has a price smaller than `maxPrice` | Number | `/meals?maxPrice=90` |
| `title` | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String | `api/meals?title="Indian platter"` |
| `createdAfter` | Get meals that has been created after the date | Date | `api/meals?createdAfter=2019-04-05` |
| `limit` | Only specific number of meals | Date | `api/meals?limit=4` |

Some extra things to think about: 
- What if there is no meal with the requested id in `meals.json`?
- What if the users writes a string as id? fx "/meals/lol"
- What if the users writes a query parameter that is not supported?

### Work with middleware
Lets create a middleware function that logs out the time, a request was received and the path. The log should look like this:

`2019-11-07 11:41 request received for path: /meals/3`

## Hand in Homework:
Go over your homework one last time:

- Does every file run without errors and with the correct results?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md))?

![check](https://media.giphy.com/media/l4EpblDY4msVtKAOk/giphy.gif) 

If you can answer yes to the above questions then you are ready to hand if the homework: 

- Use the `hyf-homework` repo and add your homework files in the `nodejs/week2` folder
- Make your commits for the homework. Remember to seperate the code into meaningful commits!
- Push the changes to github
- To finish the homework post the link for your repo on your classes slack channel

---

🎉
