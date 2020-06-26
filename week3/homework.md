# Homework

## So why this homework?

Working with APIs is such a core way for the client to communicate with the server. Creating an API abstracts away lots of complexity and makes it easy to create users, get users, changing users etc.

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

### Calculator

Let's again create a calculator. This time the calculator will support 4 features:

- Addition
- Subtraction
- Multiplication
- Division

All the numbers that should be inputted should be gotten from the query parameters: `calculator?firstParam=1&secondParam=2...`

This exercise is made to show that you can receive data from the request in multiple ways!

#### Getting data through query parameters using `GET`

- Going to `/calculator/multiply?firstParam=1&secondParam=2` should respond with 2.
- Going to `/calculator/multiply?firstParam=1&secondParam=2&secondParam=4` should respond with 8.
- Going to `/calculator/add?firstParam=1&secondParam=2&secondParam=4` should respond with 7.

There can be an infinite number of query parameters!

#### Getting data through the request body using `POST`

You can only do the post request through a form unsing html or using postman. For this homework, use postman with the following setup:

![calculator post screenshot postman](./assets/calculator-post.PNG)

- Going to `/calculator/multiply` with the following key values: firstParam=1, secondParam=2. Should respond with 2.
- Going to `/calculator/division` with the following key values: firstParam=1, secondParam=2. Should respond with 0.5.


## Lets build a real functioning site :)

We will be building a meal sharing website over 2 weeks of homework. First we will be building the backend rest api. Then next week we will connect the frontend to the backend and deploy the website on Heroku.

To visualize what we will be building, take a look at: https://www.mealsharing.com/

### Getting started with the api

To get started a template has been set up, so that you can focus on developing what matters 💪💻

Copy the files from [the template](homework-template) into your `hyf-homework/node/week3` folder. You can do that by cloning the [nodejs repo](https://github.com/HackYourFuture-CPH/node.js.git) down locally and then copy the files into the `hyf-homework/node/week3` folder.

Read the [readme file](homework-template/readme.md) to get started with the project. 

There has already been set one route up for you already, so you can get a sense for the structure. Take a look at `src/backend/index.js` and understand what the different parts does!

For the `POST` request remember the postman seetings you used in the calculator warmup homework

### Its api time

Create the following rest endpoints:

#### Meal

| Url              | Verb   | Functionality            | Example           |
| ---------------- | ------ | ------------------------ | ----------------- |
| `api/meals/`     | GET    | Returns all meals        | `GET api/meals/`  |
| `api/meals/`     | POST   | Adds a new meal          | `POST api/meals/` |
| `api/meals/{id}` | GET    | Returns meal by `id`     | `GET api/meals/2` |
| `api/meals/{id}` | PUT    | Updates the meal by `id` | `PUT api/meals/2` |
| `api/meals/{id}` | DELETE | Deletes the meal by `id` | `DELETE meals/2`  |

##### `GET api/meals/` query parameters

| Parameter               | Description                                                                                                    | Data type | Example                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------- |
| `maxPrice`              | Get meals that has a price smaller than `maxPrice`                                                             | Number    | `api/meals?maxPrice=90`                                         |
| `availableReservations` | Get meals that still has available reservations                                                                | Boolean   | `api/meals?availableReservations=true`                          |
| `title`                 | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String    | `api/meals?title=Indian%20platter` (`%20` is a space character) |
| `createdAfter`          | Get meals that has been created after the date                                                                 | Date      | `api/meals?createdAfter=2019-04-05`                             |
| `limit`                 | Only specific number of meals                                                                                  | Number    | `api/meals?limit=4`                                             |

#### Reservation

| Url                     | Verb   | Functionality                   | Example                     |
| ----------------------- | ------ | ------------------------------- | --------------------------- |
| `api/reservations/`     | GET    | Returns all reservations        | `GET api/reservations/`     |
| `api/reservations/`     | POST   | Adds a new reservation          | `POST api/reservations/`    |
| `api/reservations/{id}` | GET    | Returns reservation by `id`     | `GET api/reservations/2`    |
| `api/reservations/{id}` | PUT    | Updates the reservation by `id` | `PUT api/reservations/2`    |
| `api/reservations/{id}` | DELETE | Deletes the reservation by `id` | `DELETE api/reservations/2` |

#### Review _optional_

| Url                | Verb   | Functionality              | Example                |
| ------------------ | ------ | -------------------------- | ---------------------- |
| `api/reviews/`     | GET    | Returns all reviews        | `GET api/reviews/`     |
| `api/reviews/`     | POST   | Adds a new review          | `POST api/reviews/`    |
| `api/reviews/{id}` | GET    | Returns review by `id`     | `GET api/reviews/2`    |
| `api/reviews/{id}` | PUT    | Updates the review by `id` | `PUT api/reviews/2`    |
| `api/reviews/{id}` | DELETE | Deletes the review by `id` | `DELETE api/reviews/2` |

#### Using the api

Using Postman use the api to create some `meals`, `reservations` and possibly `reviews`. Use `delete`, `put`, `get` and `post`.

Use the query parameters in the `GET api/meals/`.

## Hand in Homework:

Watch [this video](https://www.youtube.com/watch?v=feyBVDhFQuk) for a more detailed go-through of how to hand in homework!

- Create a new branch called `node.js/week3`
- Add all your changes to this branch in the `node.js/week3` folder.
- Go through the [Homework checklist](#homework-checklist)
- Create a pull request using the `node.js/week3` branch
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
