const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello to the World Beyond. This is Nithya Karepe trying to make contact with other humans.')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})