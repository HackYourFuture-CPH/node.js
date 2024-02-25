# Database

Now we want to connect to a MySQL database from Node.js.

First we need to install some packages:

    $ npm install mysql2 knex

---

Create a new MySQL database named `hyf_node_week1`.
In `app.js` we can now establish the database connection.
Add the following to the top of `app.js`:

```js
import knex from 'knex'
const knexInstance = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'hyf_node_week1'
  }
})

// The code from before is down here
// [...]
```

---

Using `knex.raw` we can now execute SQL queries.
Let's extend the `/info` route to also respond with the MySQL version: `{ "nodeVersion":"v17.3.0", "mysqlVersion":"8.0.30" }`

```js
app.get('/info', async (req, res) => {
  const [rows] = await knexInstance.raw('SELECT VERSION()')

  res.json({
    nodeVersion: process.version,
    mysqlVersion: rows[0]['VERSION()']
  })
})
```
