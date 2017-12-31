'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './sample04'

const defaultProps = window.DEFAULT_PROPS

ReactDOM.render(React.createElement(MyComponent, defaultProps), document.querySelector('#app'))
