'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'
import MyComponent from './sample-twitter'

let tweets = window.DEFAULT_PROPS.tweets

const appendLatestTweet = async () => {
  const response = await fetch(`https://euxn-ssr-twitter.herokuapp.com/tweets?since_id=${tweets[0].id}`)
  const nextTweets = await response.json()
  tweets = [...nextTweets, ...tweets]
  ReactDOM.render(React.createElement(MyComponent, { tweets }), document.querySelector('#app'))
}

setInterval(appendLatestTweet, 20000)

ReactDOM.render(React.createElement(MyComponent, { tweets }), document.querySelector('#app'))

