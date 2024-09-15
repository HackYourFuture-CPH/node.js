import { knexInstance } from './database.js'

async function insertSampleData() {
  try {
    await knexInstance.raw(`
      INSERT INTO users (created_at, confirmed_at, first_name, last_name, email)
      VALUES
        ('2022-01-15 10:00:00', '2022-01-16 12:00:00', 'John', 'Doe', 'john.doe@gmail.com'),
        ('2022-03-20 14:30:00', NULL, 'Jane', 'Smith', 'jane.smith@yahoo.com'),
        ('2022-06-10 09:15:00', '2022-06-11 11:30:00', 'Alice', 'Johnson', 'alice.j@gmail.com'),
        ('2023-01-05 16:45:00', '2023-01-06 10:00:00', 'Bob', 'Brown', 'bob.brown@hotmail.com'),
        ('2023-02-28 11:20:00', NULL, 'Emma', 'Davis', 'emma.davis@gmail.com'),
        ('2021-12-31 23:59:59', '2022-01-01 00:00:01', 'Michael', 'Wilson', 'michael.w@outlook.com'),
        ('2022-09-15 08:00:00', '2022-09-16 09:30:00', 'Olivia', 'Taylor', 'olivia.t@gmail.com'),
        ('2023-04-01 12:00:00', NULL, 'William', 'Anderson', 'will.anderson@yahoo.com'),
        ('2022-11-30 17:30:00', '2022-12-01 10:15:00', 'Sophia', 'Thomas', 'sophia.t@gmail.com'),
        ('2023-03-15 14:00:00', '2023-03-16 16:45:00', 'James', 'Jackson', 'james.j@hotmail.com')
    `)
    console.log('Sample data inserted successfully')
  } catch (error) {
    console.error('Error inserting sample data:', error)
  } finally {
    await knexInstance.destroy()
  }
}

insertSampleData()

// New function using Knex ORM methods
/*
async function insertSampleDataWithKnex() {
  try {
    await knexInstance('users').insert([
      { created_at: '2022-01-15 10:00:00', confirmed_at: '2022-01-16 12:00:00', first_name: 'John', last_name: 'Doe', email: 'john.doe@gmail.com' },
      { created_at: '2022-03-20 14:30:00', confirmed_at: null, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@yahoo.com' },
      { created_at: '2022-06-10 09:15:00', confirmed_at: '2022-06-11 11:30:00', first_name: 'Alice', last_name: 'Johnson', email: 'alice.j@gmail.com' },
      { created_at: '2023-01-05 16:45:00', confirmed_at: '2023-01-06 10:00:00', first_name: 'Bob', last_name: 'Brown', email: 'bob.brown@hotmail.com' },
      { created_at: '2023-02-28 11:20:00', confirmed_at: null, first_name: 'Emma', last_name: 'Davis', email: 'emma.davis@gmail.com' },
      { created_at: '2021-12-31 23:59:59', confirmed_at: '2022-01-01 00:00:01', first_name: 'Michael', last_name: 'Wilson', email: 'michael.w@outlook.com' },
      { created_at: '2022-09-15 08:00:00', confirmed_at: '2022-09-16 09:30:00', first_name: 'Olivia', last_name: 'Taylor', email: 'olivia.t@gmail.com' },
      { created_at: '2023-04-01 12:00:00', confirmed_at: null, first_name: 'William', last_name: 'Anderson', email: 'will.anderson@yahoo.com' },
      { created_at: '2022-11-30 17:30:00', confirmed_at: '2022-12-01 10:15:00', first_name: 'Sophia', last_name: 'Thomas', email: 'sophia.t@gmail.com' },
      { created_at: '2023-03-15 14:00:00', confirmed_at: '2023-03-16 16:45:00', first_name: 'James', last_name: 'Jackson', email: 'james.j@hotmail.com' }
    ])
    console.log('Sample data inserted successfully')
  } catch (error) {
    console.error('Error inserting sample data:', error)
  } finally {
    await knexInstance.destroy()
  }
}

insertSampleDataWithKnex()
*/
