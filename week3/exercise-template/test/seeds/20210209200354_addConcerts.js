const testConcerts = require('../test_concerts');

exports.seed = function(knex) {
    return knex('concerts').insert(testConcerts);
};