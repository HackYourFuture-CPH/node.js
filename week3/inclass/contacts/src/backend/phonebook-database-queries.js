import express from "express";
import knex from "./database.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// check https://devhints.io/knex for more queries
app.get("/get-all-contacts", async (request, response) => {
  try {
    const contacts = await knex("contacts");
    console.log(contacts);
    response.json(contacts);
  } catch (error) {
    throw error;
  }
});

app.post("/insert-new-contact", async (request, response) => {
  try {
    // insert using knex
    const contact = request.body;
    console.log("A", contact)

    const insertedContact = await knex("contacts").insert(contact);
    console.log("AA", insertedContact)
    response.json(insertedContact);
  } catch (error) {
    throw error;
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
