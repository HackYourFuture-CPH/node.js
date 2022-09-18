# Lesson plan

```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

Repository for the in-class exercises templates: https://github.com/HackYourFuture-CPH/Nodejs-exercise-template

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---

- Database interaction
  - Connecting to mysql using knex
  - Executing queries
    - `select`, `create`. You could let the students figure out how `delete` and `update` works
  - [Code inspiration](#phonebook-database) especially focus on the promise and query part
- API
  - REST
  - CRUD
    - Router verb `GET`, `POST`, `DELETE`, `PUT`
      - Especially focus on post with `app.use(express.urlencoded({ extended: true }));` and `app.use(express.json());`
  - [Code inspiration](#phonebook-api)
- Postman
  - `POST`, `DELETE`, `PUT` requests
- [Exercise finish concerts api](#concerts-api)

## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/node.js/blob/main/week1/preparation.md#flipped-classroom-videos)

## Code inspiration

### Phonebook database

- Go to the `teacher-live-coding` [repo](https://github.com/HackYourFuture-CPH/teacher-live-coding), to the relevant folder
- Copy the `.env.example` and rename the copied file to `.env`
- Run `npm install`
- Start the application by running  `nodemon ./src/backend/phonebook-database-queries.js`

Try and implement this functionality from the bottom while explaining.

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


# Exercises

The template for in-class exercises is in this repository: https://github.com/HackYourFuture-CPH/Nodejs-exercise-template.

Every student should have it cloned locally and setup according to the instructions in the repository.
See https://github.com/HackYourFuture-CPH/Nodejs-exercise-template/tree/main/week3 for the instructions and requirements.



Thank you very much for teaching NodeJS. Please don't hesitate to give feedback by clicking [here](https://forms.gle/sAuVhsTmJ1qSmjgJ6) (teachers and teacher assistants). For homework reviewers, please access the survey [here](https://forms.gle/nVbX9ShusF2a5Aa87).
