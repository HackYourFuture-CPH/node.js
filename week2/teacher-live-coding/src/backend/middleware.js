// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.headers["accept-language"]);
  const isFromDenmark = req.headers["accept-language"].includes("da");
  console.log(isFromDenmark);
  req.isFromDenmark = isFromDenmark;

  next();
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
