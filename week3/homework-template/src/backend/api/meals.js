const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {
  pool.query("some sql query", function(error, results, fields) {
    if (error) {
      // throw error;
    }

    response.json({ this: "is working!" });
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

module.exports = router;
