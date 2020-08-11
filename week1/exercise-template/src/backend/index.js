// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
  `);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
