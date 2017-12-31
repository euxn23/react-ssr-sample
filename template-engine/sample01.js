'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<html><h1>Hello World</h1></html>')
})

app.listen(3000)
