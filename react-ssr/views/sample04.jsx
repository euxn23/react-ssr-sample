'use strict'

const React = require('react')
const { Component } = React

module.exports = class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }

  render() {
    return (
      <div>
        <h1>Lazy api{'!'.repeat(this.state.count)} {this.props.spentMs} ms has spent.</h1>
        <button onClick={() => this.setState({count: this.state.count+1})}>💢</button>
      </div>
    )
  }
}
