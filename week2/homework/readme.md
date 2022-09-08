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

You will continue working in the meal-sharing repository for this homework. This week you will build more endpoints, developing some [CRUD]("https://www.freecodecamp.org/news/crud-operations-explained/") operations for your future meal sharing website backend functionality. 


### **Routes**

#### **Meals**

| Route            | Operation   | Description         | 
| ---------------- | ------ | ------------------------ | 
| `/all-meals`     | GET     | Returns all meals (part of last week's HW)       | 
| `/meals`     | POST   | Adds a new meal to the database          | 
| `/meals/{id}` | GET    | Returns the meal by `id`     |
| `/meals/{id}` | PUT    | Updates the meal by `id` | 
| `/meals/{id}` | DELETE | Deletes the meal by `id` | 

##### **Requests**

All the `POST` or `PUT` endpoints will require a request `body` - the information that your database will be updated with. 

##### **Responses**

All the specified `GET` routes should respond with JSON with the available columns from the meal table.
Test out your routes and note what is the response of a `PUT` or `DELETE` route.

#### **Reservations**

Now that you have built the basic set of endpoints for **meals**, you can get some more practice and expand your app backend by creating the same for **reservations**:

| Route            | Operation   | Description         | 
| ---------------- | ------ | ------------------------ | 
| `/all-reservations`     | GET    | Returns all reservations  | 
| `/reservations`         | POST   | Adds a new reservation to the database          | 
| `/reservations/{id}` | GET    | Returns a reservation by `id`     |
| `/reservations/{id}` | PUT    | Updates the reservation by `id` | 
| `/reservations/{id}` | DELETE | Deletes the reservation by `id` | 


<br/>

#### **Knex**

Your usage of Knex should be getting a bit more advanced now. You will move from `knex.raw` on to different `knex` queries, for example:

```js

knex.select('id', 'description')
  .from('meals').then((data) => {
  console.log(data);
});
```

Check out the [knex cheat sheet]("https://devhints.io/knex")!

Remember, `knex.raw` returns a Promise so you can use the `async/await` syntax.