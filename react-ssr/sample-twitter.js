'use strict'

const express = require('express')
const fetch = require('isomorphic-fetch')
const React = require('react')
const { renderToString } = require('react-dom/server')
const path = require('path')
const Twit = require('twit')
const MyComponent = require('./views/sample-twitter')
const { initialState } = MyComponent

const app = express()
app.use(express.static(path.join(__dirname, './views/dist')))

const { consumer_key, consumer_secret, access_token, access_token_secret } = process.env
const client = new Twit({ consumer_key, consumer_secret, access_token, access_token_secret })

const htmlify = (rootComponent, defaultProps) => (
  `
  <html>
    <div id="app">${rootComponent}</div>
    <script>window.DEFAULT_PROPS = ${JSON.stringify(defaultProps)}</script>
    <script src="entry-twitter.js"></script>
  </html>
  `
)

app.get('/', async (req, res) => {
  const response = await fetch('http://localhost:3000/tweets')
  const tweets = await response.json()
  const prerenderedContent = renderToString(React.createElement(MyComponent, { tweets }))
  res.send(htmlify(prerenderedContent, { tweets }))
})

app.get('/tweets', async (req, res) => {
  const data = await client.get('search/tweets', {q: 'react', count: 200, since_id: req.query.since_id})
  const tweets = data.data.statuses.filter(s => `${s.id}` !== req.query.since_id)
  res.json(tweets)
})

app.listen(process.env.PORT || 3000)

