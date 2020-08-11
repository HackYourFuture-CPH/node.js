const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  response.send({ data: [] });
});

module.exports = router;
