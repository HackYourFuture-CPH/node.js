# Week 1 homework

This homework will result in 2 pull requests:

- A pull request for the **Warmup** - in your regular hyf-homework repository
- A pull request for the **meal sharing endpoints** - in a newly created meal-sharing repository

### **meal-sharing repository**

Go to the [HYF project template repository](https://github.com/HackYourFuture-CPH/hyf-project-template) and click the "Use this template" button, then the "Create a new repository" option.  

In the field `Repository name` fill in "meal-sharing", and mark the repository as "Public" before clicking "Create repository".  

You should now have a new repository based on this template that you can clone to your local machine using:
```
git clone git@github.com:YOUR_GITHUB_USER_NAME/meal-sharing.git
```

#### Branch

For us mentors to easily give feedback on your code, create all functionality in a PR just like we do normally with homework, so:

- `git checkout -b nodejs-week1` <- in the meal-sharing repo you have cloned down.
- Make your code in the `nodejs-week1` branch and when you are done create a PR with the `nodejs-week1` branch.

<br/>

## **Warmup**

In your hyf-homework repository, `nodejs/week1` directory, create a file named `avg.js` which will calculate the average of the numbers provided as command line arguments.

But what are command line arguments? They are simple parameters that we can pass to command line programs, which can be either values or files. Here's an example of how we would invoke `avg.js` with 3 numbers:

```
$ node avg.js 13 7 4
8
```

Hint: [read](https://tecadmin.net/how-to-parse-command-line-arguments-in-nodejs/) to see how we can deal with command line arguments.

Optional improvements and considerations:

- What should happen if the provided arguments are not numbers (`node avg.js 1 two hello 4`)?
- What about if no arguments are provided (`node avg.js`)?

<br/>

## **Meal sharing endpoints**

You will begin working in the meal-sharing repository for this homework and continue throughout the whole Node.js module.  
Each week you will extend the endpoints, resulting in the backend setup for your future meal sharing website.

### **Setup**

Please follow the instructions in the [README.md](https://github.com/HackYourFuture-CPH/hyf-project-template/blob/main/README.md) in your meal-sharing repository to get your environment ready. You can ignore the "Deploying" section for now, you will come back to that in a few weeks.

#### **Database**

In the Database module, we worked on the meal sharing database. The diagram for that database can be found [here](https://dbdiagram.io/d/5f0460690425da461f045a29).

In this homework, we will **reuse the same database** schema and build an API server with the below routes.

#### **Getting started**

The routes you need to implement as part of this homework should go into `/api/src/index.js`. 
You can go ahead and define the desired routes like you normally would using the `app` variable:

```js
app.get("/my-route", (req, res) => {
  res.send("Hi friend");
});
```

### **Routes**

| Route           | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| `/future-meals` | Respond with all meals in the future (relative to the `when` datetime) |
| `/past-meals`   | Respond with all meals in the past (relative to the `when` datetime)   |
| `/all-meals`    | Respond with _all_ meals sorted by ID                                  |
| `/first-meal`   | Respond with the first meal (meaning with the minimum `id`)            |
| `/last-meal`    | Respond with the last meal (meaning with the maximum `id`)             |

### **Responses**

All the specified routes should respond with JSON with the available columns from the meal table.

**Multiple meals:** `/future-meals`, `/past-meals` and `/all-meals` are expected to respond with a collection of meals, meaning an array of objects.

**Single meal:** The other 2 routes, `/first-meal` and `/last-meal`, are expected to respond with a single meal, meaning an object.

**What if there are no meals?:** `/first-meal` and `/last-meal` should in that case return a 404 response with an explanation that there are no meals.
The other routes should in that case just return an empty array.

#### **Knex**

Our usage of Knex will get more advanced over the coming weeks but for now, we will focus on the simplified `knex.raw` function that can execute a raw SQL query. Example:

```js
const meals = await knex.raw("SELECT * FROM Meal");
console.log(meals);
```

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) to remember how to hand in the homework correctly!
