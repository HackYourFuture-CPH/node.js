# Lesson plan

- Create fullstack web application
  - Connecting the frontend to the api
    - Using `fetch` to `GET`, `POST`, `PUT` and `DELETE` data from api
  - Clientside routing
- Deploy to heroku

## Code inspiration

### Phonebook continuation

Using the api from last week create the frontend that uses the api.

Use [homework scaffold](https://github.com/HackYourFuture-CPH/node-fullstack-bolierplate) as template.

## Exercise

### Concerts frontend

Using the api from this exercise: https://github.com/HackYourFuture-CPH/node.js/blob/master/week3/lesson-plan.md#concerts-api, let the students build the frontend for using the concerts api. 

If they start from the beginning then use [homework scaffold](https://github.com/HackYourFuture-CPH/node-fullstack-bolierplate) as template.

Focus on making a simple endpoint in the api and then fetch that data in the frontend. When that flow of backend <-> frontend is working, then start building out the api. But get the frontend connected to the api first!

| Route            | Description                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`              | Add a page title and a sub title. Under that render all the concerts found in the database. Please add more to this page like footer, menu, logo, etc. |
| `/concerts`      | Render all concerts                                                                                                                                    |
| `/concerts/{id}` | Render the concert with the specific `id`.                                                                                                             |
| `/concerts/add`  | Render a form where new concerts can be created                                                                                                        |
