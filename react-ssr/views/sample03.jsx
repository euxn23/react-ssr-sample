'use strict'

const React = require('react')
const { Component } = React

module.exports = class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}
