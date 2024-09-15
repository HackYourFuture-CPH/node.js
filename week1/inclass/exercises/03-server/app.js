import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("Get request received");
  console.log("query: ", req.query);
  res.json({message: "Now everything updates!"})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})