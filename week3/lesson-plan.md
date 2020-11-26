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
  - Connecting to mysql using knex
    - Take a look at [this file](./homework-template/src/backend/database.js), dont go into too much detail. More this is how it is
    - Environment variables. Check [this repo](./homework-template/readme.md#environment-variables)
  - Executing queries
    - `select`, `create`. You could let the students figure out how `delete` and `update` works
  - [Code inspiration](#phonebook-database) especially focus on the promise and query part
- API
  - REST
  - CRUD (follow the structure found in [the homework template](./homework-template/src/backend) )
    - Router verb `GET`, `POST`, `DELETE`, `PUT`
      - Especially focus on post with `app.use(express.urlencoded({ extended: true }));` and `app.use(express.json());`
  - [Code inspiration](#phonebook-api)
- Postman
  - `POST`, `DELETE`, `PUT` requests
- [Exercise finish concerts api](#concerts-api)

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/preparation.md#flipped-classroom-videos)

## Code inspiration

### Phonebook database

- Go to the `teacher-live-coding` folder
- Copy the `.env.example` and rename the copied file to `.env`
- Run `npm install`
- Start the application by running  `nodemon ./src/backend/phonebook-database-queries.js`

Try and implement this functionality from the bottom while explaining.

### DB Query

```sql
CREATE SCHEMA `contacts`;

CREATE TABLE `contacts`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `phonenumber` VARCHAR(45) NULL,
  `created_date` DATETIME(6) NULL,
  PRIMARY KEY (`id`));
```

### Phonebook api

Start the application by running  `nodemon ./src/backend/create-an-api.js`.

The following two routes have been created, get help by the students to create some of the other routes.

| Url                 | Verb   | Functionality               | Example              |
| ------------------- | ------ | --------------------------- | -------------------- |
| `api/contacts/`     | GET    | Returns all contacts        | `GET api/contacts/`  |
| `api/contacts/`     | POST   | Adds a new contact          | `POST api/contacts/` |
| `api/contacts/{id}` | GET    | Returns contact by `id`     | `GET api/contacts/2` |
| `api/contacts/{id}` | PUT    | Updates the contact by `id` | `PUT api/contacts/2` |
| `api/contacts/{id}` | DELETE | Deletes the contact by `id` | `DELETE contacts/2`  |

## Exercises

### Concerts api

#### Creating the database

Create a `concerts` table in Mysql Workbench using the sql below

```sql
CREATE SCHEMA `concerts`;

CREATE TABLE `concerts`.`concerts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `band` VARCHAR(45) NULL,
  `venue` VARCHAR(45) NULL,
  `created_date` DATETIME(6) NULL,
  `performance_date` DATETIME(6) NULL,
  `price` INT(45) NULL,
  PRIMARY KEY (`id`));
```

#### Setting up the project

Lets create an api for concerts

Use the template found [here](./exercise-template)

Remember to copy the `.env.example` file, and rename the copied file to `.env`. In the `.env` file add the relevant host, database name, database user and pasword to your own local database. If you are unsure of these things then select your database in the Mysql Workbench. Now press `Database` -> `Manage Connections...`. Here you can see everything you need except the password. If you forgot that, reset it.  

Now you can `cd` into the project and run `npm install` and then `npm run dev`


#### Routing

Create the following routes

| Url                 | Verb   | Functionality               | Example              |
| ------------------- | ------ | --------------------------- | -------------------- |
| `api/concerts/`     | GET    | Returns all concerts        | `GET api/concerts/`  |
| `api/concerts/`     | POST   | Adds a new concert          | `POST api/concerts/` |
| `api/concerts/{id}` | GET    | Returns concert by `id`     | `GET api/concerts/2` |
| `api/concerts/{id}` | PUT    | Updates the concert by `id` | `PUT api/concerts/2` |
| `api/concerts/{id}` | DELETE | Deletes the concert by `id` | `DELETE concerts/2`  |

#### Query parameters

| Parameter      | Description                                                                                                       | Data type | Example                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------- |
| `maxPrice`     | Get concerts that has a price smaller than `maxPrice`                                                             | Number    | `/concerts?maxPrice=160`               |
| `title`        | Get concerts that partially match a title. `Metallic` will match the concert with the title `Metallica in Parken` | String    | `api/concerts?title=metallic`          |
| `createdAfter` | Get concerts that has been created after the date                                                                 | Date      | `api/concerts?createdAfter=2019-04-05` |
| `band`         | Get concerts with a specific band                                                                                 | String    | `api/concerts?band=metallica`          |

#### Use the api using postman

Using post man insert some concerts, get some concerts using query parameters, delete some concerts and update some concerts
