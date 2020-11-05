// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const miniRouter = require("./mini-router");

app.use((req, res, next) => {
  console.log(req.headers);
  const isFromDenmark = req.headers["accept-language"].includes("da");
  console.log(isFromDenmark);
  request.isFromDenmark = isFromDenmark;

  next();
});

app.use('/router', miniRouter);

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
