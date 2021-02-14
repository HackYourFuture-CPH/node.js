const express = require("express");
const router = express.Router();
const knex = require("../database");
const getConcert = require("../modules/getConcert");

router.get("/", async (request, response) => {
  // can think of '1e500' as infinity in MySQL
  const maxPrice = parseInt(request.query.maxPrice) || '1e500';
  // the const varName = "this" || "that" is conditional assignment
  const title = request.query.title || '';
  const band = request.query.band ||  '';
  let createdAfter = new Date(request.query.createdAfter);
  createdAfter = (createdAfter > 0) ?
    createdAfter.toISOString() :
    0;
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts")
      .where('band', 'like', `%${band}%`)
      .where('title', 'like', `%${title}%`)
      .where('price', '<=', maxPrice)
      .where('created_date', '>', createdAfter);
    return response.json(concerts);
  } catch(err) {
    if (err) {
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
});

router.get("/:id", async (request, response) => {
  try {
    const concert = await getConcert(parseInt(request.params.id));
    return (concert ? 
      response.json(concert) : 
      response.status(404).json("Not found"));
  } catch(err) {
    if (err) {
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
});

router.post("/", async (request, response) => {
  try {
    return await knex("concerts")
      .insert(request.body)
      .then(concertId => {
        knex("concerts")
          .where({ id: concertId[0] })
          .then(selectedConcert => {
            response.status(201).json(selectedConcert[0])
          })
      });
  } catch(err) {
    if (err) {
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
});

router.put("/:id", async (request, response) => {
  try {
    await knex("concerts")
      .where({ id: parseInt(request.params.id) })
      .update(request.body);
    return response.status(201).json(await getConcert(parseInt(request.params.id)));
  } catch(err) {
    if (err) {
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
});

router.delete("/:id", async (request, response) => {
  try {
    await knex("concerts")
      .where({ id: parseInt(request.params.id) })
      .del();
    return response.status(204).json({});
  } catch(err) {
    if (err) {
      console.log(err);
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
});

module.exports = router;
