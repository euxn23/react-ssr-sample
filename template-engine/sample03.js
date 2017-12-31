'use strict'

const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('sample03', {name: req.query.name})
})

app.listen(3000)
