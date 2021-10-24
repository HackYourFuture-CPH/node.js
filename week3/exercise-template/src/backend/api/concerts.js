const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Docs: https://knexjs.org/#Builder
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    
    console.log("body", request.body)


    // Validation (this can be improved... look at libraries such as Zod)
    let requestValid = true;
    let errorMessage = "";

    if (isNaN(request.body.price)) {
      requestValid = false;
      errorMessage += "Price is not a number."
    }

    if (!isNaN(request.body.band)) {
      requestValid = false;
      errorMessage += "Band is a number. Should be string."
    }

    if (!requestValid) {
      response.status(500).json({error: errorMessage});
    }

    // Docs: https://knexjs.org/#Builder-insert
    const success = await knex("concerts").insert(request.body);

    if (!!(success[0])) {
      console.log("Insert finished", success);
      response.status(200).json(success);
    } else {
      response.status(500).json({error: "Writing to database failed"});
    }
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    // Select concerts where id is the same as the request parameter ":id"
    const concerts = await knex("concerts").where({id: request.params.id});
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.patch("/:id", async (request, response) => {

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts").where({id: request.params.id}).update(
      // The array on the right was expected return back the values of the fields
      // listed, but it does not seems to work quite like that. I left it in there
      // for future reference. You can probably improve this :)
      request.body, ['id', ...Object.keys(request.body)]
    );
    response.json(concerts).status(200);
  } catch (error) {
    // This line was added after class.
    response.status(500).json({ error: "An error happened trying to submit a patch request"})
    throw error;
  }
});

module.exports = router;
