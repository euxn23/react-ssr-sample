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
        'Lazy api',
        '!'.repeat(this.state.count),
        ' ',
        this.props.spentMs,
        ' ms has spent.'
      ),
      React.createElement(
        'button',
        { onClick: () => this.setState({ count: this.state.count + 1 }) },
        '\uD83D\uDCA2'
      )
    );
  }
};
