import express, { request, response } from "express";
import knex from "../database.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const contacts = await knex("contacts");
    response.json(contacts);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  console.log("METHOD GET, contact by id")
  try {
    console.log("params", request.params)
    const { id } = request.params;
    console.log("id", id);
    const contact = await knex("contacts").where({ id }).first();
    response.json(contact);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const contact = request.body
    console.log(contact);
    // This could be insecure!!
    const numberOfInsertedRows = await knex("contacts").insert(contact);
    response.json(numberOfInsertedRows);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  console.log("METHOD PUT, contact update")
  try {
    const { id } = request.params;
    console.log("id", id)
    const contact = request.body;
    console.log("contact", contact)
    const numberOfUpdatedRows = await knex("contacts").where({ id }).update(contact);
    console.log("numberOfUpdatedRows", numberOfUpdatedRows)
    response.json(numberOfUpdatedRows);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  console.log("METHOD DELETE, contact delete")
  try {
    const { id } = request.params;
    console.log("id", id)
    const numberOfDeletedRows = await knex("contacts").where({ id }).delete()
    response.json(numberOfDeletedRows);
  } catch (error) {
    throw error;
  }
});

export default router;
