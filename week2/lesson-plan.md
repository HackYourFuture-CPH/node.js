# Lesson plan

```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---

- Express
  - What is express
  - Routing (focus on `get` requests)
    - `app.use`
    - `app.get`
    - [Live coding](#app-get-vs-app-use)
    - Params `users/:id`
    - Query parameters `users?limit=5`
    - [Live coding](#query-parameters-vs-parameters)
    - [Exercise](#movies)
    - Route order
      - [Live coding](#route-order)
    - Logging and debugging
      - Focus on the students understanding **the order** in which things are executed
  - Middleware
    - `next` method
    - Modifying `request` and `response`
    - https://fullstackopen.com/en/part3/node_js_and_express#express
    - [Live coding](#middleware)
    - [Exercise](#is-chrome-browser)
- Postman
  - Create collection and save queries
  - Sending get requests requests
    - Query parameters
    - Parameters

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/preparation.md#flipped-classroom-videos)

## Code inspiration

### app get vs app use

Go to the `teacher-live-coding` folder, `npm install` and run using `nodemon ./src/backend/app-use-vs-app-get.js`. Try and implement this functionality from the bottom while explaining.

### Query parameters vs parameters

Run `nodemon ./src/backend/query-parameters-vs-parameters.js`. Try and implement this functionality from the bottom while explaining.

### Route order

Run `nodemon ./src/backend/route-order.js`. Try and implement this functionality from the bottom while explaining.

### Middleware

Run using `nodemon ./src/backend/middleware.js`. Try and implement this functionality from the bottom while explaining.


## Exercises

### Movies

We will be making an api for getting movies 🎞📽🎥🎦🎬

Using the template found [here](./exercise-template). Remember to clone it locally, open a terminal in the folder and run `npm install`. Now how can you start the server??

Try and begin by getting an overview of the project. What file is called when the server is started. What routes is that setting up and so on

Check the [movies router file](./exercise-template/src/backend/api/movies-router.js). This is where you will be creating your routes. The `movies/` route has even been created for you (now you just need to return the movies)

|Route|Requirement|
|---|---|
| `movies/` | Return all movies |
| `movies/year`       | Return all movies from the specified year  |
| `movies?beginYear=<year1>&endYear=<year2>` | Returns all movies with year between `beginYear` and `endYear`  |
| `movies?beginYear=<year1>&endYear=<year2>&minRating=<minRating>` | Returns all movies with year between `beginYear` and `endYear` that are also of rating `minRating` or better |

Finally do some error handling for cases where `beginYear`, `endYear` or `minRating` are not specified

### Is chrome browser middleware

Create a middleware function that creates a key on the `request` object called `isChromeBrowser`. If the browser accessing the website is a chrome browser it should be assigned to `true`, otherwise `false`.

You can add this middleware to the [app.js](./exercise-template/src/backend/app.js)

Remember to test that the middleware works!
