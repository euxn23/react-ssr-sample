'use strict'

const React = require('react')
const { Component } = React

const Tweet = ({ user, text}, idx) => (
  <tr key={idx}>
    <th>@{user.screen_name}</th>
    <th>{text}</th>
  </tr>
)

module.exports = class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('render')
    return (
      <table border="1">
        <tr>
          <th>Screen Name</th>
          <th>Tweet</th>
        </tr>
        { this.props.tweets.map(Tweet) }
      </table>
    )
  }
}
