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
  - Middleware
    - `next` method
    - Modifying `request` and `response`
    - https://fullstackopen.com/en/part3/node_js_and_express#express
    - [Code inspiration](#middleware)
    - [Exercise](#is-chrome-browser)
  - Logging and debugging
    - Focus on the students understanding **the order** in which things are executed
- Database interaction - No ORM!
  - Connecting to mysql
    - [Using connection](mysql#connection)
    - [Using pool](../week3/homework/src/server/database.js) no need to explain this! 
    - Environment variables. Check [this repo](../week3/homework/READMD.md#environment-variables)
  - Executing queries
    - Simple
    - Placeholder values `'SELECT * FROM `books` WHERE `author` = ?', ['David']`
  - [Exercise](#education-database)
  

## Code inspiration

### Route order

```js
// First match is deciding
app.get("/data",  (req, res) => {
  res.send({data:1});
});

app.get("/data",  (req, res) => {
  res.send({data:2});
});
```

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

### Mysql connection
```js
var mysql = require('mysql');
var settings = require('./settings.json');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();`
```

```js
var db = require('./db');

db.query('SELECT ? FROM t_user',query, function(err, results, query) {
    if (err) throw err;
    if(!err) {
        indexPage.receiveResults(results);
    }
});
```

## Exercises

### Portfolio
Start building your portfolio with these routes:

| Route | Description |
| ---- | ----- |
| `/` | Add a title and sub title. Write a couple lines about yourself |
| `/contact` | Add social media links and your email |
| `/educations` | Add a list of your educations |
| `/skills` | Add a list of your skills |

Respond with html! Add some query parameters and parameters and print them out on the page. Here is an example:

`/educations?is-university=true&attended-before=2015`

or 

`/educations/copenhagen-university`

### Is chrome browser
Implement a middleware function that adds a key on the `req` object that indicates if the user is using a chrome browser. 

Use the `User-Agent` header. 


### Education database

Create a `educations` table in mysql. It should have these columns: `specialization-title`, `started-date`, `graduated-date`, `university-title`.

| Route | Description |
| ---- | ----- |
| `/addNewEducation` | Adds a new education to the `educations` table. Should just be the exact same one each time |
| `/educations/{id}` | Should return the json for the education with corresponding `id` |
| `/educations` | Should return the json for all educations |
