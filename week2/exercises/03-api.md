# API

The end goal of the exercise is to implement the following routes:

- `POST /api/snippets` to create a snippet
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

At this point verify that your project structure looks like this:
- api
  - snippets.js
- app.js
- database.js
- package.json
