# Lesson plan

- Create fullstack web application
  - Connecting the frontend to the api
    - Using `fetch` to `GET`, `POST`, `PUT` and `DELETE` data from api
  - Clientside routing
  - [Live coding](#concerts-frontend)
- Deploy to heroku

## Code inspiration

### Phonebook frontend

- Go to the `teacher-live-coding` folder
- Copy the `.env.example` and rename the copied file to `.env`
- Run `npm install`
- Start the application by running  `npm run dev`

Go to http://localhost:3000/contacts to see an example of fetching from the backend and rendering those contacts!

Try and show how to insert a new contact using the frontend:
- making the form in html
- on `formSubmit`, get the data from the `form`
- `POST` this contact data using `fetch` to http://localhost:3000/api/contacts

## Exercise

### Concerts frontend



Focus on making a simple endpoint in the api and then fetch that data in the frontend. When that flow of backend <-> frontend is working, then start building out the api. But get the frontend connected to the api first!

| Route | Description |
| -------- | ----------- |
| `/` | Add a page title and a sub title. Under that render all the concerts found in the database. Please add more to this page like footer, menu, logo, etc. |
| `/concerts`| Render all concerts |
| `/concerts/{id}` | Render the concert with the specific `id`|
| `/concerts/add`  | Render a form where new concerts can be created |

Come up with more ideas if you get this far!