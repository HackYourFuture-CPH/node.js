// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

// First match is deciding
app.get("/data", (req, res) => {
  res.send({ data: 1 });
});

app.get("/data", (req, res) => {
  res.send({ data: 2 });
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
