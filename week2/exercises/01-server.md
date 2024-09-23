# Server

Create a new, separate folder somewhere on your machine:

    $ mkdir nodejs-week2
    $ code nodejs-week2 # to open the folder in VS Code

You can also reuse some other folder. Main thing to watch out for is that the folder you decide to use should ideally be empty.

---

Initialize and install:

    $ npm init -y
    $ npm pkg set type="module"
    $ npm install express mysql2 knex
    $ echo node_modules/ >> .gitignore

Create a file named `app.js` and use the following as a starting point for this exercise:

```js
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Class!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
```

---

    $ npm install --save-dev nodemon
    $ npm pkg set scripts.dev="nodemon app.js"
    $ npm run dev

Go to http://localhost:3000 in your browser to verify that the server started.
