'use strict'

const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const path = require('path')
const MyComponent = require('./views/sample05')

const app = express()
app.use(express.static(path.join(__dirname, './views/dist')))

const htmlify = rootComponent => (
  `
  <html>
    <div id="app">${rootComponent}</div>
    <script src="entry05.js"></script>
  </html>
  `
)

app.get('/', (req, res) => {
  const prerenderedContent = renderToString(React.createElement(MyComponent, { spentMs: 0 }))
  res.send(htmlify(prerenderedContent))
})

app.listen(3000)
