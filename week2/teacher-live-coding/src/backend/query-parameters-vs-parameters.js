// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

// query parameters
// http://localhost:3000/query-parameters?hej=23,%20sd-p
app.get("/query-parameters", (req, res) => {
  console.log(req.query);
  res.send(`The place you want to go is: ${req.query.placeiwannago}`);
});

// parameters
// http://localhost:3000/parameters/apple-eater
app.get("/maps/place/:placename", (req, res) => {
  console.log(req.params);
  res.send({ data: req.params });
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
