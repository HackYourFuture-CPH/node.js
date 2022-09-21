# Week 1 homework

This homework will result in 2 pull requests:
* A pull request for the **Warmup** - in your regular hyf-homework repository
* A pull request for the **Meal-sharing endpoints** - in the new meal-sharing repository

### **Meal-sharing repository**

Go to [the meal-sharing-template repo](https://github.com/HackYourFuture-CPH/meal-sharing-template/generate) and create your own personal repo with the name `meal-sharing`. <br/>
You should now have a meal-sharing repository here: `https://github.com/YOUR_GITHUB_USER_NAME/meal-sharing` like `https://github.com/benna100/meal-sharing`. Clone that repository down locally.

#### Branch

For us mentors to easily give feedback on your code, create all functionality in a PR just like we do normally with homework, so:

- `git checkout -b nodejs-week1` <- in the meal-sharing repo you have cloned down.
- Make your code in the `nodejs-week1` branch and when you are done create a PR with the `nodejs-week1` branch.

<br/>

## **Warmup**

In your hyf-homework repository, `nodejs/week1` directory, create a file named `avg.js` which will calculate the average of the numbers provided as command line arguments.

But what are command line arguments? The arguments you provide to a command line program. Here's an example of how we would invoke `avg.js` with 3 numbers:

```
$ node avg.js 13 7 4
8
```

Hint: [read](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) to see how we can deal with command line arguments.

Optional improvements and considerations:
- What should happen if the provided arguments are not numbers (`node avg.js 1 two hello 4`)?
- What about if no arguments are provided (`node avg.js`)?

<br/>

## **Meal sharing endpoints**

You will begin working in the meal-sharing repository for this homework and continue throughout the whole Node.js module. Each week you will build upon the endpoints, resulting in the backend setup for your future meal sharing website. 

### **Setup**

The meal-sharing-template [README](https://github.com/HackYourFuture-CPH/meal-sharing-template#readme) has further instructions on how to set up and run this locally but the key steps are summarized here:
- Run `npm install` to install all the needed NPM packages.
- Create `.env` by copying the existing `.env.example` file. Update `DB_USER`, `DB_PASSWORD`, etc. so the server can successfully establish the connection to the database.
- Run `npm run server` to start the server.

#### **Database**

In the Database module, we worked on the meal sharing database. The diagram for that database can be found [here](https://dbdiagram.io/d/5f0460690425da461f045a29).

In this homework, we will **reuse the same database** schema and build a web server with the following routes.

#### **Getting started**

The routes you need to implement as part of this homework should go into `/src/backend/app.js` after the line where it says `router.use("/meals", mealsRouter);`. There you can go ahead and define the desired routes like you normally would:

```js
app.get("/my-route", (req, res) => { res.send("Hi friend") });
```


### **Routes**

| Route | Description |
| - | - |
| `/future-meals` | Respond with all meals in the future (relative to the `when` datetime) |
| `/past-meals` | Respond with all meals in the past (relative to the `when` datetime) |
| `/all-meals` | Respond with _all_ meals sorted by ID |
| `/first-meal` | Respond with the first meal (meaning with the minimum `id`) |
| `/last-meal` | Respond with the last meal (meaning with the maximum `id`) |

### **Responses**

All the specified routes should respond with JSON with the available columns from the meal table.

**Multiple meals:** `/future-meals`, `/past-meals` and `/all-meals` are expected to respond with a collection of meals, meaning an array of objects.

**Single meal:** The other 2 routes, `/first-meal` and `/last-meal`, are expected to respond with a single meal, meaning an object.

**What if there are no meals?:** `/first-meal` and `/last-meal` should in that case return a 404 response with an explanation that there are no meals.
The other routes should in that case just return an empty array.


#### **Knex**

Our usage of Knex will get more advanced over the coming weeks but for now, we will focus on the simplified `knex.raw` function that can execute a raw SQL query. Example:

```js
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});
```

Note: `SELECT VERSION()` is a valid MySQL query but you would probably do something like this `SELECT * FROM some_table`.

Also, `knex.raw` returns a Promise so you can also use the `async/await` syntax.


## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=JcT4wmK1VcA) for a more detailed go-through of how to hand in homework!

- Use the branch called `nodejs-week1`
- Add all your changes to this branch in the `nodejs-week1` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `nodejs-week1` branch and give your PR the same name `nodejs-week1`.
- Wait for mentor feedback
- Implement feedback, `add`, `commit` and `push` the changes
- Now you can merge the changes into `main`
- When merged you can **share the github link** to your classes slack channel if you are **proud of what you did** 💪
- Now celebrate 🎉🎉🎉

## Homework checklist

Go over your homework one last time:

- [ ] Does every file run without errors and with the correct results?
- [ ] Have you used `const` and `let` and avoided `var`?
- [ ] Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/main/fundamentals/naming_conventions.md)?
- [ ] Is your code well-formatted (see [Code Formatting](https://github.com/HackYourFuture/fundamentals/blob/main/fundamentals/code_formatting.md))?

## Feedback giving time!

Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/. The feedback should be given after the homework has been handed in, preferably two days after.

Give the review on the PR exactly how the mentors do it! To find the link for the PR ask the person you are reviewing :) You can see how to give feedback on a PR using github [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)

To help you get started with reviewing we have created [some ressources](https://github.com/HackYourFuture-CPH/curriculum/tree/main/review) about giving feedback. Find them

Why is it important to give feedback? Because it will make you a [better](https://www.brightspot.com/blog/developer-life-5-reasons-why-the-code-review-process-is-critical-for-developers) [developer](https://www.sitepoint.com/the-importance-of-code-reviews/)

