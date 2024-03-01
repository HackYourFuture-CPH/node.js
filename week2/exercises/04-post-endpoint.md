# API

## `POST /api/snippets`

Let's start with a simplified version of the `POST /api/snippets` route. First we add the POST route to `api/snippets.js`:

```js
// Contents of api/snippets.js

import express from 'express'
import knexInstance from '../database.js'

const router = express.Router()

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
})

// POST /api/snippets
router.post("/", async (request, response) => {
  // TODO
})

// TODO: GET /api/snippets/:id

export default router
```

---

To be able to insert a row into the `snippets` table, we need to have data in the `users` table. Create a user and note what the user ID is.

The POST request we want to make will look something like this:
```
POST /api/snippets
{
    "title": "Snippet title",
    "contents": "#hello",
    "is_private": false
}
```

But first, for Express to handle JSON requests, we need to add `app.use(express.json())` to `app.js`:

```js
// Contents of app.js

import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Class!')
})

// Rest of the file...
```

---

One remaining thing in the setup is to actually use the router we're exporting from `api/snippets.js`.
Inside `app.js`, below `app.use(express.json())`, add the following:

```js
import snippetsRouter from "./api/snippets.js";
app.use("/api/snippets", snippetsRouter)
```

---

**Task:** when we now make a request like

```
POST /api/snippets
{
    "title": "Snippet title",
    "contents": "#hello",
    "is_private": false
}
```

you should insert a new row into the `snippets` table with the data from the request body.

Hints:
- [Insert with Knex](https://knexjs.org/guide/query-builder.html#insert)
- When creating a snippet we also need to specify a `user_id`. For now, you can just pass in the `user_id` in the request body (alongside the other snippet data)
