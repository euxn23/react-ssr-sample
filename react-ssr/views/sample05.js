'use strict';

const React = require('react');
const { Component } = React;

module.exports = class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Lazy API, but async',
        '♥️'.repeat(this.state.count),
        ' ',
        this.props.spentMs ? `${this.props.spentMs} ms has spent.` : 'Now loading...'
      ),
      React.createElement(
        'button',
        { onClick: () => this.setState({ count: this.state.count + 1 }) },
        '\u2665\uFE0F'
      )
    );
  }
};
