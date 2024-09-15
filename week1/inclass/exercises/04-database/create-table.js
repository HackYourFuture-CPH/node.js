import { knexInstance } from './database.js'

async function createUsersTable() {
  try {
    await knexInstance.raw(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        confirmed_at TIMESTAMP NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
      )
    `)
    console.log('Users table created successfully')
  } catch (error) {
    console.error('Error creating users table:', error)
  } finally {
    await knexInstance.destroy()
  }
}

createUsersTable()

// Knex ORM version of the function
/*
async function createUsersTableKnex() {
  try {
    await knexInstance.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.timestamp('created_at').defaultTo(knexInstance.fn.now())
      table.timestamp('confirmed_at').nullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').unique().notNullable()
    })
    console.log('Users table created successfully')
  } catch (error) {
    console.error('Error creating users table:', error)
  } finally {
    await knexInstance.destroy()
  }
}

// createUsersTableKnex()
*/