require("dotenv").config({ path: "../../.env" });

// db setup
const dbOptions = require("./knexfile")[process.env.NODE_ENV];

// create connection
const knex = require("knex")(dbOptions);

// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to ${dbOptions.connection.database} db successful!`);
});

module.exports = knex;
