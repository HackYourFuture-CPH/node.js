const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  console.log("GET")
  try {
    const { maxPrice, title, band, createdAfter } = request.query;
    console.log("maxPrice=", maxPrice)
    console.log("title=", title)
    console.log("band=", band)
    console.log("createdAfter=", createdAfter)

    // let concerts;
    // if(maxPrice === undefined) {
    //   concerts = await knex("concerts")
    // } else {
    //   concerts = await knex("concerts").where("price", "<", maxPrice)
    // }

    const query = knex("concerts")
    if(maxPrice !== undefined) {
      query.where("price", "<", maxPrice)
    }
    if(title !== undefined) {
      query.where('title', 'like', `%${title}%`)
    }
    if( band !== undefined ) {
      query.where("band", band)
    }
    if( createdAfter !== undefined ) {
      query.where("created_date", ">", createdAfter)
    }
    const concerts = await query
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
