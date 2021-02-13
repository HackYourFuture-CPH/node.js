exports.up = async function(knex, Promise) {
    await knex.schema.createTable("concerts", table => {
        table
            .increments('id')
            .notNullable()
            .primary;
        table.string('title').notNullable();
        table.string('band').notNullable();
        table.string('venue').notNullable();
        table.integer('price').notNullable();
        table.datetime('performance_date').notNullable();
        table.datetime('created_date').defaultTo(knex.fn.now());
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("concerts");
};
