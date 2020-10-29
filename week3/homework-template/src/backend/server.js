const app = require("./app");

const port = parseInt(process.env.PORT, 10) || process.env.API_PORT;

app.listen(port, () => {
  console.log("Backend api available at /api");
});
