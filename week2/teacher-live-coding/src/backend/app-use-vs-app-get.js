// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const miniRouter = require("./mini-router");

// https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
app.get("/app-get-example", (req, res) => {
  res.send({ data: "from app.get" });
});

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/meals", miniRouter);

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
