const express = require("express");
const app = express();
const knex = require("./database");

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

app.get("/insert-new-contact", async (request, response) => {
  try {
    // insert using knex
    const contact = {
      name: "test user 22",
      phonenumber: "12345678",
    };

    const insertedContact = await knex("contacts").insert(contact);
    response.json(insertedContact);
  } catch (error) {
    throw error;
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
