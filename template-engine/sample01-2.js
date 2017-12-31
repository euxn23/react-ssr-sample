'use strict'

const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('sample01-2')
})

app.listen(3000)
