const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  response.send({ data: "from app.use" });
});

module.exports = router;
