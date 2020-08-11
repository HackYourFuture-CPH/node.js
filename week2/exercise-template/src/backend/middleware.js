// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const moviesRouter = require("./movies-router");

// use app.use to register a middleware

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
