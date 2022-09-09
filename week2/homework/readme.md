# Week 2 homework

This homework, just like the previous week, will result in 2 pull requests:
* A pull request for the **Warmup** - in your regular hyf-homework repository
* A pull request for the additional **Meal-sharing endpoints** - in the meal-sharing repository

In both repositories, create a `nodejs-week2` branch from `main` to work on the homework (`git checkout -b nodejs-week2` )

<br/>

## **Warmup**

(...)

<br/>

## **Meal sharing endpoints**

You will continue working in the meal-sharing repository for this homework. This week you will build more endpoints, developing some [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) operations for your future meal sharing website backend functionality.


### **Routes**

#### **Meals**

| Route            | Operation   | Description         |
| ---------------- | ------ | ------------------------ |
| `/api/meals`     | GET     | Returns all meals |
| `/api/meals`     | POST   | Adds a new meal to the database |
| `/api/meals/:id` | GET    | Returns the meal by `id` |
| `/api/meals/:id` | PUT    | Updates the meal by `id` |
| `/api/meals/:id` | DELETE | Deletes the meal by `id` |

#### **Reservations**

Now that you have built the basic set of endpoints for **meals**, you can get some more practice and expand your app backend by creating the same for **reservations**:

| Route            | Operation   | Description         |
| ---------------- | ------ | ------------------------ |
| `/api/reservations`     | GET    | Returns all reservations  |
| `/api/reservations`         | POST   | Adds a new reservation to the database |
| `/api/reservations/:id` | GET    | Returns a reservation by `id` |
| `/api/reservations/:id` | PUT    | Updates the reservation by `id` |
| `/api/reservations/:id` | DELETE | Deletes the reservation by `id` |


##### **Requests**

All the `POST` or `PUT` endpoints will require a request body - the information that your database will be updated with.

##### **Responses**

All the specified `GET` routes should respond with JSON with the available columns from the associated tables.

The `GET`, `PUT` and `DELETE` routes that include an `/:id` in the path should make sure to handle the case when the row with that ID does not exist.
Think about what special HTTP status code would be appropriate for that scenario.

You are free to decide on the response for a successful `POST`, `PUT` and `DELETE` request. Some ideas:
- Respond with an acknowledgement message: `{ "message": "Deleted meal" }`
- Respond with data from the row itself like with `GET` (only for `PUT`)

And lastly, if the `POST` request is successful, the response status code should be 201 Created, as that would indicate something was _created_.

<br/>

#### **Knex**

Your usage of Knex should be getting a bit more advanced now. You will move from `knex.raw` on to different `knex` function, for example:

- `.select`, `.from`, `.where`
- `.insert`
- `.update`
- `.del` (for deletion)

Check out the [Knex cheatsheet](https://devhints.io/knex)!
