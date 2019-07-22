# Lesson plan

- Create fullstack web application
  - Connecting the frontend to the api
    - Using `fetch` to `GET`, `POST`, `PUT` and `DELETE` data from api
  - Webpack on a conceptual level
  - Clientside routing
- Deploy to heroku

## Code inspiration

### Phonebook continuation

Using the api from last week create the frontend that uses the api. 

Use [homework scaffold](homework) as template. Inside the `src` folder there is only `client` copy the `server` folder from the api you created last week or use [this `server` folder](../week3/homework/src)

## Exercise

### Concerts frontend
Let the students build the frontend for using the concerts api. 

| Route | Description |
| ---- | ----- |
| `/` | Add a page title and a sub title. Under that render all the concerts found in the database. Please add more to this page like footer, menu, logo, etc. |
| `/concerts` | Render all concerts |
| `/concerts/{id}` | Render the concert with the specific `id`. |
| `/concerts/add` | Render a form where new concerts can be created |
