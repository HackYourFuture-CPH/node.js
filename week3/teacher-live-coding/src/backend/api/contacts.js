const express = require("express");
const { join } = require("path");
const router = express.Router();
const knex = require("../database");

notFoundResponse = (response, error) => {
  return response.status(400).json({"error": error});
};

router.get("/", async (request, response) => {
  try {
    // Allowing the following query params:
    //   1. name
    //   2. createdAfter
    //   3. nameStartsWith
    // There are at least two options with query params:
    //   1. Check for query params and adjust the knex query that is made (I use this in the example below)
    //   2. Retrieve all contacts and then filter results based on query params
    const names = await knex("contacts")
      .limit(50)
      // Below is inspired by: https://stackoverflow.com/a/36064282
      .modify(function(queryBuilder) {
          if (request.query.name) {
            queryBuilder.where('name', request.query.name);
          }
          if (request.query.nameStartsWith) {
            // Need to remember how to match using SQL: https://github.com/knex/knex/issues/2009
            queryBuilder.where('name', 'like', `${request.query.nameStartsWith}%`);
          }
          if (request.query.createdAfter) {
            queryBuilder.where('created_date', '>', request.query.createdAfter);
          }
      });
    response.json(names);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    // This could be insecure without doing additional validation on the request.body (SQL injection for instance)!!
    request.body.created_date = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const insertedContact = await knex("contacts").insert(request.body);
    response.json(insertedContact);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    if (!parseInt(request.params.id)) {
      return notFoundResponse(response, "No id in params or id was not an integer");
    };
    console.log(request.params);
    const contact = await knex("contacts")
      .where({ id: parseInt(request.params.id) });
    if (contact.length == 0) {
      response.send(404)
    } else {
      response.json(contact[0]);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (request, response, next) => {
  try {
    if (!parseInt(request.params.id)) {
      return notFoundResponse(response, "No id in params or id was not an integer");
    };
    const updatedContact = await knex('contacts')
      .where({ id: parseInt(request.params.id) })
      .update({"name": "what the hell"}, ["id", "name"]);
    if (updatedContact) {
      console.log("updated");
      return response.json(`Updated contact: ${request.params.id}`);
    }
    response.send(404)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
