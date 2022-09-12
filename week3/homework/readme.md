# Week 3 homework

Once again, you will deliver 2 pull requests:
* A pull request for the **Warmup** - in your regular hyf-homework repository
* A pull request for the additional **Meal-sharing endpoints** - in the meal-sharing repository

In both repositories, create a `nodejs-week3` branch from `main` to work on the homework (`git checkout -b nodejs-week3` ).

<br/>

## **Warmup**


### Setup


<br/>

## **Meal sharing endpoints**

You will continue working in the meal-sharing repository for this homework. This week, you will add query parameters, that will allow you to **sort** and **filter** the information retrieved from the database.
<br/>You should have the basic [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) endpoints for meals and reservations as the result of last week's homework. If you don't have that setup yet, please get back to last week and finish it first - it is an important basis for the backend functionality of your future meal sharing website.


### **Routes**

#### **Meals**

Work with your `GET api/meals` route to add the query parameters. <br/>Make sure that the query parameters can be combined, f.x. `?limit=4&maxPrice=90`

| Parameter     | <nobr>Data type<nobr/>| Description           | Example |
| ---------------- | ---------------- | ------------------------------------------------ | ---------------- | 
|`maxPrice`| Number|Returns all meals that are cheaper than `maxPrice`.| <nobr>`api/meals?maxPrice=90`<nobr/>|
|`availableReservations`|Boolean|Returns all meals that still have available spots left. *|<nobr>`api/meals?availableReservations=true`<nobr/>|
|`title`| String | Returns all meals that partially match the given title. `Rød grød` will match the meal with the title `Rød grød med fløde`. | <nobr>`api/meals?title=Indian%20platter`<nobr/>|
|`dateAfter`|Date|Returns all meals where the date for `when` is after the given date .|`api/meals?dateAfter=2022-10-01`|
|`dateBefore`|Date|Returns all meals where the date for `when` is before the given date .|`api/meals?dateBefore=2022-08-08`|
|`limit`|Number|Returns the given number of meals.|`api/meals?limit=7`|
|`sort_key`|String|Returns all meals sorted by the given key. Allows `when`, `max_reservations` and `price` as keys. Default sorting order = asc. |`api/meals?sort_key=price`|
|`sort_dir`|String|Returns all meals sorted in the given direction. Only works combined with the `sort_key` and allows `asc` or `desc`.| <nobr>`api/meals?sort_key=price&sort_dir=desc`<nobr/>|
|

\* `availableReservations` requires you to work with several database tables at once. Try practicing the right query in MySQL Workbench first (you might have it from Database week3 homework) and once you have it working, build it with `knex`. 


<br/>

#### **Reviews** (OPTIONAL)

By now, you have the basic set of endpoints for **meals** and **reservations** and even a collection of query parameters for **meals**. To practice a bit more and finalize the basic backend functionality, create the set of routes for **reviews**:

| Route            | HTTP method   | Description         |
| ---------------- | ------ | ------------------------ |
| `/api/reviews`     | GET    | Returns all reviews  |
| `/api/reviews/:meal_id` | GET    | Returns all reviews by `meal_id` |
| `/api/reviews`         | POST   | Adds a new review to the database |
| `/api/reviews/:id` | GET    | Returns a review by `id` |
| `/api/reviews/:id` | PUT    | Updates the review by `id` |
| `/api/reviews/:id` | DELETE | Deletes the review by `id` |

<br/>

#### **Knex**

Remember to check out the [Knex cheatsheet](https://devhints.io/knex)!
