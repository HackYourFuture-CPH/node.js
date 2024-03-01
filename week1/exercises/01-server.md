# Server

Create a new, separate folder somewhere on your machine:

    $ mkdir nodejs-week1
    $ code nodejs-week1 # to open the folder in VS Code

You can also reuse some other folder. Main thing to watch out for is that the folder you decide to use should ideally be empty.

---

Initialize and install:

    $ npm init -y
    $ npm install express

Make sure you see a `package.json`.
Make sure you have `"type": "module"` in your `package.json`.
Do you see `express` somewhere in `package.json`?
Also make sure you see the `node_modules` folder.

---

Create a file called `app.js`:

```js
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Class!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
```

Start your server!

    $ node app.js

Go to http://localhost:3000 in your browser to verify that everything is working as expected.

Press Ctrl-C to shut down the server.

---

**Task:**

- Add a `/info` route to `app.js`.
- It should respond with a **JSON object** containing the Node.js version; something like this: `{ "nodeVersion": "v17.3.0" }`
- You can get the Node.js version from `process.version`

To test that the response is indeed JSON, you can use Postman or cURL:

    $ curl -i localhost:3000/info

The response `Content-Type` header should look like this: `Content-Type: application/json; charset=utf-8`.
