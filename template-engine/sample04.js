'use strict'

const express = require('express')
const fetch = require('isomorphic-fetch')
const app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  // ちゃんとやる場合はサニタイズしてから渡す
  const response = await fetch('https://euxn-lazy-api.herokuapp.com/')
  const json = await response.json()
  res.render('sample04', {spentMs: json.spentMs})
})

app.listen(3000)
