'use strict'

const express = require('express')
const fetch = require('isomorphic-fetch')
const React = require('react')
const { renderToString } = require('react-dom/server')
const path = require('path')
const MyComponent = require('./views/sample04')

const app = express()
app.use(express.static(path.join(__dirname, './views/dist')))

const htmlify = (rootComponent, defaultProps) => (
  `
  <html>
    <div id="app">${rootComponent}</div>
    <script>window.DEFAULT_PROPS = ${JSON.stringify(defaultProps)}</script>
    <script src="entry04.js"></script>
  </html>
  `
)

app.get('/', async (req, res) => {
  const response = await fetch('http://euxn-lazy-api.herokuapp.com')
  const json = await response.json()
  const defaultProps = { spentMs: json.spentMs }
  const prerenderedContent = renderToString(React.createElement(MyComponent, defaultProps))
  res.send(htmlify(prerenderedContent, defaultProps))
})

app.listen(3000)
