const assert = require("assert");
const knex = require("../database");

const concertsAtId = async (id) => {
    const concertsAtId = await knex('concerts')
        .where({ id: id });
    assert.strictEqual((concertsAtId.length < 2), true);
    return concertsAtId[0];
}

module.exports = concertsAtId;