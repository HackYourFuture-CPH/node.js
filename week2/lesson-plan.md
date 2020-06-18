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
    - Params `users/:id`
    - Query parameters `users?limit=5`
    - [Exercise](#portfolio)
    - Route order
      - [Code inspiration](#route-order)
    - Logging and debugging
      - Focus on the students understanding **the order** in which things are executed
 <!---
  - Middleware
    - `next` method
    - Modifying `request` and `response`
    - https://fullstackopen.com/en/part3/node_js_and_express#express
    - [Code inspiration](#middleware)
    - [Exercise](#is-chrome-browser)
-->
- Postman
  - Create collection and save queries
  - Sending get requests requests
    - Query parameters
    - Parameters

## Code inspiration

### Route order

```js
// First match is deciding
app.get("/data", (req, res) => {
  res.send({ data: 1 });
});

app.get("/data", (req, res) => {
  res.send({ data: 2 });
});
```
<!--
### Middleware

```js
app.use((req, res, next) => {
  console.log(req.headers["accept-language"]);
  const isFromDenmark = req.headers["accept-language"].includes("da");
  console.log(isFromDenmark);
  req.isFromDenmark = isFromDenmark;

  next();
});
```
-->
## Exercises

### Movies exercise, the back-end version


Remember the movies dataset from Javascript 2? (see [this](https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week2/homework/movies.js) )

Let's create a few routes for common queries

| `/`           | Return all titles unfiltered |
| `/year`       | Return titles and years of all movies from the specified year  |
| `?beginYear=<year1>&endYear=<year2>` | Returns titles and years of all movies with year between `beginYear` and `endYear`  |
| `?beginYear=<year1>&endYear=<year2>&minRating=<minRating>` | Returns titles and years of all movies with year between `beginYear` and `endYear` that are also of rating `minRating` or better |
Finally do some error handling for cases where `beginYear`, `endYear` or `minRating` are not specified. 
