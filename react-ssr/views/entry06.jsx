'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './sample06'

const lazyApiCallAndRerender = async () => {
  const response = await fetch('https://euxn-lazy-api.herokuapp.com')
  const json = await response.json()
  ReactDOM.render(React.createElement(MyComponent, json), document.querySelector('#app'))
}

const defaultProps = window.DEFAULT_PROPS
ReactDOM.render(React.createElement(MyComponent, defaultProps), document.querySelector('#app'))
lazyApiCallAndRerender()
