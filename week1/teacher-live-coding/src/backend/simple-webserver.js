// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`
    <body>
        <h1>Main page</h1>
        <h2>Shows main content</h2>
    </body>
  `);
});

app.get("/about", (request, response) => {
  response.send(`
    <body>
        <h1>About</h1>
        <p>This is an about page</p>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
        <form>
            <label>name</label>
            <input placeholder="Write your name">
            <button>Contact me</button>
        </form>
    </body>
  `);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
