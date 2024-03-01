# Week 2 homework

This homework, just like the previous week, will result in 2 pull requests:

- A pull request for the **Warmup** - in your regular hyf-homework repository
- A pull request for the additional **Meal-sharing endpoints** - in the meal-sharing repository

In both repositories, create a `nodejs-week2` branch from `main` to work on the homework (`git checkout -b nodejs-week2` )

<br/>

## **Warmup**

For the warmup you're going to build a search engine. The search engine will have 3 routes:

- `GET /search`
- `GET /documents/:id`
- `POST /search`

The purpose of the search engine is to search and find documents from a file called `documents.json`. Example contents:

```
[
    {
        "id": 1,
        "name": "Used Apple Airpods",
        "price": "50",
        "description": "Battery life is not great"
    },
    {
        "id": 2,
        "type": "doc",
        "value": "hello world"
    }
]
```

### Setup

Go to `nodejs/week2` in your `hyf-homework` repo:

    $ npm init -y
    $ npm i express
    $ npm i --save-dev nodemon
    $ npm set-script dev "nodemon app.js"

Make sure you have `"type": "module"` in your `package.json`.

You should also ensure that the `node_modules/` folder is ignored by Git:

    $ echo node_modules/ >> .gitignore

Create `app.js` and as a starting point you can use the following code:

```js
import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

You also need to create a `documents.json` file.

### `GET /search`

This endpoint will accept a query parameter called `q`, short for _query_. A bit confusing to have a query parameter called q(uery) but hang in there 💪

- If `q` is not provided, the endpoint should return all documents.
- If `q` is provided, the endpoint should return the documents with some field that matches the value of `q`.

Example response if we call `GET /search?q=hello`:

```
[
    {
        "id": 2,
        "type": "doc",
        "value": "hello world"
    }
]
```

### `GET /documents/:id`

This endpoint is simple: find and respond with the document matching the `id` parameter. If there is no such document, respond with a 404 Not Found.
You can assume that the document IDs are unique so there's no need to handle duplicates.

### `POST /search`

This endpoint is sort of like `GET /search`.

It also accepts a query parameter called `q` and it should behave just like `GET /search`.
But it also accepts a field called `fields` in the JSON request body. `fields` is an object where it will be possible to filter by specific fields.

Example request:

```
POST /search
{
    "fields": {
        "price": "50"
    }
}
```

Response to the example request:

```
[
    {
        "id": 1,
        "name": "Used Apple Airpods",
        "price": "50",
        "description": "Battery life is not great"
    }
]
```

If both `q` (query parameter) and `fields` (in body) are provided, we should respond with status 400 Bad Request and explain that both can't be provided.

<br/>

## **Meal sharing endpoints**

You will continue working in the meal-sharing repository for this homework. This week you will build more endpoints, developing some [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) operations for your future meal sharing website backend functionality.

### **Routes**

In last week's homework you were supposed to add routes in `src/backend/app.js`. You can just leave them there as they are.

For this week's homework, we will add two categories of routes: meals and reservations.

- The routes for meals will go into `src/backend/api/meals.js`, which should already exist in your repo, and
- the reservation routes will live in `src/backend/api/reservations.js`, a new file you need to create.

This means that we will end up having 2 Routers: a meals router and a reservations router. You can read more about Express Routers [here](http://expressjs.com/en/4x/api.html#router).

#### **Meals**

| Route            | HTTP method | Description                     |
| ---------------- | ----------- | ------------------------------- |
| `/api/meals`     | GET         | Returns all meals               |
| `/api/meals`     | POST        | Adds a new meal to the database |
| `/api/meals/:id` | GET         | Returns the meal by `id`        |
| `/api/meals/:id` | PUT         | Updates the meal by `id`        |
| `/api/meals/:id` | DELETE      | Deletes the meal by `id`        |

#### **Reservations**

Now that you have built the basic set of endpoints for **meals**, you can get some more practice and expand your app backend by creating the same for **reservations**:

| Route                   | HTTP method | Description                            |
| ----------------------- | ----------- | -------------------------------------- |
| `/api/reservations`     | GET         | Returns all reservations               |
| `/api/reservations`     | POST        | Adds a new reservation to the database |
| `/api/reservations/:id` | GET         | Returns a reservation by `id`          |
| `/api/reservations/:id` | PUT         | Updates the reservation by `id`        |
| `/api/reservations/:id` | DELETE      | Deletes the reservation by `id`        |

##### **Requests**

All the `POST` or `PUT` endpoints will require a request body - the information that your database will be updated with.

##### **Responses**

All the specified `GET` routes should respond with JSON with the available columns from the associated tables.

The `GET`, `PUT` and `DELETE` routes that include an `/:id` in the path should make sure to handle the case when the row with that ID does not exist.
Think about what special HTTP status code would be appropriate for that scenario.

You are free to decide on the response for a successful `POST`, `PUT` and `DELETE` request. Some ideas:

- Respond with an acknowledgement message: `{ "message": "Deleted meal" }`
- Respond with data from the row itself like with `GET`

And lastly, if the `POST` request is successful, the response status code should be 201 Created, as that would indicate something was _created_.

<br/>

#### **Knex**

Your usage of Knex should be getting a bit more advanced now. You will move from `knex.raw` on to different `knex` function, for example:

- `.select`, `.from`, `.where`
- `.insert`
- `.update`
- `.del` (for deletion)

Check out the [Knex cheatsheet](https://devhints.io/knex)!

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
