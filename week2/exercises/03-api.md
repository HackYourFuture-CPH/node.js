# API

The goal of the exercise is to implement the following routes:

- `POST /api/snippets` to create a snippet for the authenticated user
- `GET /api/snippets` to get a list of snippets
- `GET /api/snippets/:id` to get a single snippet

We will create the snippet routes in a different file, `api/snippets.js`, which will export an [Express Router](http://expressjs.com/en/4x/api.html#router).

That will look something like this:
```js
// Contents of api/snippets.js

const express = require("express")
const router = express.Router()

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
})

// TODO: POST /api/snippets
// TODO: GET /api/snippets/:id

module.exports = router
```

We will also have the database connection in a separate file:
```js
// Contents of database.js

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week2",
  },
})

module.exports = knex
```

To get everything hooked up, we need some additional work:
- `app.use("/api/snippets", require("./api/snippets"))` in `app.js`
- `require("../database")` in `/api/snippets.js` so we can connect to database
- `app.use(express.json())` in `app.js` so we can accept JSON requests

---

## Authentication

The token is used to authenticate certain requests by setting the `Authorization` header, like so:

`Authorization: token xyz`

The "xyz" part is the token value that you can look up and find in the `users.token` column.

## Routes

See below for details about authentication and the response expectations.

### `POST /api/snippets`

**Authenticated access:** if the user has provided a valid token, we go ahead and insert a new row into the `snippets` table. With one exception: we should **deny** the request if the user making the request is not confirmed.

Ideally you should try to validate the request and make sure it has
- a non-empty `title`
- a non-empty `contents`
- `is_private` is optional

**Invalid authentication:** if the user has provided an invalid token or no token at all, we respond with a 403 Forbidden:

```json
{
    "error": "Not authorized"
}
```

### `GET /api/snippets`

**Anonymous access:** if there is no `Authorization` header, this should return all non-private snippets together with some information about the user. Example response:

```json
[
    {
        "id": 1,
        "created_at": "...",
        "title": "avg.js",
        "contents": "console.log('1')",
        "is_private": false,
        "user": {
            "id": 1,
            "first_name": "Orhan",
            "last_name": "Toy"
        }
    }
]
```

**Authenticated access:** if the user has provided a valid token, we return _all_ snippets belonging to that user. Example response:

```json
[
    {
        "id": 1,
        "created_at": "...",
        "title": "avg.js",
        "contents": "console.log('1')",
        "is_private": true,
        "user": {
            "id": 1,
            "first_name": "Orhan",
            "last_name": "Toy",
            "email": "orhantoy@example.com"
        }
    }
]
```

**Invalid authentication:** if the user has provided an invalid token, we respond with a 403 Forbidden response:

```json
{
    "error": "Not authorized"
}
```

### `GET /api/snippets/:id`

This endpoint should just return the snippet with the given ID. The only difference between anonymous and authenticated access is that for authenticated access we should also include the user's email in the response.

**Anonymous access:**

```json
{
    "id": 1,
    "created_at": "...",
    "title": "avg.js",
    "contents": "console.log('1')",
    "is_private": true,
    "user": {
        "id": 1,
        "first_name": "Orhan",
        "last_name": "Toy",
    }
}
```

**Authenticated access:**

```json
{
    "id": 1,
    "created_at": "...",
    "title": "avg.js",
    "contents": "console.log('1')",
    "is_private": true,
    "user": {
        "id": 1,
        "first_name": "Orhan",
        "last_name": "Toy",
        "email": "orhantoy@example.com"
    }
}
```

**Not found:** we respond with a 404 if the snippet with the given ID cannot be found.

---

It is left as an optional exercise to add the following routes:
- `PUT /api/snippets/:id` to update a snippet
- `DELETE /api/snippets/:id` to delete a snippet