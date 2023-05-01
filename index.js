const express = require('express')
const catagoris = require('./data/catagoris.json')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('fggHello World!')
})

app.get('/catagoris', (req, res) => {
    res.send(catagoris)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})