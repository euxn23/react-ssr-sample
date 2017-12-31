'use strict';

const React = require('react');
const { Component } = React;

module.exports = class MyComponent extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        this.props.message
      )
    );
  }
};
