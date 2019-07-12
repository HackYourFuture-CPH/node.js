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
- Database interaction - No ORM!
  - Connecting to mysql
    - [Using connection](#Mysql-connection)
    - [Using pool](../week3/homework/src/server/database.js) no need to explain this! 
    - Environment variables. Check [this repo](../week3/homework/READMD.md#environment-variables)
  - Executing queries
    - Simple
    - Placeholder values `'SELECT * FROM books WHERE author = ?', ['David']`
  - [Code inspiration](#Phonebook-database)
- API
  - REST
  - CRUD (follow the structure found [the homework template](homework/src/server))
    - Router verb `GET`, `POST`, `DELETE`, `PUT`
      - Especially focus on post with `app.use(express.urlencoded({ extended: true }));` and `app.use(express.json());`
- Postman
  - `POST`, `DELETE`, `PUT` requests
- [Exercise](#Create-education-CRUD-api)

## Code inspiration

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
var db = require('./database');

db.query('SELECT ? FROM t_user',query, function(err, results, query) {
    if (err) throw err;
    if(!err) {
        indexPage.receiveResults(results);
    }
});
```

### Phonebook database
Create a phonebook database with contacts:

```sql
CREATE TABLE `phonebook`.`contacts` (
  `idcontacts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phonenumber` VARCHAR(45) NULL,
  PRIMARY KEY (`idcontacts`));
```

```js
var db = require('./database');

db.query('SELECT * FROM `contacts` WHERE `id` = ?', [1], function(err, results, query) {
    if (err) throw err;
    if(!err) {
        console.log(results);
    }
});

const contact = {
    name: 'benjamin',
    phonenumber: '12345678',
}
db.query('INSERT INTO posts SET ?', contact, function(err, results, query) {
    if (err) throw err;
    if(!err) {
        console.log(results);
    }
});

```

### Phonebook  api
Create the following api

| Url | Verb | Functionality | Example | 
| ---- | ----- | ---- | -------- |
| `api/contacts/` | GET | Returns all contacts | `GET api/contacts/` |
| `api/contacts/` | POST | Adds a new contact | `POST api/contacts/` |
| `api/contacts/{id}` | GET | Returns contact by `id` | `GET api/contacts/2` |
| `api/contacts/{id}` | PUT | Updates the contact by `id` | `PUT api/contacts/2` |
| `api/contacts/{id}` | DELETE | Deletes the contact by `id` | `DELETE contacts/2` |

## Exercises

### Phonebook queries

Create a `educations` table in mysql. It should have these columns: `specialization-title`, `started-date`, `graduated-date`, `university-title`.

Using node and the mysql lib:
- Insert three new educations
- Select all educations
- Select a specific education

### Create education CRUD api
Create a `educations` table in mysql. It should have these columns: `specialization-title`, `started-date`, `graduated-date`, `university-title`.

| Url | Verb | Functionality | Example | 
| ---- | ----- | ---- | -------- |
| `api/educations/` | GET | Returns all educations | `GET api/educations/` |
| `api/educations/` | POST | Adds a new education | `POST api/educations/` |
| `api/educations/{id}` | GET | Returns education by `id` | `GET api/educations/2` |
| `api/educations/{id}` | PUT | Updates the education by `id` | `PUT api/educations/2` |
| `api/educations/{id}` | DELETE | Deletes the education by `id` | `DELETE educations/2` |
