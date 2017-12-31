'use strict'

const React = require('react')
const { Component } = React

module.exports = class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}
