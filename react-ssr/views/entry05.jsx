'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './sample05'

const main = async () => {
  const response = await fetch('https://euxn-lazy-api.herokuapp.com')
  const json = await response.json()
  ReactDOM.render(React.createElement(MyComponent, json), document.querySelector('#app'))
}

main()
