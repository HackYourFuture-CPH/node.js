# Homework

## So why this homework?
Working with api's is such a core way for the client to communicate with the server. Creating an api abstracts away lots of complexity and makes it easy to create users, get users, changing users etc. 

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

*Create a warmup exercise*

## Getting started with the api
In the [homework folder](homework) there is a template already setup, use that for creating your api! Copy the code for the template from the [homework folder](homework) into the `hyf-homework/node/week3` folder. Make sure `node_modules` is in `.gitignore` for the `hyf-homework` repo. We dont want to commit `node_modules`!

Read the [readme file](homework/README.md) to get started with the project. 

There has already been set one route up for you already, so you can get a sense for the structure. Take a look at `src/server/index.js` and understand what the different parts does! 

Add a description of what `src/server/index.js` is doing line by line to your homework! 

## Its api time
Create the following rest endpoints:

### Meal

| Url | Verb | Functionality | Example | 
| ---- | ----- | ---- | -------- |
| `api/meals/` | GET | Returns all meals | `GET api/meals/` |
| `api/meals/` | POST | Adds a new meal | `POST api/meals/` |
| `api/meals/{id}` | GET | Returns meal by `id` | `GET api/meals/2` |
| `api/meals/{id}` | PUT | Updates the meal by `id` | `PUT api/meals/2` |
| `api/meals/{id}` | DELETE | Deletes the meal by `id` | `DELETE meals/2` |


#### `GET api/meals/` query parameters
| Parameter | Description | Data type | Example | 
| ---- | ----- | ---- | -------- |
| `maxPrice` | Get meals that has a price smaller than `maxPrice` | Number | `/meals?maxPrice=90` |
| `availableReservations` | Get meals that still has available reservations | Boolean | `api/meals?availableReservations=true` |
| `title` | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String | `api/meals?title="Indian platter"` |
| `createdAfter` | Get meals that has been created after the date | Date | `api/meals?createdAfter=2019-04-05` |
| `limit` | Only specific number of meals | Date | `api/meals?limit=4` |


### Reservation

| Url | Verb | Functionality | Example |
| ---- | ----- | ---- | -------- |
| `api/reservations/` | GET | Returns all reservations | `GET api/reservations/` |
| `api/reservations/` | POST | Adds a new reservation | `POST api/reservations/` |
| `api/reservations/{id}` | GET | Returns reservation by `id` | `GET api/reservations/2` |
| `api/reservations/{id}` | PUT | Updates the reservation by `id` | `PUT api/reservations/2` |
| `api/reservations/{id}` | DELETE | Deletes the reservation by `id` | `DELETE api/reservations/2` |

### Review *optional*

| Url | Verb | Functionality | Example |
| ---- | ----- | ---- | -------- |
| `api/reviews/` | GET | Returns all reviews | `GET api/reviews/` |
| `api/reviews/` | POST | Adds a new review | `POST api/reviews/` |
| `api/reviews/{id}` | GET | Returns review by `id` | `GET api/reviews/2` |
| `api/reviews/{id}` | PUT | Updates the review by `id` | `PUT api/reviews/2` |
| `api/reviews/{id}` | DELETE | Deletes the review by `id` | `DELETE api/reviews/2` |

### Using the api
Using Postman use the api to create some `meals`, `reservations` and possibly `reviews`. Use `delete`, `put`, `get` and `post`.

Use the query parameters in the `GET api/meals/`. 
