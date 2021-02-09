exports.up = async function(knex, Promise) {
    await knex.schema.createTable("concerts", table => {
        table
            .increments('id')
            .notNullable()
            .primary;
        table.string('title');
        table.string('band');
        table.string('venue');
        table.integer('price');
        table.datetime('performance_date');
        table.datetime('created_date').defaultTo(knex.fn.now());
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("concerts");
};
