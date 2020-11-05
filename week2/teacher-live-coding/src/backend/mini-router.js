const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.headers["accept-language"]);
  const systemSetToEnglish = req.headers["accept-language"].includes("en");
  console.log(`User's system is english?: ${systemSetToEnglish}`);
  req.systemSetToEnglish = systemSetToEnglish;

  next();
});

router.get("/", async (request, response) => {
  response.send({ data: "router index" });
});

router.get("/about", async (request, response) => {
  response.send({ data: "router about" });
});

module.exports = router;
