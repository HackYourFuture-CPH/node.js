import express from 'express'
import { knexInstance } from './database.js'
const app = express()
const port = 3000

app.get('/all-users', async (req, res) => {
  const users = await knexInstance('users').orderBy('id')
  res.json(users)
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello Class!' })
})

app.get('/info', async (req, res) => {
    const [rows] = await knexInstance.raw('SELECT VERSION()')
  
    res.json({
      nodeVersion: process.version,
      mysqlVersion: rows[0]['VERSION()']
    })
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})