'use strict'

const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const path = require('path')
const MyComponent = require('./views/sample06')

const app = express()
app.use(express.static(path.join(__dirname, './views/dist')))

const htmlify = (rootComponent, defaultProps) => (
  `
  <html>
    <div id="app">${rootComponent}</div>
    <script>window.DEFAULT_PROPS = ${JSON.stringify(defaultProps)}</script>
    <script src="entry06.js"></script>
  </html>
  `
)

app.get('/', (req, res) => {
  const defaultProps = { spentMs: 0 }
  const prerenderedContent = renderToString(React.createElement(MyComponent, defaultProps))
  res.send(htmlify(prerenderedContent, defaultProps))
})

app.listen(3000)
