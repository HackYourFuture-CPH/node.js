import knex from 'knex'

const knexInstance = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'my-secret-pw',
        database: 'mysql'
    }
})

export { knexInstance }