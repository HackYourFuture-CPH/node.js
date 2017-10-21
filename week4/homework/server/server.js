const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("static"));
app.use(bodyParser.json());

// ==============================================================================
if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleWare = require("webpack-hot-middleware");

  const config = require("../webpack.config");
  config.entry.app.push(
    "webpack-hot-middleware/client",
    "webpack/hot/only-dev-server"
  );
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundler = webpack(config);
  app.use(webpackDevMiddleware(bundler, { noInfo: true }));
  app.use(webpackHotMiddleWare(bundler, { log: console.log }));
}
// ==============================================================================

// data store
let cars = [
  { id: 1, brand: "Ferrari", model: "488", color: "red", gears: "5" },
  { id: 2, brand: "Fiat", model: "Uno", color: "red", gears: "5" }
];
// GET
app.get("/api/cars", (req, res) => {
  res.json({ records: cars });
});

// POST
app.post("/api/cars", (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.json({ records: cars });
});

// PUT
app.put("/api/cars/:id", (req, res) => {
  const index = cars.findIndex((car) => car.id == req.params.id);
  console.log(`index value of modified car is ${index}`);
  cars[index] = req.body;
  res.json({ records: cars });
});

// DELETE
app.delete("/api/cars/:id", (req, res) => {
  cars = cars.filter((car) => car.id != req.params.id);
  res.json({ records: cars });
});

// PORT specifier
app.listen(4000, function() {
  console.log("car app listening on port 4000 ...");
});
