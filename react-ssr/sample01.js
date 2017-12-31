'use strict'

const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const MyComponent = require('./views/sample01')

const app = express()

const htmlify = rootComponent => (
  `
  <html>
    <div id="app">${rootComponent}</div>
  </html>
  `
)

app.get('/', (req, res) => {
  const prerenderedContent = renderToString(React.createElement(MyComponent))
  const prerenderedHtml = htmlify(prerenderedContent)
  res.send(prerenderedHtml)
})

app.listen(3000)
